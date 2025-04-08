// utils/mockData.ts
export interface Partner {
  id: string;
  logo: string;
  name: string;
}

export const partners: Partner[] = [
  {
    id: "partner1",
    logo: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735909633/Bwosh/companylogo/logo1_b79tby.svg",
    name: "Darren Davies Properties",
  },
  {
    id: "partner2",
    logo: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735909633/Bwosh/companylogo/logo2_xyckxi.svg",
    name: "Biufort Homes Limited",
  },
  {
    id: "partner3",
    logo: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735909634/Bwosh/companylogo/logo3_zfwda4.svg",
    name: "A.T.S",
  },
  {
    id: "partner4",
    logo: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1735909634/Bwosh/companylogo/logo4_lhuz8p.svg",
    name: "Samson Agbato Consulting",
  },
  {
    id: "partner5",
    logo: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1736157209/Bwosh/companylogo/logo5_iaefqr.svg",
    name: "Elysium Oasis",
  },
];

export interface TeamMember {
  name: string;
  image: string;
  role: string;
  description: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "NNAEMEKA",
    image:
      "https://res.cloudinary.com/dikzx4eyh/image/upload/v1736275347/Bwosh/about/profile2_dndwuz.png",
    role: "Chief Technology Officer (C.T.O)",
    description:
      "Leads the seamless integration of innovative tools and techniques, turning concepts into stunning, functional spaces..",
  },
  {
    name: "TOLULOPE",
    image:
      "https://res.cloudinary.com/dikzx4eyh/image/upload/v1736275348/Bwosh/about/profile1_c78foq.png",
    role: "Chief Executive Officer (C.E.O)",
    description:
      "Combines a passion for design with a sharp eye for detail to craft interiors that are both elegant and practical.",
  },
  {
    name: "KEHINDE",
    image:
      "https://res.cloudinary.com/dikzx4eyh/image/upload/v1736275347/Bwosh/about/profile3_cl4vxg.png",
    role: "Chief Operating Officer (C.O.O)",
    description:
      "Orchestrates the curation of sophisticated decor, ensuring each space exudes timeless beauty and charm.",
  },
];

export interface Post {
  id: number;
  name: string;
  role: string;
  desc: string;
}

export const posts: Post[] = [
  {
    id: 1,
    name: "Biufort Homes Limited",
    role: "Real Estate Company",
    desc: "Bwosh Interiors brought our residential projects to life with stunning designs. Their attention to detail and creativity are unmatched!",
  },
  {
    id: 2,
    name: "Samson Agbato",
    role: "CEO, Samson Agbato Consulting",
    desc: "Bwosh Interiors exceeded my expectations! They remodeled our office space perfectly, creating a modern, functional environment. Highly recommended!",
  },
  {
    id: 3,
    name: "Architect Abbey",
    role: "Homeowner",
    desc: "Bwosh Interiors transformed my design into a masterpiece! Their quality craftsmanship made all the difference.",
  },
  {
    id: 4,
    name: "Mr. Demola",
    role: "Homeowner",
    desc: "Bwosh Interiors transformed my home into a beautiful, functional space. Their design skills and attention to detail are exceptional!",
  },
];

export interface Project {
  slug: {
    current: string;
  };
  projectName: string;
  location: string;
  date?: string;
  description?: string;
  category: "residential" | "offices" | "kitchens" | "hospitality";
  images: {
    asset: {
      url: string;
    };
  }[];
}
