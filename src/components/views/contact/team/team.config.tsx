type TeamItem = {
  name: string;
  fullName: string;
  role: string;
  phone: string;
  email: string;
  img1: string;
  img2: string;
};

const imageBasePath = "/assets/images/contact/team/";

export const team: TeamItem[] = [
  {
    name: "Dominik",
    fullName: "Dominik Rybarczyk",
    role: "career.work.internationalForwarder",
    phone: "+48 733 899 762",
    email: "d.rybarczyk",
    img1: `${imageBasePath}t2-1.png`,
    img2: `${imageBasePath}t2-2.png`,
  },
  {
    name: "Kacper",
    fullName: "Kacper Opaczewski",
    role: "career.work.internationalForwarder",
    phone: "+48 733 899 292",
    email: "k.opaczewski",
    img1: `${imageBasePath}t3-1.png`,
    img2: `${imageBasePath}t3-2.png`,
  },
  {
    name: "Sebastian",
    fullName: "Sebastian Ochociński",
    role: "career.work.internationalForwarder",
    phone: "+48 733 899 141",
    email: "s.ochocinski",
    img1: `${imageBasePath}t4-1.png`,
    img2: `${imageBasePath}t4-2.png`,
  },
  {
    name: "Oscar",
    fullName: "Oscar Nowak",
    role: "career.work.internationalForwarder",
    phone: "+48 733 899 108",
    email: "o.nowak",
    img1: `${imageBasePath}t5-1.png`,
    img2: `${imageBasePath}t5-2.png`,
  },
];
