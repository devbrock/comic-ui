import * as React from "react";

import {
  ComicBadge,
  ComicPanel,
  HalftoneBackground,
  ImpactText,
  SpeedLines,
  SpeechBubble,
} from "@/components/comic";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion";
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
import { AspectRatio } from "@/components/AspectRatio";
import { Avatar, AvatarFallback } from "@/components/Avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { ButtonGroup } from "@/components/ButtonGroup";
import { Badge } from "@/components/Badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/Carousel";
import {
  ChartContainer,
  type ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/Chart";
import { Checkbox } from "@/components/Checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/Collapsible";
import { Combobox, type ComboboxItem } from "@/components/Combobox";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/Command";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ContextMenu";
import { DataTable } from "@/components/DataTable";
import { DatePicker } from "@/components/DatePicker";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/Drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/DropdownMenu";
import { Empty } from "@/components/Empty";
import { Field } from "@/components/Field";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/Form";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/HoverCard";
import { Input } from "@/components/Input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/InputGroup";
import { Label } from "@/components/Label";
import { Switch } from "@/components/Switch";
import { Slider } from "@/components/Slider";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/Menubar";
import { NativeSelect } from "@/components/NativeSelect";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/NavigationMenu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/Pagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/Alert";
import { Progress } from "@/components/Progress";
import { RadioGroup, RadioGroupItem } from "@/components/RadioGroup";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog";
import { Item, ItemDescription, ItemTitle } from "@/components/Item";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/Sheet";
import { Skeleton } from "@/components/Skeleton";
import { SonnerToaster, sonnerToast } from "@/components/Sonner";
import { Spinner } from "@/components/Spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/Table";
import { Textarea } from "@/components/Textarea";
import { toast, useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/Toaster";
import { Kbd } from "@/components/Kbd";
import {
  Blockquote,
  H1,
  H2,
  InlineCode,
  P,
  Pre,
  Small,
} from "@/components/Typography";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/Popover";
import { Link } from "@/components/Link";
import { Toggle } from "@/components/Toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ToggleGroup";
import { Calendar } from "@/components/Calendar";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/InputOTP";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/Resizable";
import { ScrollArea } from "@/components/ScrollArea";
import { Separator } from "@/components/Separator";

import { ExampleCard } from "@/components/demo/ExampleCard";
import type { ColumnDef } from "@tanstack/react-table";
import { useForm } from "react-hook-form";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Info, Italic, Shield, Sparkles, Underline, Zap } from "lucide-react";

function DatePickerPreview() {
  const [value, setValue] = React.useState<Date | undefined>(new Date());
  return <DatePicker value={value} onValueChange={setValue} />;
}

function ComboboxPreview() {
  const [team, setTeam] = React.useState<string | undefined>(undefined);
  const teams: readonly ComboboxItem[] = [
    { value: "avengers", label: "The Avengers" },
    { value: "xmen", label: "X-Men" },
    { value: "fantastic", label: "Fantastic Four" },
    { value: "defenders", label: "Defenders" },
  ];
  return (
    <Combobox
      items={teams}
      value={team}
      onValueChange={setTeam}
      placeholder="Pick a team..."
    />
  );
}

type SimpleFormValues = Readonly<{ heroName: string }>;

function FormPreview() {
  const form = useForm<SimpleFormValues>({
    defaultValues: { heroName: "" },
  });

  return (
    <Form {...form}>
      <form
        className="space-y-3"
        onSubmit={form.handleSubmit(({ heroName }) => {
          toast({
            title: "Saved",
            description: `Hero: ${heroName || "Unknown"}`,
          });
        })}
      >
        <FormField
          control={form.control}
          name="heroName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hero Name</FormLabel>
              <FormControl>
                <Input placeholder="Spider-Man" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2">
          <Button type="submit" size="sm">
            Save
          </Button>
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={() => form.reset()}
          >
            Reset
          </Button>
        </div>
      </form>
    </Form>
  );
}

function ToastPreview() {
  const { toast: localToast } = useToast();
  return (
    <>
      <Toaster />
      <SonnerToaster theme="system" />
      <div className="flex flex-wrap gap-2">
        <Button
          size="sm"
          onClick={() =>
            localToast({
              title: "POW!",
              description: "This is the Radix toast stack.",
            })
          }
        >
          Toast
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => sonnerToast("BAM!", { description: "This is Sonner." })}
        >
          Sonner
        </Button>
      </div>
    </>
  );
}

type HeroRow = Readonly<{ name: string; team: string; power: string }>;

function DataTablePreview() {
  const data = [
    { name: "Iron Man", team: "Avengers", power: "Tech Genius" },
    { name: "Storm", team: "X-Men", power: "Weather Control" },
    { name: "Spider-Man", team: "Avengers", power: "Spider Sense" },
  ] satisfies readonly HeroRow[];

  const columns: ColumnDef<HeroRow>[] = [
    { accessorKey: "name", header: "Hero" },
    { accessorKey: "team", header: "Team" },
    { accessorKey: "power", header: "Power" },
  ];

  return (
    <DataTable
      columns={columns}
      data={[...data]}
      filterColumnId="name"
      filterPlaceholder="Filter heroes..."
    />
  );
}

function CarouselPreview() {
  return (
    <div className="px-12">
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {["Issue #1", "Issue #2", "Issue #3"].map((label) => (
            <CarouselItem key={label}>
              <div className="rounded-md border-2 border-ink bg-card p-6 shadow-panel">
                <div className="font-display text-xl">{label}</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Swipe or use arrows.
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

function CommandPreview() {
  return (
    <div className="rounded-md border-2 border-ink bg-popover overflow-hidden">
      <Command>
        <CommandInput placeholder="Search heroes…" />
        <CommandList>
          <CommandEmpty>No results.</CommandEmpty>
          <CommandGroup heading="Heroes">
            <CommandItem>Iron Man</CommandItem>
            <CommandItem>Storm</CommandItem>
            <CommandItem>Spider-Man</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

function ContextMenuPreview() {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="rounded-md border-2 border-ink bg-card p-6 text-center shadow-panel select-none">
          <div className="font-display text-lg">Right-click me</div>
          <div className="mt-1 text-sm text-muted-foreground">
            Context menu opens.
          </div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Copy</ContextMenuItem>
        <ContextMenuItem>Duplicate</ContextMenuItem>
        <ContextMenuItem className="text-destructive">Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

function ChartPreview() {
  const data = [
    { name: "Mon", value: 12 },
    { name: "Tue", value: 18 },
    { name: "Wed", value: 9 },
    { name: "Thu", value: 22 },
    { name: "Fri", value: 15 },
  ] satisfies ReadonlyArray<{ name: string; value: number }>;

  const config: ChartConfig = {
    value: { label: "Missions", color: "hsl(var(--hero-red))" },
  };

  return (
    <ChartContainer config={config} className="w-full">
      <BarChart data={[...data]}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="value" fill="var(--color-value)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}

/**
 * A demo example that can be rendered and copied.
 *
 * The `code` field is intentionally written to import from `@devbrock/marvelous-ui`
 * so it will “just work” for consumers who followed the setup instructions.
 */
export type ComponentExample = Readonly<{
  id: string;
  title: string;
  category:
    | "Comic"
    | "Inputs"
    | "Feedback"
    | "Overlays"
    | "Navigation"
    | "Data Display"
    | "Utilities";
  description?: string;
  code: string;
  render: React.ReactNode;
}>;

export const componentExamples: readonly ComponentExample[] = [
  {
    id: "comic-panel",
    title: "ComicPanel",
    category: "Comic",
    description:
      "A panel container with thick ink borders and optional corner labels.",
    code: `import { ComicPanel, Button } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <ComicPanel variant="thick" cornerLabel="#1">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="font-display text-xl">Mission Brief</div>
          <div className="text-sm text-muted-foreground">Deploy in 3… 2… 1…</div>
        </div>
        <Button variant="hero">Launch</Button>
      </div>
    </ComicPanel>
  );
}`,
    render: (
      <ComicPanel variant="thick" cornerLabel="#1">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="font-display text-xl">Mission Brief</div>
            <div className="text-sm text-muted-foreground">
              Deploy in 3… 2… 1…
            </div>
          </div>
          <Button variant="hero">Launch</Button>
        </div>
      </ComicPanel>
    ),
  },
  {
    id: "button",
    title: "Button",
    category: "Inputs",
    description: "Comic-styled buttons with multiple heroic variants.",
    code: `import { Button } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="default">Default</Button>
      <Button variant="hero">Hero</Button>
      <Button variant="heroBlue">Hero Blue</Button>
      <Button variant="impact">Impact</Button>
      <Button variant="outline">Outline</Button>
    </div>
  );
}`,
    render: (
      <div className="flex flex-wrap gap-3">
        <Button variant="default">Default</Button>
        <Button variant="hero">Hero</Button>
        <Button variant="heroBlue">Hero Blue</Button>
        <Button variant="impact">Impact</Button>
        <Button variant="outline">Outline</Button>
      </div>
    ),
  },
  {
    id: "badge",
    title: "Badge",
    category: "Data Display",
    description: "Compact labels for status, metadata, and tags.",
    code: `import { Badge } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}`,
    render: (
      <div className="flex flex-wrap gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    ),
  },
  {
    id: "input",
    title: "Input",
    category: "Inputs",
    description: "Text input with comic styling and accessible focus rings.",
    code: `import { Field, Input } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <Field label="Hero Name" description="Your public superhero handle." required>
      <Input placeholder="Enter your hero name..." />
    </Field>
  );
}`,
    render: (
      <div className="space-y-2">
        <Label>Hero Name</Label>
        <Input placeholder="Enter your hero name..." />
      </div>
    ),
  },
  {
    id: "switch",
    title: "Switch",
    category: "Inputs",
    description: "A small toggle for binary settings.",
    code: `import * as React from "react";
import { Switch, Label } from "@devbrock/marvelous-ui";

export function Example() {
  const [enabled, setEnabled] = React.useState(true);
  return (
    <div className="flex items-center justify-between gap-4">
      <Label htmlFor="hero-mode">Hero Mode</Label>
      <Switch id="hero-mode" checked={enabled} onCheckedChange={setEnabled} />
    </div>
  );
}`,
    render: (
      <div className="flex items-center justify-between gap-4">
        <Label htmlFor="hero-mode">Hero Mode</Label>
        <Switch id="hero-mode" defaultChecked />
      </div>
    ),
  },
  {
    id: "slider",
    title: "Slider",
    category: "Inputs",
    description: "A draggable control for ranged values.",
    code: `import * as React from "react";
import { Slider, Label } from "@devbrock/marvelous-ui";

export function Example() {
  const [value, setValue] = React.useState([50]);
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <Label>Power Level</Label>
        <span className="font-display text-hero-red">{value[0]}%</span>
      </div>
      <Slider value={value} onValueChange={setValue} max={100} step={1} />
    </div>
  );
}`,
    render: (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label>Power Level</Label>
          <span className="font-display text-hero-red">50%</span>
        </div>
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>
    ),
  },
  {
    id: "alert",
    title: "Alert",
    category: "Feedback",
    description: "Inline notices with optional icons and variants.",
    code: `import { Alert, AlertDescription, AlertTitle } from "@devbrock/marvelous-ui";
import { Info } from "lucide-react";

export function Example() {
  return (
    <Alert>
      <Info className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        This is a comic-styled alert.
      </AlertDescription>
    </Alert>
  );
}`,
    render: (
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>This is a comic-styled alert.</AlertDescription>
      </Alert>
    ),
  },
  {
    id: "progress",
    title: "Progress",
    category: "Feedback",
    description: "Progress indicator for loading or completion.",
    code: `import { Progress } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Charging</span>
        <span className="font-display text-hero-red">60%</span>
      </div>
      <Progress value={60} />
    </div>
  );
}`,
    render: (
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Charging</span>
          <span className="font-display text-hero-red">60%</span>
        </div>
        <Progress value={60} />
      </div>
    ),
  },
  {
    id: "tooltip",
    title: "Tooltip",
    category: "Feedback",
    description: "Helpful hover/focus text via Radix Tooltip.",
    code: `import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, Button } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Save the city</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}`,
    render: (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Save the city</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
  },
  {
    id: "dialog",
    title: "Dialog",
    category: "Overlays",
    description: "Modal dialog with header/footer primitives.",
    code: `import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="hero">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>Make changes, then save.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="hero">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`,
    render: (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="hero">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>Make changes, then save.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="hero">Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    ),
  },
  {
    id: "popover",
    title: "Popover",
    category: "Overlays",
    description: "A small floating panel anchored to a trigger.",
    code: `import { Button, Popover, PopoverContent, PopoverTrigger } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open</Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="font-display">Quick Info</div>
        <div className="mt-1 text-sm text-muted-foreground">
          Popovers are great for compact content.
        </div>
      </PopoverContent>
    </Popover>
  );
}`,
    render: (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open</Button>
        </PopoverTrigger>
        <PopoverContent className="w-64">
          <div className="font-display">Quick Info</div>
          <div className="mt-1 text-sm text-muted-foreground">
            Popovers are great for compact content.
          </div>
        </PopoverContent>
      </Popover>
    ),
  },
  {
    id: "tabs",
    title: "Tabs",
    category: "Navigation",
    description: "Switch between views without navigating away.",
    code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <Tabs defaultValue="one">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="one">One</TabsTrigger>
        <TabsTrigger value="two">Two</TabsTrigger>
        <TabsTrigger value="three">Three</TabsTrigger>
      </TabsList>
      <TabsContent value="one" className="mt-4 p-4 border-2 border-ink bg-card">
        Panel one.
      </TabsContent>
      <TabsContent value="two" className="mt-4 p-4 border-2 border-ink bg-card">
        Panel two.
      </TabsContent>
      <TabsContent value="three" className="mt-4 p-4 border-2 border-ink bg-card">
        Panel three.
      </TabsContent>
    </Tabs>
  );
}`,
    render: (
      <Tabs defaultValue="one">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="one">One</TabsTrigger>
          <TabsTrigger value="two">Two</TabsTrigger>
          <TabsTrigger value="three">Three</TabsTrigger>
        </TabsList>
        <TabsContent
          value="one"
          className="mt-4 p-4 border-2 border-ink bg-card"
        >
          Panel one.
        </TabsContent>
        <TabsContent
          value="two"
          className="mt-4 p-4 border-2 border-ink bg-card"
        >
          Panel two.
        </TabsContent>
        <TabsContent
          value="three"
          className="mt-4 p-4 border-2 border-ink bg-card"
        >
          Panel three.
        </TabsContent>
      </Tabs>
    ),
  },
  {
    id: "link",
    title: "Link",
    category: "Navigation",
    description:
      "Framework-agnostic link that can integrate with routers via asChild.",
    code: `import { Link } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <Link href="https://example.com" target="_blank" rel="noreferrer">
      Read the docs
    </Link>
  );
}`,
    render: (
      <Link href="#" onClick={(e) => e.preventDefault()}>
        Read the docs
      </Link>
    ),
  },
  {
    id: "toggle",
    title: "Toggle",
    category: "Inputs",
    description: "A pressable toggle button (great for formatting controls).",
    code: `import { Toggle } from "@devbrock/marvelous-ui";
import { Italic } from "lucide-react";

export function Example() {
  return (
    <Toggle aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </Toggle>
  );
}`,
    render: (
      <Toggle aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
    ),
  },
  {
    id: "toggle-group",
    title: "ToggleGroup",
    category: "Inputs",
    description: "A group of toggles (single or multiple selection).",
    code: `import { ToggleGroup, ToggleGroupItem } from "@devbrock/marvelous-ui";
import { Italic, Underline } from "lucide-react";

export function Example() {
  return (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="italic" aria-label="Italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}`,
    render: (
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="italic" aria-label="Italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    ),
  },
  {
    id: "calendar",
    title: "Calendar",
    category: "Data Display",
    description: "A Tailwind-styled calendar (react-day-picker).",
    code: `import * as React from "react";
import { Calendar } from "@devbrock/marvelous-ui";

export function Example() {
  const [date, setDate] = React.useState<Date | undefined>();
  return <Calendar mode="single" selected={date} onSelect={setDate} />;
}`,
    render: (
      <Calendar
        mode="single"
        selected={new Date()}
        onSelect={() => undefined}
      />
    ),
  },
  {
    id: "input-otp",
    title: "InputOTP",
    category: "Inputs",
    description: "One-time-password input built on input-otp.",
    code: `import { InputOTP, InputOTPGroup, InputOTPSlot } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}`,
    render: (
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    ),
  },
  {
    id: "resizable",
    title: "Resizable",
    category: "Utilities",
    description: "Resizable panels powered by react-resizable-panels.",
    code: `import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <ResizablePanelGroup direction="horizontal" className="h-32 w-full rounded-md border-2 border-ink">
      <ResizablePanel defaultSize={50} className="p-3">
        <div className="font-display">Left</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50} className="p-3">
        <div className="font-display">Right</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}`,
    render: (
      <ResizablePanelGroup
        direction="horizontal"
        className="h-32 w-full rounded-md border-2 border-ink"
      >
        <ResizablePanel defaultSize={50} className="p-3">
          <div className="font-display">Left</div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50} className="p-3">
          <div className="font-display">Right</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    ),
  },
  {
    id: "scroll-area",
    title: "ScrollArea",
    category: "Data Display",
    description: "Scrollable content with styled scrollbars.",
    code: `import { ScrollArea, Separator } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <ScrollArea className="h-48 w-full border-2 border-ink bg-card">
      <div className="p-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i}>
            <div className="py-2 text-sm">
              <span className="font-display">Issue #{i + 1}</span>
              <span className="text-muted-foreground ml-2">- Adventure</span>
            </div>
            {i < 7 ? <Separator /> : null}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}`,
    render: (
      <ScrollArea className="h-40 w-full border-2 border-ink bg-card">
        <div className="p-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i}>
              <div className="py-2 text-sm">
                <span className="font-display">Issue #{i + 1}</span>
                <span className="text-muted-foreground ml-2">- Adventure</span>
              </div>
              {i < 5 ? <Separator /> : null}
            </div>
          ))}
        </div>
      </ScrollArea>
    ),
  },
  {
    id: "separator",
    title: "Separator",
    category: "Utilities",
    description: "A thin divider line (horizontal or vertical).",
    code: `import { Separator } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <div className="space-y-3">
      <div className="font-display">Top</div>
      <Separator />
      <div className="font-display">Bottom</div>
    </div>
  );
}`,
    render: (
      <div className="space-y-3">
        <div className="font-display">Top</div>
        <Separator />
        <div className="font-display">Bottom</div>
      </div>
    ),
  },
  {
    id: "comic-badge",
    title: "ComicBadge",
    category: "Comic",
    description: "Badges with comic-book variants like burst and ribbon.",
    code: `import { ComicBadge } from "@devbrock/marvelous-ui";
import { Zap } from "lucide-react";

export function Example() {
  return (
    <div className="flex flex-wrap gap-3">
      <ComicBadge>Default</ComicBadge>
      <ComicBadge variant="burst" color="accent" iconBefore={<Zap />}>
        POW!
      </ComicBadge>
      <ComicBadge variant="ribbon" color="secondary">
        Limited
      </ComicBadge>
    </div>
  );
}`,
    render: (
      <div className="flex flex-wrap gap-3">
        <ComicBadge>Default</ComicBadge>
        <ComicBadge variant="burst" color="accent" iconBefore={<Zap />}>
          POW!
        </ComicBadge>
        <ComicBadge variant="ribbon" color="secondary">
          Limited
        </ComicBadge>
      </div>
    ),
  },
  {
    id: "impact-text",
    title: "ImpactText",
    category: "Comic",
    description: "Big comic onomatopoeia text with optional animation.",
    code: `import { ImpactText } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <ImpactText text="POW!" color="yellow" size="md" />
      <ImpactText text="BAM!" color="red" size="md" />
      <ImpactText text="ZAP!" color="blue" size="md" />
    </div>
  );
}`,
    render: (
      <div className="flex flex-wrap items-center gap-4">
        <ImpactText text="POW!" color="yellow" size="md" />
        <ImpactText text="BAM!" color="red" size="md" />
        <ImpactText text="ZAP!" color="blue" size="md" />
      </div>
    ),
  },
  {
    id: "speech-bubble",
    title: "SpeechBubble",
    category: "Comic",
    description:
      "Speech, thought, and narration bubbles with tail positioning.",
    code: `import { SpeechBubble } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <SpeechBubble variant="speech" tailPosition="bottom-left">
        This is a speech bubble.
      </SpeechBubble>
      <SpeechBubble variant="narration" tailPosition="none">
        Meanwhile, in the code editor…
      </SpeechBubble>
    </div>
  );
}`,
    render: (
      <div className="grid gap-4 md:grid-cols-2">
        <SpeechBubble variant="speech" tailPosition="bottom-left">
          This is a speech bubble.
        </SpeechBubble>
        <SpeechBubble variant="narration" tailPosition="none">
          Meanwhile, in the code editor…
        </SpeechBubble>
      </div>
    ),
  },
  {
    id: "halftone-background",
    title: "HalftoneBackground",
    category: "Comic",
    description: "A halftone overlay you can use behind sections or panels.",
    code: `import { HalftoneBackground } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <HalftoneBackground variant="dots" opacity={0.08} className="rounded-md border-2 border-ink p-6">
      <div className="font-display text-xl">Halftone layer</div>
      <div className="text-sm text-muted-foreground">Great for section backgrounds.</div>
    </HalftoneBackground>
  );
}`,
    render: (
      <HalftoneBackground
        variant="dots"
        opacity={0.08}
        className="rounded-md border-2 border-ink p-6"
      >
        <div className="font-display text-xl">Halftone layer</div>
        <div className="text-sm text-muted-foreground">
          Great for section backgrounds.
        </div>
      </HalftoneBackground>
    ),
  },
  {
    id: "speed-lines",
    title: "SpeedLines",
    category: "Comic",
    description: "A dynamic background effect for motion and impact.",
    code: `import { SpeedLines } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <div className="relative overflow-hidden rounded-md border-2 border-ink p-6">
      <SpeedLines direction="radial" intensity="light" />
      <div className="relative z-10">
        <div className="font-display text-xl">Whoosh!</div>
        <div className="text-sm text-muted-foreground">Speed lines behind content.</div>
      </div>
    </div>
  );
}`,
    render: (
      <div className="relative overflow-hidden rounded-md border-2 border-ink p-6">
        <SpeedLines direction="radial" intensity="light" />
        <div className="relative z-10">
          <div className="font-display text-xl">Whoosh!</div>
          <div className="text-sm text-muted-foreground">
            Speed lines behind content.
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "button-group",
    title: "ButtonGroup",
    category: "Inputs",
    description: "Layout-only segmented control that groups Buttons together.",
    code: `import { Button, ButtonGroup } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <ButtonGroup>
      <Button variant="outline" size="sm">Day</Button>
      <Button variant="outline" size="sm">Week</Button>
      <Button variant="outline" size="sm">Month</Button>
    </ButtonGroup>
  );
}`,
    render: (
      <ButtonGroup>
        <Button variant="outline" size="sm">
          Day
        </Button>
        <Button variant="outline" size="sm">
          Week
        </Button>
        <Button variant="outline" size="sm">
          Month
        </Button>
      </ButtonGroup>
    ),
  },
  {
    id: "checkbox",
    title: "Checkbox",
    category: "Inputs",
    description: "A styled checkbox with Radix accessibility.",
    code: `import { Checkbox, Label } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="stealth" />
      <Label htmlFor="stealth" className="font-body font-normal">
        Stealth Operations
      </Label>
    </div>
  );
}`,
    render: (
      <div className="flex items-center gap-2">
        <Checkbox id="stealth" />
        <Label htmlFor="stealth" className="font-body font-normal">
          Stealth Operations
        </Label>
      </div>
    ),
  },
  {
    id: "textarea",
    title: "Textarea",
    category: "Inputs",
    description: "Multiline text input.",
    code: `import { Field, Textarea } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <Field label="Origin Story" description="Tell us how you became a hero.">
      <Textarea rows={3} placeholder="It all started when…" />
    </Field>
  );
}`,
    render: <Textarea rows={3} placeholder="It all started when…" />,
  },
  {
    id: "radio-group",
    title: "RadioGroup",
    category: "Inputs",
    description: "Exclusive selection for a small set of options.",
    code: `import { Label, RadioGroup, RadioGroupItem } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <RadioGroup defaultValue="hero" className="grid gap-2">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="hero" id="hero" />
        <Label htmlFor="hero" className="font-body font-normal">Hero</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="villain" id="villain" />
        <Label htmlFor="villain" className="font-body font-normal">Villain</Label>
      </div>
    </RadioGroup>
  );
}`,
    render: (
      <RadioGroup defaultValue="hero" className="grid gap-2">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="hero" id="hero" />
          <Label htmlFor="hero" className="font-body font-normal">
            Hero
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="villain" id="villain" />
          <Label htmlFor="villain" className="font-body font-normal">
            Villain
          </Label>
        </div>
      </RadioGroup>
    ),
  },
  {
    id: "field",
    title: "Field",
    category: "Inputs",
    description:
      "A simple labeled field wrapper with description + required state.",
    code: `import { Field, Input } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <Field label="Secret Identity" description="Shhh… we won't tell." required>
      <Input type="password" placeholder="••••••••" />
    </Field>
  );
}`,
    render: (
      <Field
        label="Secret Identity"
        description="Shhh… we won't tell."
        required
      >
        <Input type="password" placeholder="••••••••" />
      </Field>
    ),
  },
  {
    id: "input-group",
    title: "InputGroup",
    category: "Inputs",
    description: "Addons for icons, prefixes, and suffixes.",
    code: `import { InputGroup, InputGroupAddon, InputGroupInput } from "@devbrock/marvelous-ui";
import { Shield } from "lucide-react";

export function Example() {
  return (
    <InputGroup>
      <InputGroupAddon>
        <Shield className="h-4 w-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Shield ID…" />
    </InputGroup>
  );
}`,
    render: (
      <InputGroup>
        <InputGroupAddon>
          <Shield className="h-4 w-4" />
        </InputGroupAddon>
        <InputGroupInput placeholder="Shield ID…" />
      </InputGroup>
    ),
  },
  {
    id: "select",
    title: "Select",
    category: "Inputs",
    description: "A Radix Select with comic styling.",
    code: `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Choose a power…" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="strength">Super Strength</SelectItem>
        <SelectItem value="flight">Flight</SelectItem>
        <SelectItem value="telepathy">Telepathy</SelectItem>
      </SelectContent>
    </Select>
  );
}`,
    render: (
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Choose a power…" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="strength">Super Strength</SelectItem>
          <SelectItem value="flight">Flight</SelectItem>
          <SelectItem value="telepathy">Telepathy</SelectItem>
        </SelectContent>
      </Select>
    ),
  },
  {
    id: "native-select",
    title: "NativeSelect",
    category: "Inputs",
    description: "Platform-native select (mobile friendly).",
    code: `import { NativeSelect } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <NativeSelect defaultValue="">
      <option value="" disabled>Choose rank…</option>
      <option value="rookie">Rookie</option>
      <option value="veteran">Veteran</option>
      <option value="legend">Legend</option>
    </NativeSelect>
  );
}`,
    render: (
      <NativeSelect defaultValue="">
        <option value="" disabled>
          Choose rank…
        </option>
        <option value="rookie">Rookie</option>
        <option value="veteran">Veteran</option>
        <option value="legend">Legend</option>
      </NativeSelect>
    ),
  },
  {
    id: "combobox",
    title: "Combobox",
    category: "Inputs",
    description: "Searchable select built on Popover + Command.",
    code: `import * as React from "react";
import { Combobox, type ComboboxItem } from "@devbrock/marvelous-ui";

const teams: readonly ComboboxItem[] = [
  { value: "avengers", label: "The Avengers" },
  { value: "xmen", label: "X-Men" },
  { value: "fantastic", label: "Fantastic Four" },
];

export function Example() {
  const [team, setTeam] = React.useState<string | undefined>();
  return (
    <Combobox
      items={teams}
      value={team}
      onValueChange={setTeam}
      placeholder="Pick a team…"
    />
  );
}`,
    render: <ComboboxPreview />,
  },
  {
    id: "date-picker",
    title: "DatePicker",
    category: "Inputs",
    description: "Single date picker (Popover + Calendar).",
    code: `import * as React from "react";
import { DatePicker } from "@devbrock/marvelous-ui";

export function Example() {
  const [date, setDate] = React.useState<Date | undefined>();
  return <DatePicker value={date} onValueChange={setDate} />;
}`,
    render: <DatePickerPreview />,
  },
  {
    id: "alert-dialog",
    title: "AlertDialog",
    category: "Overlays",
    description:
      "A confirmation dialog for destructive or irreversible actions.",
    code: `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Self Destruct</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}`,
    render: (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">Self Destruct</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    ),
  },
  {
    id: "skeleton",
    title: "Skeleton",
    category: "Feedback",
    description: "Placeholder UI for loading states.",
    code: `import { Skeleton } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}`,
    render: (
      <div className="flex items-center gap-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
    ),
  },
  {
    id: "spinner",
    title: "Spinner",
    category: "Feedback",
    description: "A small loading spinner.",
    code: `import { Spinner } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <div className="flex items-center gap-3">
      <Spinner size={18} className="text-hero-red" />
      <span className="text-sm text-muted-foreground">Loading…</span>
    </div>
  );
}`,
    render: (
      <div className="flex items-center gap-3">
        <Spinner size={18} className="text-hero-red" />
        <span className="text-sm text-muted-foreground">Loading…</span>
      </div>
    ),
  },
  {
    id: "toasts",
    title: "Toasts (Radix + Sonner)",
    category: "Feedback",
    description:
      "Marvelous ships both the Radix toast stack and a Sonner wrapper.",
    code: `import { Button, Toaster, SonnerToaster, toast, sonnerToast } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <>
      <Toaster />
      <SonnerToaster theme="system" />

      <div className="flex gap-2">
        <Button onClick={() => toast({ title: "POW!", description: "Radix toast" })}>
          Toast
        </Button>
        <Button variant="outline" onClick={() => sonnerToast("BAM!", { description: "Sonner toast" })}>
          Sonner
        </Button>
      </div>
    </>
  );
}`,
    render: <ToastPreview />,
  },
  {
    id: "accordion",
    title: "Accordion",
    category: "Data Display",
    description: "Expandable FAQ-style disclosure.",
    code: `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="one">
        <AccordionTrigger>What is Marvelous UI?</AccordionTrigger>
        <AccordionContent>Comic-book inspired components.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
    render: (
      <Accordion type="single" collapsible>
        <AccordionItem value="one">
          <AccordionTrigger>What is Marvelous UI?</AccordionTrigger>
          <AccordionContent>Comic-book inspired components.</AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
  },
  {
    id: "collapsible",
    title: "Collapsible",
    category: "Data Display",
    description: "Show/hide extra content with a trigger.",
    code: `import * as React from "react";
import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@devbrock/marvelous-ui";

export function Example() {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="space-y-2">
      <CollapsibleTrigger asChild>
        <Button variant="outline">{open ? "Hide" : "Show"} roster</Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="rounded-md border-2 border-ink bg-card p-3">
        Iron Man, Storm, Spider-Man…
      </CollapsibleContent>
    </Collapsible>
  );
}`,
    render: (
      <Collapsible className="space-y-2">
        <CollapsibleTrigger asChild>
          <Button variant="outline">Show roster</Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="rounded-md border-2 border-ink bg-card p-3">
          Iron Man, Storm, Spider-Man…
        </CollapsibleContent>
      </Collapsible>
    ),
  },
  {
    id: "card",
    title: "Card",
    category: "Data Display",
    description: "A flexible panel primitive with header/content/footer slots.",
    code: `import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hero Profile</CardTitle>
        <CardDescription>View and edit hero information</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground">Tony Stark</div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">View</Button>
      </CardFooter>
    </Card>
  );
}`,
    render: (
      <Card>
        <CardHeader>
          <CardTitle>Hero Profile</CardTitle>
          <CardDescription>View and edit hero information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground">Tony Stark</div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm">
            View
          </Button>
        </CardFooter>
      </Card>
    ),
  },
  {
    id: "avatar",
    title: "Avatar",
    category: "Data Display",
    description: "User/avatar circle with fallback text.",
    code: `import { Avatar, AvatarFallback } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <Avatar className="h-14 w-14 border-2 border-ink">
      <AvatarFallback className="bg-hero-red text-primary-foreground font-display">
        IM
      </AvatarFallback>
    </Avatar>
  );
}`,
    render: (
      <Avatar className="h-14 w-14 border-2 border-ink">
        <AvatarFallback className="bg-hero-red text-primary-foreground font-display">
          IM
        </AvatarFallback>
      </Avatar>
    ),
  },
  {
    id: "aspect-ratio",
    title: "AspectRatio",
    category: "Data Display",
    description: "Keep media locked to a ratio like 16:9.",
    code: `import { AspectRatio } from "@devbrock/marvelous-ui";
import { Sparkles } from "lucide-react";

export function Example() {
  return (
    <AspectRatio ratio={16 / 9}>
      <div className="h-full w-full rounded-md border-2 border-ink bg-gradient-to-br from-hero-red via-cosmic-orange to-hero-yellow flex items-center justify-center">
        <Sparkles className="h-10 w-10 text-primary-foreground" />
      </div>
    </AspectRatio>
  );
}`,
    render: (
      <AspectRatio ratio={16 / 9}>
        <div className="h-full w-full rounded-md border-2 border-ink bg-gradient-to-br from-hero-red via-cosmic-orange to-hero-yellow flex items-center justify-center">
          <Sparkles className="h-10 w-10 text-primary-foreground" />
        </div>
      </AspectRatio>
    ),
  },
  {
    id: "table",
    title: "Table",
    category: "Data Display",
    description: "Table primitives for layout and data.",
    code: `import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Hero</TableHead>
          <TableHead>Team</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-display">Iron Man</TableCell>
          <TableCell>Avengers</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`,
    render: (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Hero</TableHead>
            <TableHead>Team</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-display">Iron Man</TableCell>
            <TableCell>Avengers</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-display">Storm</TableCell>
            <TableCell>X-Men</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ),
  },
  {
    id: "data-table",
    title: "DataTable",
    category: "Data Display",
    description: "TanStack-powered data table with filtering.",
    code: `import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@devbrock/marvelous-ui";

type Row = { name: string; team: string; power: string };

const data: Row[] = [
  { name: "Iron Man", team: "Avengers", power: "Tech Genius" },
  { name: "Storm", team: "X-Men", power: "Weather Control" },
];

const columns: ColumnDef<Row>[] = [
  { accessorKey: "name", header: "Hero" },
  { accessorKey: "team", header: "Team" },
  { accessorKey: "power", header: "Power" },
];

export function Example() {
  return (
    <DataTable
      columns={columns}
      data={data}
      filterColumnId="name"
      filterPlaceholder="Filter heroes…"
    />
  );
}`,
    render: <DataTablePreview />,
  },
  {
    id: "empty",
    title: "Empty",
    category: "Data Display",
    description: "A friendly empty state container.",
    code: `import { Button, Empty } from "@devbrock/marvelous-ui";
import { Shield } from "lucide-react";

export function Example() {
  return (
    <Empty
      icon={<Shield className="h-8 w-8 text-hero-blue" />}
      title="No missions yet"
      description="Start a mission to see it appear here."
      action={<Button variant="heroBlue">Create Mission</Button>}
    />
  );
}`,
    render: (
      <Empty
        icon={<Shield className="h-8 w-8 text-hero-blue" />}
        title="No missions yet"
        description="Start a mission to see it appear here."
        action={<Button variant="heroBlue">Create Mission</Button>}
      />
    ),
  },
  {
    id: "item",
    title: "Item",
    category: "Data Display",
    description: "A row-like component for lists with a title + description.",
    code: `import { Badge, Item, ItemDescription, ItemTitle } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <Item>
      <div>
        <ItemTitle>Issue #1</ItemTitle>
        <ItemDescription>Origin story kickoff</ItemDescription>
      </div>
      <Badge className="border-2 border-ink bg-hero-yellow/20 text-ink">NEW</Badge>
    </Item>
  );
}`,
    render: (
      <Item>
        <div>
          <ItemTitle>Issue #1</ItemTitle>
          <ItemDescription>Origin story kickoff</ItemDescription>
        </div>
        <Badge className="border-2 border-ink bg-hero-yellow/20 text-ink">
          NEW
        </Badge>
      </Item>
    ),
  },
  {
    id: "breadcrumb",
    title: "Breadcrumb",
    category: "Navigation",
    description: "Hierarchical navigation trail.",
    code: `import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Heroes</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Iron Man</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}`,
    render: (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#" onClick={(e) => e.preventDefault()}>
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#" onClick={(e) => e.preventDefault()}>
              Heroes
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Iron Man</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    ),
  },
  {
    id: "pagination",
    title: "Pagination",
    category: "Navigation",
    description: "Pagination primitives for lists and tables.",
    code: `import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
        <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
        <PaginationItem><PaginationEllipsis /></PaginationItem>
        <PaginationItem><PaginationNext href="#" /></PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}`,
    render: (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    ),
  },
  {
    id: "navigation-menu",
    title: "NavigationMenu",
    category: "Navigation",
    description: "A top-level navigation menu with dropdown content.",
    code: `import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-2 p-4 w-[260px]">
              <NavigationMenuLink className="block p-2 hover:bg-muted rounded">
                <div className="font-display">Installation</div>
                <div className="text-sm text-muted-foreground">Add the package</div>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}`,
    render: (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-2 p-4 w-[260px]">
                <NavigationMenuLink className="block p-2 hover:bg-muted rounded">
                  <div className="font-display">Installation</div>
                  <div className="text-sm text-muted-foreground">
                    Add the package
                  </div>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    ),
  },
  {
    id: "menubar",
    title: "Menubar",
    category: "Navigation",
    description: "Application-style menu bar.",
    code: `import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Save</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}`,
    render: (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Save</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    ),
  },
  {
    id: "sheet",
    title: "Sheet",
    category: "Overlays",
    description: "A side panel overlay.",
    code: `import { Button, Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="heroBlue">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Hero Database</SheetTitle>
          <SheetDescription>Select a hero to view details.</SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <Button variant="outline">Close</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}`,
    render: (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="heroBlue">Open Sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Hero Database</SheetTitle>
            <SheetDescription>Select a hero to view details.</SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <Button variant="outline">Close</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    ),
  },
  {
    id: "drawer",
    title: "Drawer",
    category: "Overlays",
    description: "A bottom sheet style drawer (Vaul).",
    code: `import { Button, Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="mutant">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Mission Briefing</DrawerTitle>
          <DrawerDescription>Review mission details before deployment.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button variant="hero">Accept</Button>
          <Button variant="outline">Decline</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}`,
    render: (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="mutant">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Mission Briefing</DrawerTitle>
            <DrawerDescription>
              Review mission details before deployment.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button variant="hero">Accept</Button>
            <Button variant="outline">Decline</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    ),
  },
  {
    id: "dropdown-menu",
    title: "DropdownMenu",
    category: "Overlays",
    description: "A menu that opens from a trigger.",
    code: `import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Actions</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Duplicate</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`,
    render: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Actions</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Duplicate</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-destructive">
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
  {
    id: "hover-card",
    title: "HoverCard",
    category: "Overlays",
    description: "A hover/focus preview card.",
    code: `import { HoverCard, HoverCardContent, HoverCardTrigger, Button } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="p-0 h-auto">@marvelous_ui</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        <div className="font-display">Marvelous UI</div>
        <div className="text-sm text-muted-foreground">Bold. Dynamic. Heroic.</div>
      </HoverCardContent>
    </HoverCard>
  );
}`,
    render: (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link" className="p-0 h-auto">
            @marvelous_ui
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-72">
          <div className="font-display">Marvelous UI</div>
          <div className="text-sm text-muted-foreground">
            Bold. Dynamic. Heroic.
          </div>
        </HoverCardContent>
      </HoverCard>
    ),
  },
  {
    id: "context-menu",
    title: "ContextMenu",
    category: "Overlays",
    description: "Right-click / context menu interactions.",
    code: `import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="rounded-md border-2 border-ink bg-card p-6 text-center">
          Right-click me
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Copy</ContextMenuItem>
        <ContextMenuItem>Duplicate</ContextMenuItem>
        <ContextMenuItem className="text-destructive">Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}`,
    render: <ContextMenuPreview />,
  },
  {
    id: "command",
    title: "Command",
    category: "Overlays",
    description: "CmdK-style command list (cmdk).",
    code: `import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <Command>
      <CommandInput placeholder="Search…" />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        <CommandGroup heading="Heroes">
          <CommandItem>Iron Man</CommandItem>
          <CommandItem>Storm</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}`,
    render: <CommandPreview />,
  },
  {
    id: "carousel",
    title: "Carousel",
    category: "Data Display",
    description: "Embla-powered carousel with keyboard support.",
    code: `import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <Carousel opts={{ loop: true }}>
      <CarouselContent>
        {["Issue #1", "Issue #2", "Issue #3"].map((label) => (
          <CarouselItem key={label}>
            <div className="rounded-md border-2 border-ink bg-card p-6">
              <div className="font-display text-xl">{label}</div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}`,
    render: <CarouselPreview />,
  },
  {
    id: "chart",
    title: "Chart",
    category: "Data Display",
    description: "Recharts helpers with theme-aware CSS variables.",
    code: `import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@devbrock/marvelous-ui";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const data = [
  { name: "Mon", value: 12 },
  { name: "Tue", value: 18 },
];

const config: ChartConfig = {
  value: { label: "Missions", color: "hsl(var(--hero-red))" },
};

export function Example() {
  return (
    <ChartContainer config={config} className="w-full">
      <BarChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="value" fill="var(--color-value)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}`,
    render: <ChartPreview />,
  },
  {
    id: "form",
    title: "Form",
    category: "Inputs",
    description: "React Hook Form helpers (FormField/FormItem/FormMessage…).",
    code: `import * as React from "react";
import { useForm } from "react-hook-form";
import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, toast } from "@devbrock/marvelous-ui";

type Values = { heroName: string };

export function Example() {
  const form = useForm<Values>({ defaultValues: { heroName: "" } });

  return (
    <Form {...form}>
      <form
        className="space-y-3"
        onSubmit={form.handleSubmit(({ heroName }) => {
          toast({ title: "Saved", description: \`Hero: \${heroName || "Unknown"}\` });
        })}
      >
        <FormField
          control={form.control}
          name="heroName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hero Name</FormLabel>
              <FormControl>
                <Input placeholder="Spider-Man" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="sm">Save</Button>
      </form>
    </Form>
  );
}`,
    render: <FormPreview />,
  },
  {
    id: "typography",
    title: "Typography",
    category: "Data Display",
    description: "Tiny typography primitives (H1/H2/P/Pre/InlineCode/etc.).",
    code: `import { Blockquote, H1, H2, InlineCode, P, Pre, Small, Kbd } from "@devbrock/marvelous-ui";

export function Example() {
  return (
    <div className="space-y-4">
      <H1>MARVELOUS UI</H1>
      <H2>Chapter One</H2>
      <P>
        Use <InlineCode>{"<Button />"}</InlineCode> for actions.
      </P>
      <Small>
        Shortcut: <Kbd>⌘</Kbd> <Kbd>K</Kbd>
      </Small>
      <Pre>
        <code>{\`import { Button } from "@devbrock/marvelous-ui";\`}</code>
      </Pre>
      <Blockquote>"With great power…"</Blockquote>
    </div>
  );
}`,
    render: (
      <div className="space-y-4">
        <H1 className="text-4xl">MARVELOUS UI</H1>
        <H2 className="text-2xl">Chapter One</H2>
        <P>
          Use <InlineCode>{"<Button />"}</InlineCode> for actions.
        </P>
        <Small>
          Shortcut: <Kbd>⌘</Kbd> <Kbd>K</Kbd>
        </Small>
        <Pre>
          <code>{`import { Button } from "@devbrock/marvelous-ui";`}</code>
        </Pre>
        <Blockquote>"With great power…"</Blockquote>
      </div>
    ),
  },
];

/**
 * Renders a grid of `ExampleCard`s with consistent styling.
 */
export function ExampleGrid({
  examples,
}: Readonly<{ examples: readonly ComponentExample[] }>) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {examples.map((ex, idx) => (
        <ExampleCard
          key={ex.id}
          id={ex.id}
          title={ex.title}
          description={ex.description}
          code={ex.code}
          cornerLabel={`#${idx + 1}`}
        >
          {ex.render}
        </ExampleCard>
      ))}
    </div>
  );
}
