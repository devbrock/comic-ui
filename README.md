# Comic UI

Comic-inspired React components powered by TailwindCSS.

Think of it like snapping a new LEGO brick into your build: you install the package, tell Tailwind to “look at it” when generating CSS, then import the components you want.

## Install

```bash
pnpm add @devbrock/comic-ui
```

## Base styles (required)

Comic UI components use shadcn-style design tokens (CSS variables) and a few animation helpers. Import the library’s base stylesheet once (usually in your app’s global CSS or root entry file):

```ts
import "@devbrock/comic-ui/styles.css";
```

If you want the demo typography, load the fonts in your app (Comic UI references `Bangers` and `Outfit` but does not auto-load them).

## Tailwind setup (required)

Because Tailwind only generates CSS for classnames it can “see”, you must include this library in Tailwind’s scan paths; otherwise components (like `Button`) will render unstyled.

### Tailwind v3 (tailwind.config.(js|ts))

Add the library to your `content` globs:

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@devbrock/comic-ui/dist/**/*.{js,cjs,mjs}",
  ],
} satisfies Config;
```

### Tailwind v4 (CSS-first)

Add a `@source` for the library in your global CSS (the file where you import Tailwind):

```css
@import "tailwindcss";
@source "../node_modules/@devbrock/comic-ui/dist/**/*.{js,cjs,mjs}";
@import "@devbrock/comic-ui/styles.css";
```

## Use `Button`

```tsx
import { Button } from "@devbrock/comic-ui";

export function Example() {
  return <Button onClick={() => console.log("Pow!")}>Click me</Button>;
}
```

### Variants

`Button` supports variants and sizes via props:

```tsx
import { Button } from "@devbrock/comic-ui";

export function Example() {
  return (
    <>
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="impact">Impact</Button>
      <Button variant="hero">Hero</Button>
      <Button variant="heroBlue">Hero Blue</Button>
      <Button variant="mutant">Mutant</Button>
      <Button variant="gamma">Gamma</Button>
      <Button variant="burst">Burst</Button>
    </>
  );
}
```

Sizes:

```tsx
import { Button } from "@devbrock/comic-ui";

export function Example() {
  return (
    <>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">XL</Button>
      <Button size="icon" aria-label="Icon button">
        +
      </Button>
    </>
  );
}
```

## Notes

- The root entrypoint exports **named exports** for components/utilities (for example `Button`, `cn`, `toast`, `useToast`).
- `Button` is a single component; you pick its styling using the `variant` and `size` props.
