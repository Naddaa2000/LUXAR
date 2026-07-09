import { IMAGES } from "./site";

export type LuxarModel = {
  id: string;
  tag: string;
  title: string;
  label: string;
  body: string;
  status: string;
  price: string;
  range: string;
  power: string;
  image: string;
};

export const MODELS: LuxarModel[] = [
  {
    id: "series-x",
    tag: "FLAGSHIP",
    title: "SERIES-X",
    label: "Series-X",
    body: "The definitive LUXAR. 1,200 HP, 520-mile range, 0–60 in 2.1 seconds.",
    status: "AVAILABLE",
    price: "$189,000",
    range: "520 mi",
    power: "1,200 HP",
    image: IMAGES.modelS,
  },
  {
    id: "series-g",
    tag: "GRAND TOURER",
    title: "SERIES-G",
    label: "Series-G",
    body: "Long-range luxury. Extended battery, adaptive air suspension, rear executive lounge.",
    status: "AVAILABLE",
    price: "$249,000",
    range: "480 mi",
    power: "1,450 HP",
    image: IMAGES.modelG,
  },
  {
    id: "series-r",
    tag: "TRACK",
    title: "SERIES-R",
    label: "Series-R",
    body: "Track-bred performance. Carbon ceramic brakes, race suspension, 1,680 HP.",
    status: "LIMITED",
    price: "$329,000",
    range: "410 mi",
    power: "1,680 HP",
    image: IMAGES.modelR,
  },
  {
    id: "series-v",
    tag: "CONCEPT",
    title: "SERIES-V",
    label: "Series-V",
    body: "Vertical takeoff concept. Four hub motors, gullwing doors, autonomous flight mode.",
    status: "2028",
    price: "TBA",
    range: "—",
    power: "2,000 HP",
    image: IMAGES.studio,
  },
  {
    id: "series-u",
    tag: "UTILITY",
    title: "SERIES-U",
    label: "Series-U",
    body: "Electric SUV. Same DNA, more space. 7 seats, 450-mile range, off-road capable.",
    status: "2027",
    price: "$129,000",
    range: "450 mi",
    power: "800 HP",
    image: IMAGES.modelU,
  },
  {
    id: "series-e",
    tag: "ENTRY",
    title: "SERIES-E",
    label: "Series-E",
    body: "Accessible performance. 600 HP, 380-mile range. The gateway to LUXAR.",
    status: "2027",
    price: "$89,000",
    range: "380 mi",
    power: "600 HP",
    image: IMAGES.modelE,
  },
];

export const RESERVABLE_MODELS = MODELS.filter(
  (m) => m.status === "AVAILABLE" || m.status === "LIMITED",
);

export function getModelById(id: string): LuxarModel | undefined {
  return MODELS.find((m) => m.id === id);
}

export const STATUS_COLOR: Record<string, string> = {
  AVAILABLE: "text-primary-fixed-dim border-primary-fixed-dim/40",
  LIMITED: "text-secondary-fixed-dim border-secondary-fixed-dim/40",
  "2027": "text-outline border-outline/40",
  "2028": "text-outline border-outline/40",
};
