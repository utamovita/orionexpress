type BranchData = {
  slug: string;
  title: {
    en: string;
    pl: string;
    de: string;
  };
  img: string;
  address: string;
  team: TeamMember[];
};

type TeamMember = {
  name: string;
  role: string;
  email: string;
  phone: string;
  img1: string;
  img2: string;
};
const imageBasePath = "/assets/images/contact/team/";
const imageBasePath2 = "/assets/images/gallery/zycie-codzienne/";
const branchData: BranchData[] = [
  {
    slug: "oddzial-buk-mickiewicza",
    title: {
      pl: "Oddział Buk",
      en: "Buk",
      de: "Buk",
    },
    img: `${imageBasePath2}1.jpg`,
    address: "Mickiewicza 1a, 64-320 Buk",
    team: [
      {
        name: "Dominik",
        role: "Freight Manager",
        phone: "+48 733 899 762",
        email: "d.rybarczyk",
        img1: `${imageBasePath}t2-1.png`,
        img2: `${imageBasePath}t2-2.png`,
      },
      {
        name: "Kacper",
        role: "Freight Manager",
        phone: "+48 733 899 292",
        email: "k.opaczewski",
        img1: `${imageBasePath}t3-1.png`,
        img2: `${imageBasePath}t3-2.png`,
      },
      {
        name: "Sebastian",
        role: "Freight Manager",
        phone: "+48 733 899 141",
        email: "s.ochocinski",
        img1: `${imageBasePath}t4-1.png`,
        img2: `${imageBasePath}t4-2.png`,
      },
      {
        name: "Oscar",
        role: "Freight Manager",
        phone: "+48 733 899 108",
        email: "o.nowak",
        img1: `${imageBasePath}t5-1.png`,
        img2: `${imageBasePath}t5-2.png`,
      },
    ],
  },
  {
    slug: "oddzial-buk-wisniowy-sad",
    title: {
      pl: "Oddział Buk",
      en: "Buk",
      de: "Buk",
    },
    img: `${imageBasePath2}10.jpg`,
    address: "Wiśniowy Sad 25/2 64-320 Buk",
    team: [],
  },
  {
    slug: "oddzial-pniewy",
    title: {
      pl: "Oddział Pniewy",
      en: "Pniewy",
      de: "Pniewy",
    },
    img: `${imageBasePath2}3.jpg`,
    address: "Borówkowa 31a,  62-045 Pniewy",
    team: [],
  },
  {
    slug: "oddzial-opalenica",
    title: {
      pl: "Oddział Opalenica",
      en: "Opalenica",
      de: "Opalenica",
    },
    img: `${imageBasePath2}9.jpg`,
    address: "Zamkowa 3/30 , 64-330 Opalenica",
    team: [],
  },
  {
    slug: "oddzial-glinno",
    title: {
      pl: "Oddział Glinno",
      en: "Glinno",
      de: "Glinno",
    },
    img: `${imageBasePath2}5.jpg`,
    address: "Grudniowa 66B , 64-300 Glinno",
    team: [],
  },
  {
    slug: "oddzial-tarnowo-podgorne",
    title: {
      pl: "Oddział Tarnowo Podgórne",
      en: "Tarnowo Podgórne",
      de: "Tarnowo Podgórne",
    },
    img: `${imageBasePath2}6.jpg`,
    address: "Florencka 7/5 , 62-080 Tarnowo Podgórne",
    team: [],
  },
];

export { branchData };
export type { BranchData, TeamMember };
