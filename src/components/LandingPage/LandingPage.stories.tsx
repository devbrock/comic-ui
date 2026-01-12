import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";
import type { ColumnDef } from "@tanstack/react-table";
import {
  Bell,
  Box,
  Code,
  LayoutDashboard,
  Palette,
  Pencil,
  Plus,
  Rocket,
  Search,
  Settings,
  Sparkles,
  Ticket,
  Trash2,
  Users,
  Zap,
} from "lucide-react";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { Label } from "@/components/Label";
import { Badge } from "@/components/Badge";
import { Progress } from "@/components/Progress";
import { Toaster } from "@/components/Toaster";
import { DataTable } from "@/components/DataTable";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/Dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/AlertDialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs";
import { Avatar, AvatarFallback } from "@/components/Avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/Sidebar";
import {
  ComicPanel,
  ComicBadge,
  ImpactText,
  HalftoneBackground,
  SpeedLines,
} from "@/components/comic";
import { toast } from "@/hooks/use-toast";
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
  const baseStylesImport = `import "@devbrock/comic-ui/styles.css";`;
  /* @ts-ignore */
  const tailwindV3Config = `// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@devbrock/comic-ui/dist/**/*.{js,cjs,mjs}",
  ],
} satisfies Config;`;

  const tailwindV4Css = `@import "tailwindcss";
@source "../node_modules/@devbrock/comic-ui/dist/**/*.{js,cjs,mjs}";
@import "@devbrock/comic-ui/styles.css";`;

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
                  <h3 className="font-display text-xl">Base Styles</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Import the default tokens + animation helpers once.
                  </p>
                </div>
                <CopyButton text={baseStylesImport} />
              </div>
              <pre className="mt-4 rounded-md border-2 border-ink bg-background p-4 overflow-auto">
                <code className="font-mono text-xs whitespace-pre">
                  {baseStylesImport}
                </code>
              </pre>
            </ComicPanel>

            <ComicPanel variant="thick" cornerLabel="3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl">Tailwind</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Tell Tailwind where to scan Comic UI’s class names.
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

const TICKET_STATUSES = ["Open", "In Progress", "Blocked", "Done"] as const;
type TicketStatus = (typeof TICKET_STATUSES)[number];

const TICKET_PRIORITIES = ["Low", "Medium", "High", "Critical"] as const;
type TicketPriority = (typeof TICKET_PRIORITIES)[number];

type DashboardTab = "overview" | "tickets" | "settings";

type DashboardTicket = {
  id: string;
  title: string;
  description: string;
  assignee: string;
  status: TicketStatus;
  priority: TicketPriority;
  points: number;
  createdAtIso: string;
  updatedAtIso: string;
};

type TicketDraft = Pick<
  DashboardTicket,
  "title" | "description" | "assignee" | "status" | "priority" | "points"
>;

function isTicketStatus(value: string): value is TicketStatus {
  return (TICKET_STATUSES as readonly string[]).includes(value);
}

function isTicketPriority(value: string): value is TicketPriority {
  return (TICKET_PRIORITIES as readonly string[]).includes(value);
}

/**
 * Creates a stable-ish id for the dashboard story without relying on browser-only APIs.
 */
function createDashboardId(prefix: string): string {
  return `${prefix}_${Date.now().toString(36)}_${Math.random()
    .toString(36)
    .slice(2, 10)}`;
}

/**
 * Fake network latency helper for the dashboard story.
 */
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Generates initial mock data for the dashboard story.
 */
function createInitialTickets(): DashboardTicket[] {
  const now = new Date();
  const iso = (d: Date) => d.toISOString();

  const make = (
    partial: Omit<DashboardTicket, "id" | "createdAtIso" | "updatedAtIso"> & {
      ageDays: number;
    }
  ) => {
    const created = new Date(now);
    created.setDate(created.getDate() - partial.ageDays);
    const updated = new Date(created);
    updated.setHours(updated.getHours() + 6);

    const { ageDays: _ageDays, ...rest } = partial;
    return {
      id: createDashboardId("tkt"),
      createdAtIso: iso(created),
      updatedAtIso: iso(updated),
      ...rest,
    };
  };

  return [
    make({
      title: "Button hover state feels too aggressive",
      description:
        "On the marketing site, hover causes a big jump. Can we reduce the translate a bit for the outline variant?",
      assignee: "Brock",
      status: "In Progress",
      priority: "High",
      points: 3,
      ageDays: 1,
    }),
    make({
      title: "Add dashboard skeleton loading state",
      description:
        "We want a believable loading experience: header + cards + table skeletons with shimmer.",
      assignee: "Ororo",
      status: "Open",
      priority: "Medium",
      points: 2,
      ageDays: 0,
    }),
    make({
      title: "Improve DataTable empty state copy",
      description:
        "When no results, show a friendlier call-to-action to create the first item.",
      assignee: "Logan",
      status: "Open",
      priority: "Low",
      points: 1,
      ageDays: 2,
    }),
    make({
      title: "Audit focus rings for dialogs",
      description:
        "Ensure focus is visible and consistent for Dialog, AlertDialog, Select, and buttons.",
      assignee: "Jean",
      status: "Blocked",
      priority: "Critical",
      points: 5,
      ageDays: 5,
    }),
    make({
      title: "Landing page: refine hero typography",
      description:
        "Try slightly tighter leading and bigger drop shadow to match the cover reference.",
      assignee: "Peter",
      status: "Done",
      priority: "Medium",
      points: 1,
      ageDays: 9,
    }),
  ];
}

function statusBadgeVariant(
  status: TicketStatus
): "default" | "secondary" | "destructive" | "outline" {
  switch (status) {
    case "Done":
      return "secondary";
    case "Blocked":
      return "destructive";
    case "In Progress":
      return "default";
    case "Open":
      return "outline";
  }
}

function priorityBadgeVariant(
  priority: TicketPriority
): "default" | "secondary" | "destructive" | "outline" {
  switch (priority) {
    case "Critical":
      return "destructive";
    case "High":
      return "default";
    case "Medium":
      return "secondary";
    case "Low":
      return "outline";
  }
}

/**
 * Storybook-only dashboard that showcases a realistic application layout + mocked CRUD.
 *
 * No real API calls are performed: all "endpoints" are mocked and operate on in-memory state.
 */
function DashboardStory() {
  const [activeTab, setActiveTab] = React.useState<DashboardTab>("overview");
  const [tickets, setTickets] = React.useState<DashboardTicket[]>(() =>
    createInitialTickets()
  );

  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [dialogMode, setDialogMode] = React.useState<"create" | "edit">(
    "create"
  );
  const [editingId, setEditingId] = React.useState<string | null>(null);
  const [saving, setSaving] = React.useState(false);

  const [draft, setDraft] = React.useState<TicketDraft>({
    title: "",
    description: "",
    assignee: "Brock",
    status: "Open",
    priority: "Medium",
    points: 2,
  });

  const openCreate = React.useCallback(() => {
    setDialogMode("create");
    setEditingId(null);
    setDraft({
      title: "",
      description: "",
      assignee: "Brock",
      status: "Open",
      priority: "Medium",
      points: 2,
    });
    setDialogOpen(true);
  }, []);

  const openEdit = React.useCallback((ticket: DashboardTicket) => {
    setDialogMode("edit");
    setEditingId(ticket.id);
    setDraft({
      title: ticket.title,
      description: ticket.description,
      assignee: ticket.assignee,
      status: ticket.status,
      priority: ticket.priority,
      points: ticket.points,
    });
    setDialogOpen(true);
  }, []);

  const handleSave = React.useCallback(async () => {
    if (!draft.title.trim()) {
      toast({
        title: "Title required",
        description:
          "Give the ticket a short, punchy title (like a comic panel caption).",
        variant: "destructive",
      });
      return;
    }

    setSaving(true);
    try {
      if (dialogMode === "create") {
        await delay(450);
        const nowIso = new Date().toISOString();
        const created: DashboardTicket = {
          id: createDashboardId("tkt"),
          createdAtIso: nowIso,
          updatedAtIso: nowIso,
          ...draft,
        };
        setTickets((prev) => [created, ...prev]);
        toast({
          title: "Ticket created",
          description: `“${created.title}” added to your backlog.`,
        });
        setDialogOpen(false);
        return;
      }

      if (!editingId) {
        toast({
          title: "Nothing to update",
          description: "Pick a ticket to edit first.",
          variant: "destructive",
        });
        return;
      }

      await delay(450);
      const nowIso = new Date().toISOString();
      setTickets((prev) =>
        prev.map((t) =>
          t.id === editingId ? { ...t, ...draft, updatedAtIso: nowIso } : t
        )
      );
      toast({
        title: "Ticket updated",
        description: `Saved changes to “${draft.title}”.`,
      });
      setDialogOpen(false);
    } finally {
      setSaving(false);
    }
  }, [dialogMode, draft, editingId]);

  const handleDelete = React.useCallback(async (ticket: DashboardTicket) => {
    await delay(350);
    setTickets((prev) => prev.filter((t) => t.id !== ticket.id));
    toast({
      title: "Ticket deleted",
      description: `“${ticket.title}” was removed.`,
    });
  }, []);

  const stats = React.useMemo(() => {
    const total = tickets.length;
    const open = tickets.filter((t) => t.status === "Open").length;
    const inProgress = tickets.filter((t) => t.status === "In Progress").length;
    const blocked = tickets.filter((t) => t.status === "Blocked").length;
    const done = tickets.filter((t) => t.status === "Done").length;
    const pointsDone = tickets
      .filter((t) => t.status === "Done")
      .reduce((sum, t) => sum + t.points, 0);
    const pointsTotal = tickets.reduce((sum, t) => sum + t.points, 0);
    const completionPct =
      pointsTotal === 0 ? 0 : Math.round((pointsDone / pointsTotal) * 100);
    return { total, open, inProgress, blocked, done, completionPct };
  }, [tickets]);

  const columns = React.useMemo<ColumnDef<DashboardTicket>[]>(() => {
    return [
      {
        accessorKey: "title",
        header: "Title",
        cell: ({ row }) => {
          const t = row.original;
          return (
            <div className="min-w-[16rem]">
              <div className="font-display text-base">{t.title}</div>
              <div className="mt-1 line-clamp-2 text-sm text-muted-foreground font-body">
                {t.description}
              </div>
            </div>
          );
        },
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
          const t = row.original;
          return (
            <Badge variant={statusBadgeVariant(t.status)} className="font-body">
              {t.status}
            </Badge>
          );
        },
      },
      {
        accessorKey: "priority",
        header: "Priority",
        cell: ({ row }) => {
          const t = row.original;
          return (
            <Badge
              variant={priorityBadgeVariant(t.priority)}
              className="font-body"
            >
              {t.priority}
            </Badge>
          );
        },
      },
      {
        accessorKey: "assignee",
        header: "Assignee",
        cell: ({ row }) => {
          const t = row.original;
          return <div className="font-body">{t.assignee}</div>;
        },
      },
      {
        accessorKey: "points",
        header: "Points",
        cell: ({ row }) => (
          <div className="font-body tabular-nums">{row.original.points}</div>
        ),
      },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
          const t = row.original;
          return (
            <div className="flex items-center justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => openEdit(t)}
              >
                <Pencil className="h-4 w-4" />
                Edit
              </Button>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button type="button" variant="destructive" size="sm">
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete ticket?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This is a mock dashboard, but the action is real: “
                      {t.title}” will be removed from the in-memory list.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => {
                        void handleDelete(t);
                      }}
                    >
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          );
        },
      },
    ];
  }, [handleDelete, openEdit]);

  return (
    <div className="min-h-screen bg-background">
      <Toaster />

      <SidebarProvider defaultOpen>
        <Sidebar collapsible="icon" variant="inset">
          <SidebarHeader>
            <div className="flex items-center justify-between gap-2 px-1 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0">
              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-md border-3 border-ink bg-hero-yellow shadow-panel">
                  <Zap className="h-5 w-5 text-ink" />
                </div>
                <div className="leading-tight group-data-[collapsible=icon]:hidden">
                  <div className="font-display text-base uppercase tracking-wide">
                    Comic Ops
                  </div>
                  <div className="font-body text-xs text-muted-foreground">
                    Mock Dashboard
                  </div>
                </div>
              </div>
            </div>
          </SidebarHeader>

          <SidebarSeparator />

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={activeTab === "overview"}
                      onClick={() => setActiveTab("overview")}
                      tooltip="Overview"
                    >
                      <LayoutDashboard />
                      <span>Overview</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={activeTab === "tickets"}
                      onClick={() => setActiveTab("tickets")}
                      tooltip="Tickets"
                    >
                      <Ticket />
                      <span>Tickets</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={activeTab === "settings"}
                      onClick={() => setActiveTab("settings")}
                      tooltip="Settings"
                    >
                      <Settings />
                      <span>Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Teams</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Design Squad">
                      <Users />
                      <span>Design Squad</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Component Core">
                      <Box />
                      <span>Component Core</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <ComicPanel
              variant="default"
              className="mx-2 group-data-[collapsible=icon]:hidden"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="font-display text-sm uppercase tracking-wide">
                    Signed in
                  </div>
                  <div className="font-body text-xs text-muted-foreground truncate">
                    brock@comic-ui.dev
                  </div>
                </div>
                <Avatar className="border-2 border-ink">
                  <AvatarFallback className="font-display">B</AvatarFallback>
                </Avatar>
              </div>
            </ComicPanel>
            <div className="hidden group-data-[collapsible=icon]:flex items-center justify-center px-2 pb-2">
              <Avatar className="border-3 border-ink shadow-panel">
                <AvatarFallback className="font-display">B</AvatarFallback>
              </Avatar>
            </div>
          </SidebarFooter>

          <SidebarRail />
        </Sidebar>

        <SidebarInset>
          <HalftoneBackground
            variant="dots"
            opacity={0.04}
            className="min-h-svh"
          >
            <SpeedLines direction="left" intensity="light" />

            <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
              <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-4">
                <SidebarTrigger />

                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <ComicBadge variant="caption">Dashboard</ComicBadge>
                    <div className="hidden sm:block font-body text-sm text-muted-foreground">
                      No APIs. Just heroic UI.
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      className="pl-9 w-[18rem]"
                      placeholder="Search…"
                      aria-label="Search dashboard"
                    />
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    aria-label="Notifications"
                  >
                    <Bell />
                  </Button>
                </div>
              </div>
            </header>

            <main className="mx-auto w-full max-w-6xl px-4 py-8">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <ImpactText
                    text="Comic Ops"
                    color="blue"
                    size="lg"
                    animated={false}
                  />
                  <p className="mt-2 font-body text-sm text-muted-foreground max-w-2xl">
                    Think of this dashboard like a toy city: everything looks
                    real and “works”, but it’s all safely made of blocks—no
                    network calls, just mock endpoints and local state.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <Button type="button" variant="hero" onClick={openCreate}>
                    <Plus className="h-5 w-5" />
                    New Ticket
                  </Button>
                </div>
              </div>

              <Tabs
                value={activeTab}
                onValueChange={(v) => setActiveTab(v as DashboardTab)}
              >
                <TabsList className="mb-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="tickets">Tickets</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <div className="grid gap-6 md:grid-cols-4">
                    <ComicPanel variant="thick" cornerLabel="KPI">
                      <div className="font-display text-sm uppercase tracking-wide text-muted-foreground">
                        Total
                      </div>
                      <div className="mt-2 font-display text-4xl">
                        {stats.total}
                      </div>
                      <div className="mt-2 font-body text-sm text-muted-foreground">
                        Tickets this sprint
                      </div>
                    </ComicPanel>
                    <ComicPanel variant="thick" cornerLabel="KPI">
                      <div className="font-display text-sm uppercase tracking-wide text-muted-foreground">
                        Open
                      </div>
                      <div className="mt-2 font-display text-4xl text-hero-blue">
                        {stats.open}
                      </div>
                      <div className="mt-2 font-body text-sm text-muted-foreground">
                        Ready to grab
                      </div>
                    </ComicPanel>
                    <ComicPanel variant="thick" cornerLabel="KPI">
                      <div className="font-display text-sm uppercase tracking-wide text-muted-foreground">
                        In Progress
                      </div>
                      <div className="mt-2 font-display text-4xl text-hero-yellow">
                        {stats.inProgress}
                      </div>
                      <div className="mt-2 font-body text-sm text-muted-foreground">
                        Actively being built
                      </div>
                    </ComicPanel>
                    <ComicPanel variant="thick" cornerLabel="KPI">
                      <div className="font-display text-sm uppercase tracking-wide text-muted-foreground">
                        Blocked
                      </div>
                      <div className="mt-2 font-display text-4xl text-hero-red">
                        {stats.blocked}
                      </div>
                      <div className="mt-2 font-body text-sm text-muted-foreground">
                        Needs unblocking
                      </div>
                    </ComicPanel>
                  </div>

                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <ComicPanel
                      variant="action"
                      headerLabel="Sprint Completion"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="font-body text-sm text-muted-foreground">
                            Story points shipped
                          </div>
                          <div className="font-display text-sm uppercase tracking-wide">
                            {stats.completionPct}%
                          </div>
                        </div>
                        <Progress value={stats.completionPct} />
                        <div className="grid gap-2 sm:grid-cols-2">
                          <div className="rounded-md border-2 border-ink bg-background p-3 shadow-panel">
                            <div className="font-display text-sm uppercase tracking-wide">
                              Done
                            </div>
                            <div className="mt-1 font-body text-sm text-muted-foreground">
                              {stats.done} ticket(s) completed
                            </div>
                          </div>
                          <div className="rounded-md border-2 border-ink bg-background p-3 shadow-panel">
                            <div className="font-display text-sm uppercase tracking-wide">
                              Next Up
                            </div>
                            <div className="mt-1 font-body text-sm text-muted-foreground">
                              Triage open tickets and assign owners
                            </div>
                          </div>
                        </div>
                      </div>
                    </ComicPanel>

                    <ComicPanel variant="default" headerLabel="Recent Activity">
                      <div className="space-y-3">
                        {tickets.slice(0, 4).map((t) => (
                          <div
                            key={t.id}
                            className="flex items-start justify-between gap-4 rounded-md border-2 border-ink bg-background p-3 shadow-panel"
                          >
                            <div className="min-w-0">
                              <div className="font-display text-sm uppercase tracking-wide truncate">
                                {t.title}
                              </div>
                              <div className="mt-1 font-body text-xs text-muted-foreground">
                                {t.assignee} •{" "}
                                {new Date(t.updatedAtIso).toLocaleString()}
                              </div>
                            </div>
                            <Badge
                              variant={statusBadgeVariant(t.status)}
                              className="shrink-0 font-body"
                            >
                              {t.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </ComicPanel>
                  </div>
                </TabsContent>

                <TabsContent value="tickets">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="font-display text-2xl uppercase tracking-wide">
                        Tickets
                      </div>
                      <div className="font-body text-sm text-muted-foreground">
                        Create, edit, and delete tickets with mocked endpoints.
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="heroBlue"
                      onClick={openCreate}
                    >
                      <Plus className="h-5 w-5" />
                      Create Ticket
                    </Button>
                  </div>

                  <DataTable
                    columns={columns}
                    data={tickets}
                    filterColumnId="title"
                    filterPlaceholder="Filter by title…"
                  />
                </TabsContent>

                <TabsContent value="settings">
                  <ComicPanel variant="default" headerLabel="Settings (Mock)">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="teamName">Team name</Label>
                        <Input id="teamName" defaultValue="Comic Ops" />
                        <p className="font-body text-xs text-muted-foreground">
                          This is purely visual—no real persistence.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="defaultAssignee">
                          Default assignee
                        </Label>
                        <Select defaultValue="Brock">
                          <SelectTrigger id="defaultAssignee">
                            <SelectValue placeholder="Select a default assignee" />
                          </SelectTrigger>
                          <SelectContent>
                            {["Brock", "Jean", "Logan", "Ororo", "Peter"].map(
                              (name) => (
                                <SelectItem key={name} value={name}>
                                  {name}
                                </SelectItem>
                              )
                            )}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button
                        type="button"
                        onClick={() =>
                          toast({
                            title: "Settings saved (mock)",
                            description:
                              "No backend here—just a toast for the vibe.",
                          })
                        }
                      >
                        Save Settings
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() =>
                          toast({
                            title: "Reset complete (mock)",
                            description: "Nothing was actually reset. POW!",
                          })
                        }
                      >
                        Reset
                      </Button>
                    </div>
                  </ComicPanel>
                </TabsContent>
              </Tabs>
            </main>
          </HalftoneBackground>
        </SidebarInset>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {dialogMode === "create" ? "Create Ticket" : "Edit Ticket"}
              </DialogTitle>
              <DialogDescription>
                This dialog simulates a real CRUD flow, but everything is mocked
                and stored in-memory.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="ticketTitle">Title</Label>
                <Input
                  id="ticketTitle"
                  value={draft.title}
                  onChange={(e) =>
                    setDraft((d) => ({ ...d, title: e.target.value }))
                  }
                  placeholder="e.g. Fix tooltip offset on mobile"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="ticketDesc">Description</Label>
                <Textarea
                  id="ticketDesc"
                  value={draft.description}
                  onChange={(e) =>
                    setDraft((d) => ({ ...d, description: e.target.value }))
                  }
                  placeholder="What’s happening, what you expected, and any relevant context…"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="ticketStatus">Status</Label>
                  <Select
                    value={draft.status}
                    onValueChange={(value) => {
                      if (isTicketStatus(value))
                        setDraft((d) => ({ ...d, status: value }));
                    }}
                  >
                    <SelectTrigger id="ticketStatus">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {TICKET_STATUSES.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="ticketPriority">Priority</Label>
                  <Select
                    value={draft.priority}
                    onValueChange={(value) => {
                      if (isTicketPriority(value))
                        setDraft((d) => ({ ...d, priority: value }));
                    }}
                  >
                    <SelectTrigger id="ticketPriority">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {TICKET_PRIORITIES.map((p) => (
                        <SelectItem key={p} value={p}>
                          {p}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="ticketAssignee">Assignee</Label>
                  <Select
                    value={draft.assignee}
                    onValueChange={(value) =>
                      setDraft((d) => ({ ...d, assignee: value }))
                    }
                  >
                    <SelectTrigger id="ticketAssignee">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {["Brock", "Jean", "Logan", "Ororo", "Peter"].map(
                        (name) => (
                          <SelectItem key={name} value={name}>
                            {name}
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="ticketPoints">Points</Label>
                  <Input
                    id="ticketPoints"
                    type="number"
                    min={1}
                    max={13}
                    value={draft.points}
                    onChange={(e) => {
                      const next = Number(e.target.value);
                      setDraft((d) => ({
                        ...d,
                        points: Number.isFinite(next) ? next : d.points,
                      }));
                    }}
                  />
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setDialogOpen(false)}
                disabled={saving}
              >
                Cancel
              </Button>
              <Button
                type="button"
                onClick={() => void handleSave()}
                disabled={saving}
              >
                {saving ? "Saving…" : "Save"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </SidebarProvider>
    </div>
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

export const Dashboard: Story = {
  render: () => <DashboardStory />,
};
