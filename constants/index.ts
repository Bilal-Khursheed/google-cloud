export const navLinks = [
  {
    label: "Home",
    route: "/home",
    icon: "/assets/icons/home.svg",
  },
  {
    label: "My AI Influencers",
    route: "/influencers",
    icon: "/assets/icons/image.svg",
  },
  {
    label: "Create AI Influencer",
    route: "/create",
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
        label: "15 HD Photos",
        isIncluded: true,
      },
      {
        label: "HD Quality",
        isIncluded: true,
      },
      {
        label: "100% Realistic",
        isIncluded: true,
      },
      {
        label: "Consistant Face",
        isIncluded: true,
      },
      {
        label: "Multiple Clothing & Diverse Decors",
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
    isBestSeller: true,
    inclusions: [
      {
        label: "30 HD Photos",
        isIncluded: true,
      },
      {
        label: "HD Quality",
        isIncluded: true,
      },
      {
        label: "100% Realistic",
        isIncluded: true,
      },
      {
        label: "Consistant Face",
        isIncluded: true,
      },
      {
        label: "Multiple Clothing & Diverse Decors",
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
        label: "30 HD Photos + 5 HD Photos Erotic/Nudes",
        isIncluded: true,
      },
      {
        label: "HD Quality",
        isIncluded: true,
      },
      {
        label: "100% Realistic",
        isIncluded: true,
      },
      {
        label: "Consistant Face",
        isIncluded: true,
      },
      {
        label: "Multiple Clothing & Diverse Decors",
        isIncluded: true,
      },
    ],
  },
];

export const heightOptions = {
  Dwarf: "Dwarf",
  Petite: "Petite",
  Normal: "Normal",
  Tall: "Tall",
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

export const ageOptions = {
  25: "25+",
  30: "30+",
  35: "35+",
  40: "40+",
  Milf: "Milf",
  Gilf: "Gilf",
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
