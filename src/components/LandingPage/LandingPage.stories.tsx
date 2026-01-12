import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";
import { Box, Code, Palette, Rocket, Sparkles, Zap } from "lucide-react";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import {
  ComicPanel,
  ComicBadge,
  ImpactText,
  HalftoneBackground,
  SpeedLines,
} from "@/components/comic";
import heroBg from "@/assets/hero-bg.jpg";
import {
  componentExamples,
  ExampleGrid,
  type ComponentExample,
} from "@/demo/component-examples";
import { CopyButton } from "@/components/demo/CopyButton";

/**
 * Storybook landing page for the component library.
 *
 * This is intended to match `original_version/src/pages/Index.tsx`.
 */
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Setup */}
      <SetupSection />

      {/* Components Explorer */}
      <ComponentsExplorer />

      {/* Features Section */}
      <FeaturesSection />

      {/* Design Tokens Section */}
      <DesignTokensSection />

      {/* Call to Action */}
      <CTASection />
    </div>
  );
};

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Light wash + bottom fade (match the softer cover look) */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 " />

      {/* Speed Lines */}
      <SpeedLines direction="radial" intensity="light" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="font-display uppercase tracking-wide leading-[0.85]">
          <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white drop-shadow-[4px_4px_0px_hsl(var(--ink-black))]">
            Comic
          </span>
          <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-hero-red drop-shadow-[4px_4px_0px_hsl(var(--ink-black))]">
            UI
          </span>
        </h1>

        <p className="mt-6 font-body text-xl md:text-2xl text-white/90 max-w-3xl mx-auto text-shadow-sm">
          A comic book-inspired React component library built on shadcn/ui.
          Bold. Dynamic. Heroic.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" asChild>
            <a
              href="#get-started"
              className="inline-flex items-center justify-center"
            >
              <Rocket className="mr-2" />
              Get Started
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a
              href="#components"
              className="inline-flex items-center justify-center"
            >
              <Code className="mr-2" />
              View Components
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function SetupSection() {
  const installCmd = "pnpm add @devbrock/comic-ui";

  const tailwindV3Config = `// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@devbrock/comic-ui/dist/**/*.{js,cjs,mjs}",
  ],
} satisfies Config;`;

  const tailwindV4Css = `@import "tailwindcss";
@source "../node_modules/@devbrock/comic-ui/dist/**/*.{js,cjs,mjs}";`;

  return (
    <section id="get-started" className="py-20 bg-muted scroll-mt-10">
      <HalftoneBackground variant="dots" opacity={0.05} className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <ImpactText
              text="Get Started"
              color="blue"
              size="lg"
              animated={false}
            />
            <p className="font-body text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Think of setup like giving your hero a suit: once Tailwind knows
              where to look, every component snaps in cleanly.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <ComicPanel variant="thick" cornerLabel="1">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl">Install</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Add the package to your project.
                  </p>
                </div>
                <CopyButton text={installCmd} />
              </div>
              <pre className="mt-4 rounded-md border-2 border-ink bg-background p-4 overflow-auto">
                <code className="font-mono text-sm whitespace-pre">
                  {installCmd}
                </code>
              </pre>
            </ComicPanel>

            <ComicPanel variant="thick" cornerLabel="2">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl">Tailwind v3 (Config)</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Add Comic UI to Tailwind's content globs.
                  </p>
                </div>
                <CopyButton text={tailwindV3Config} />
              </div>
              <pre className="mt-4 rounded-md border-2 border-ink bg-background p-4 overflow-auto">
                <code className="font-mono text-xs whitespace-pre">
                  {tailwindV3Config}
                </code>
              </pre>
            </ComicPanel>

            <ComicPanel variant="thick" cornerLabel="3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl">Tailwind v4 (CSS)</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Add an <code className="font-mono">@source</code> so
                    Tailwind can see Comic UI's class names.
                  </p>
                </div>
                <CopyButton text={tailwindV4Css} />
              </div>
              <pre className="mt-4 rounded-md border-2 border-ink bg-background p-4 overflow-auto">
                <code className="font-mono text-sm whitespace-pre">
                  {tailwindV4Css}
                </code>
              </pre>
            </ComicPanel>
          </div>
        </div>
      </HalftoneBackground>
    </section>
  );
}

function ComponentsExplorer() {
  const [query, setQuery] = React.useState("");
  const normalized = query.trim().toLowerCase();

  const filtered = React.useMemo(() => {
    if (!normalized) return componentExamples;
    return componentExamples.filter((ex) => {
      const haystack = `${ex.title} ${ex.description ?? ""} ${
        ex.category
      }`.toLowerCase();
      return haystack.includes(normalized);
    });
  }, [normalized]);

  const categories = React.useMemo(() => {
    const set = new Set<ComponentExample["category"]>();
    filtered.forEach((ex) => set.add(ex.category));
    return [
      "Comic",
      "Inputs",
      "Feedback",
      "Navigation",
      "Overlays",
      "Data Display",
      "Utilities",
    ].filter((c) =>
      set.has(c as ComponentExample["category"])
    ) as ComponentExample["category"][];
  }, [filtered]);

  const byCategory = React.useMemo(() => {
    const map = new Map<ComponentExample["category"], ComponentExample[]>();
    for (const ex of filtered) {
      const current = map.get(ex.category) ?? [];
      current.push(ex);
      map.set(ex.category, current);
    }
    return map;
  }, [filtered]);

  return (
    <section id="components" className="py-20 scroll-mt-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <ImpactText
            text="Components"
            color="red"
            size="lg"
            animated={false}
          />
          <p className="font-body text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Browse live examples and copy-paste ready snippets. If your setup is
            correct, it should work like a LEGO set: snap it together and go.
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-10">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search components (e.g. button, dialog, tooltip)…"
            aria-label="Search components"
          />
          <p className="mt-2 text-center text-xs text-muted-foreground">
            Showing <span className="font-display">{filtered.length}</span>{" "}
            examples.
          </p>
        </div>

        <div className="space-y-14">
          {categories.map((cat) => {
            const examples = byCategory.get(cat) ?? [];
            if (examples.length === 0) return null;
            return (
              <div key={cat} className="space-y-6">
                <div className="flex items-center justify-center gap-3">
                  <ComicBadge variant="caption">{cat}</ComicBadge>
                </div>
                <ExampleGrid examples={examples} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: Palette,
      title: "Comic Theming",
      description:
        "Bold primaries, halftones, thick inks, and panel-based layouts that capture the Marvel aesthetic.",
      color: "hero-red" as const,
    },
    {
      icon: Box,
      title: "shadcn/ui Compatible",
      description:
        "Built on top of shadcn/ui primitives. Same API, comic-book styling, full customization.",
      color: "hero-blue" as const,
    },
    {
      icon: Zap,
      title: "Impact Animations",
      description:
        "POW! BAM! Dynamic animations and transitions that bring your UI to life.",
      color: "hero-yellow" as const,
    },
    {
      icon: Sparkles,
      title: "Accessible",
      description:
        "WCAG AA compliant with full keyboard navigation and screen reader support.",
      color: "mutant-purple" as const,
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <SpeedLines direction="left" intensity="light" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <ComicBadge variant="caption" className="mb-4">
            Features
          </ComicBadge>
          <h2 className="font-display text-5xl md:text-6xl">
            Super Powers <span className="text-hero-red">Included</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <ComicPanel
              key={feature.title}
              variant="default"
              className="hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-impact transition-all duration-200"
            >
              <div
                className={`w-14 h-14 rounded-full bg-${feature.color} flex items-center justify-center mb-4 border-3 border-ink`}
              >
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl mb-2">{feature.title}</h3>
              <p className="font-body text-muted-foreground text-sm">
                {feature.description}
              </p>
            </ComicPanel>
          ))}
        </div>
      </div>
    </section>
  );
}

function DesignTokensSection() {
  const colors = [
    { name: "Hero Red", var: "hero-red", class: "bg-hero-red" },
    { name: "Hero Blue", var: "hero-blue", class: "bg-hero-blue" },
    { name: "Hero Yellow", var: "hero-yellow", class: "bg-hero-yellow" },
    { name: "Mutant Purple", var: "mutant-purple", class: "bg-mutant-purple" },
    { name: "Gamma Green", var: "gamma-green", class: "bg-gamma-green" },
    { name: "Cosmic Orange", var: "cosmic-orange", class: "bg-cosmic-orange" },
    { name: "Ink Black", var: "ink-black", class: "bg-ink" },
    {
      name: "Page Cream",
      var: "page-cream",
      class: "bg-page border-2 border-ink",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <ComicBadge variant="caption" className="mb-4">
            Design System
          </ComicBadge>
          <h2 className="font-display text-5xl md:text-6xl">
            Color <span className="text-hero-blue">Palette</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
            A carefully curated palette inspired by classic and 90s Marvel
            comics
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {colors.map((color) => (
            <ComicPanel
              key={color.name}
              variant="default"
              className="text-center"
            >
              <div
                className={`w-full h-20 ${color.class} border-3 border-ink mb-3`}
              />
              <p className="font-display text-sm">{color.name}</p>
              <code className="font-body text-xs text-muted-foreground">
                --{color.var}
              </code>
            </ComicPanel>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <HalftoneBackground
        variant="diagonal"
        opacity={0.03}
        className="absolute inset-0"
      />
      <SpeedLines direction="radial" intensity="medium" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <ImpactText
          text="Ready to Assemble?"
          color="yellow"
          size="xl"
          animated={false}
        />

        <p className="font-body text-xl text-muted-foreground mt-6 mb-8 max-w-2xl mx-auto">
          Start building heroic interfaces today. It's free, open-source, and
          waiting for your next epic project.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="burst" size="xl">
            <Zap className="mr-2" />
            Install Now
          </Button>
          <Button variant="outline" size="xl">
            GitHub
          </Button>
        </div>

        <div className="mt-12 flex justify-center gap-6 opacity-60">
          <span className="font-body text-sm">React 18+</span>
          <span className="text-muted-foreground">•</span>
          <span className="font-body text-sm">TypeScript</span>
          <span className="text-muted-foreground">•</span>
          <span className="font-body text-sm">Tailwind CSS</span>
          <span className="text-muted-foreground">•</span>
          <span className="font-body text-sm">shadcn/ui</span>
        </div>
      </div>
    </section>
  );
}

const meta = {
  title: "Landing/Index",
  component: LandingPage,
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
  },
} satisfies Meta<typeof LandingPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Catalog: Story = {
  render: () => <LandingPage />,
};
