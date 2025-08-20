import { groq } from "next-sanity";
import { client } from "./client";

// Branches:
export type TeamMember = {
  name: string;
  role: string | null;
  email: string;
  phone: string | null;
  img1Url?: string;
  img2Url?: string;
};

export type Branch = {
  _id: string;
  title: {
    en: string;
    pl: string;
    de: string;
  };
  slug: string;
  address: string;
  imageUrl?: string;
  team: TeamMember[];
};

const allBranchesQuery = groq`
  *[_type == "branch"] | order(_createdAt asc){
    _id,
    title,
    "slug": slug.current,
    address,
    "imageUrl": img.asset->url
  }
`;

const branchBySlugQuery = groq`
  *[_type == "branch" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    address,
    "imageUrl": img.asset->url,
    "team": team[]{
      name,
      role,
      email,
      phone,
      "img1Url": img1.asset->url,
      "img2Url": img2.asset->url
    }
  }
`;

const branchSlugsQuery = groq`
  *[_type == "branch" && defined(slug.current)][]{
    "slug": slug.current
  }
`;

export async function getAllBranches(): Promise<Branch[]> {
  return client.fetch(allBranchesQuery);
}

export async function getBranchBySlug(slug: string): Promise<Branch | null> {
  return client.fetch(branchBySlugQuery, { slug });
}

export async function getAllBranchSlugs(): Promise<{ slug: string }[]> {
  return client.fetch(branchSlugsQuery);
}


//Gallery:

export type GalleryImage = {
  imageUrl: string;
  alt: string;
  ytLink?: string;
};

export type GalleryPost = {
  _id: string;
  title: {
    en: string;
    pl: string;
    de: string;
  };
  subtitle: {
    en: string | null;
    pl: string | null;
    de: string | null;
  };
  slug: string;
  images: GalleryImage[];
};

const allGalleryPostsQuery = groq`
  *[_type == "galleryPost"] | order(isPinned desc, publicationDate desc){
    _id,
    title,
    subtitle,
    "slug": slug.current,
    "images": images[]{
      "imageUrl": image.asset->url,
      alt,
      ytLink
    }
  }
`;

export async function getAllGalleryPosts(): Promise<GalleryPost[]> {
  return client.fetch(allGalleryPostsQuery);
}