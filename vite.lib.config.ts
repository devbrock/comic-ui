import react from "@vitejs/plugin-react-swc";
import fs from "node:fs";
import path from "node:path";
import { defineConfig, type UserConfig } from "vite";

type DependencyMap = Record<string, string>;

type PackageJson = Readonly<{
  dependencies?: DependencyMap;
  peerDependencies?: DependencyMap;
}>;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function asDependencyMap(value: unknown): DependencyMap | undefined {
  if (!isRecord(value)) return undefined;
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(value)) {
    if (typeof v === "string") out[k] = v;
  }
  return out;
}

function readPackageJson(): PackageJson {
  const pkgPath = path.resolve(__dirname, "package.json");
  const raw = JSON.parse(fs.readFileSync(pkgPath, "utf-8")) as unknown;
  if (!isRecord(raw)) return {};

  return {
    dependencies: asDependencyMap(raw.dependencies),
    peerDependencies: asDependencyMap(raw.peerDependencies),
  };
}

/**
 * Library build config (ESM-only) for `@devbrock/comic-ui`.
 *
 * This is separate from the demo app Vite config (`vite.config.ts`) so the
 * demo can keep its own dev-server settings/plugins.
 */
export default defineConfig(() => {
  const pkg = readPackageJson();

  const external = new Set<string>([
    ...Object.keys(pkg.dependencies ?? {}),
    ...Object.keys(pkg.peerDependencies ?? {}),
    "react/jsx-runtime",
  ]);

  const config = {
    plugins: [react()],
    publicDir: false as const,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/index.ts"),
        formats: ["es"],
        fileName: () => "index.js",
      },
      outDir: "dist",
      emptyOutDir: true,
      sourcemap: true,
      copyPublicDir: false,
      rollupOptions: {
        external: Array.from(external),
        output: {
          /**
           * Preserve module boundaries so consumers (especially Next.js RSC)
           * don't end up importing a single aggregated entry file that hoists
           * client-only imports (e.g. `react-hook-form`) into `dist/index.js`.
           */
          preserveModules: true,
          preserveModulesRoot: path.resolve(__dirname, "src"),
          /**
           * Mark the library entry/chunks as client modules for Next.js App Router.
           *
           * Without this, Next may attempt to compile the package in a Server
           * Components context and resolve `react-hook-form` to its `react-server`
           * entrypoint (which does not export `Controller`).
           */
          banner: '"use client";',
        },
      },
    },
  } satisfies UserConfig;

  return config;
});
