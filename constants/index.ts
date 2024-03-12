export const navLinks = [
  {
    label: "Home",
    route: "/",
    icon: "/assets/icons/home.svg",
  },
  {
    label: "Album",
    route: "/albums",
    icon: "/assets/icons/image.svg",
  },
  {
    label: "Images",
    route: "/images/",
    icon: "/assets/icons/stars.svg",
  },
  {
    label: "Generate",
    route: "/generate",
    icon: "/assets/icons/stars.svg",
  },
  {
    label: "Profile",
    route: "/profile",
    icon: "/assets/icons/profile.svg",
  },
  {
    label: "Buy Credits",
    route: "/credits",
    icon: "/assets/icons/bag.svg",
  },
];

export const plans = [
  {
    _id: 1,
    name: "Basic",
    icon: "/assets/icons/free-plan.svg",
    price: 24.99,
    credits: 1,
    inclusions: [
      {
        label: "1 Credits",
        isIncluded: true,
      },
      {
        label: "Basic Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: true,
      },
    ],
  },
  {
    _id: 2,
    name: "Standard Package",
    icon: "/assets/icons/free-plan.svg",
    price: 39.99,
    credits: 2,
    inclusions: [
      {
        label: "2 Credits",
        isIncluded: true,
      },
      {
        label: "Full Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: true,
      },
    ],
  },
  {
    _id: 3,
    name: "Pro Package",
    icon: "/assets/icons/free-plan.svg",
    price: 59.99,
    credits: 3,
    inclusions: [
      {
        label: "3 Credits",
        isIncluded: true,
      },
      {
        label: "Full Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: true,
      },
    ],
  },
];

export const transformationTypes = {
  restore: {
    type: "restore",
    title: "Albums",
    subTitle: "Refine images by removing noise and imperfections",
    config: { restore: true },
    icon: "image.svg",
  },
  removeBackground: {
    type: "removeBackground",
    title: "Background Remove",
    subTitle: "Removes the background of the image using AI",
    config: { removeBackground: true },
    icon: "camera.svg",
  },
  fill: {
    type: "fill",
    title: "Image",
    subTitle: "Enhance an image's dimensions using AI outpainting",
    config: { fillBackground: true },
    icon: "stars.svg",
  },
  remove: {
    type: "remove",
    title: "Object Remove",
    subTitle: "Identify and eliminate objects from images",
    config: {
      remove: { prompt: "", removeShadow: true, multiple: true },
    },
    icon: "scan.svg",
  },
  recolor: {
    type: "recolor",
    title: "Object Recolor",
    subTitle: "Identify and recolor objects from the image",
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
    icon: "filter.svg",
  },
};

export const heightOptions = {
  dwarf: "Dwarf",
  petite: "Petite",
  noraml: "Normal",
  tall: "Tall",
};

export const bodyOptions = {
  Slim: "Slim",
  Normal: "Normal",
  Fit: "Fit",
  Muscular: "Muscular",
  Curvy: "Curvy",
  Fat: "Fat",
};

export const eyesOptions = {
  Brown: "Brown",
  Blue: "Blue",
  Black: "Black",
  Green: "Green",
  Grey: "Grey",
};

export const skinOptions = {
  White: "White",
  Tan: "Tan",
  Black: "Black",
};

export const hairOptions = {
  Blonde: "Blonde",
  PlatinumBlond: "Platinum Blond",
  Brown: "Brown",
  Black: "Black",
  Red: "Red",
  Grey: "Grey",
  Blue: "Blue",
  Green: "Green",
  Purple: "Purple",
  Pink: "Pink",
  Orange: "Orange",
  Multicolored: "Multicolored",
};

export const bustOption = {
  Small: "Small",
  Medium: "Medium",
  Large: "Large",
};

export const defaultValues = {
  title: "",
  aspectRatio: "",
  color: "",
  prompt: "",
  publicId: "",
};

export const creditFee = -1;
