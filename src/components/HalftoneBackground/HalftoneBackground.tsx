/**
 * Migrated from: original_version/src/components/comic/HalftoneBackground.tsx
 */

import { cn } from "@/utils/cn";

interface HalftoneBackgroundProps {
  className?: string;
  variant?: "dots" | "lines" | "diagonal";
  color?: "ink" | "primary" | "secondary" | "accent";
  opacity?: number;
  children?: React.ReactNode;
}

export function HalftoneBackground({
  className,
  variant = "dots",
  color = "ink",
  opacity = 0.1,
  children,
}: HalftoneBackgroundProps) {
  const colorMap = {
    ink: "var(--ink-black)",
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    accent: "var(--accent)",
  };

  const patterns = {
    dots: `radial-gradient(circle, hsl(${colorMap[color]} / ${opacity}) 1.5px, transparent 1.5px)`,
    lines: `repeating-linear-gradient(0deg, transparent, transparent 4px, hsl(${colorMap[color]} / ${opacity}) 4px, hsl(${colorMap[color]} / ${opacity}) 5px)`,
    diagonal: `repeating-linear-gradient(45deg, transparent, transparent 4px, hsl(${colorMap[color]} / ${opacity}) 4px, hsl(${colorMap[color]} / ${opacity}) 5px)`,
  };

  const sizes = {
    dots: "8px 8px",
    lines: "100% 10px",
    diagonal: "10px 10px",
  };

  return (
    <div
      className={cn("relative", className)}
      style={{
        backgroundImage: patterns[variant],
        backgroundSize: sizes[variant],
      }}
    >
      {children}
    </div>
  );
}

