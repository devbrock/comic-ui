# Marvelous UI

Comic-inspired React components powered by TailwindCSS.

Think of it like snapping a new LEGO brick into your build: you install the package, tell Tailwind to “look at it” when generating CSS, then import the components you want.

## Install

```bash
pnpm add @devbrock/marvelous-ui
```

## Tailwind setup (required)

Because Tailwind only generates CSS for classnames it can “see”, you must include this library in Tailwind’s scan paths; otherwise `Button.Standard` will render unstyled.

### Tailwind v3 (tailwind.config.(js|ts))

Add the library to your `content` globs:

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@devbrock/marvelous-ui/dist/**/*.{js,cjs,mjs}",
  ],
} satisfies Config;
```

### Tailwind v4 (CSS-first)

Add a `@source` for the library in your global CSS (the file where you import Tailwind):

```css
@import "tailwindcss";
@source "../node_modules/@devbrock/marvelous-ui/dist/**/*.{js,cjs,mjs}";
```

## Use `Button.Standard`

```tsx
import { Button } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <Button.Standard onClick={() => console.log("Pow!")}>
      Click me
    </Button.Standard>
  );
}
```

You can also use:

- `Button.Destructive`

## Notes

- The root entrypoint exports `Button`.
- `Button.Standard` and `Button.Destructive` are pre-wired variants, so you don’t pass a `variant` prop.
