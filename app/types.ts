export type Hero = {
  id: string;
  documentId: string;
  name: string;
  description: string;
  role: string;
  image: string;
  url: string;
  releaseDate: string;
  featured: boolean;
  rank: string;
};

export type Post = {
  id: string;
  slug: string;
  title: string;
  body: string;
  excerpt: string;
  date: string;
  image?: string;
};

export type StrapiResponse<T> = {
  data: T[];
};

export type StrapiHero = {
  id: string;
  documentId: string;
  name: string;
  description: string;
  role: string;
  image?: {
    url: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  };
  url: string;
  releaseDate: string;
  featured: boolean;
  rank: string;
};

export type StrapiPost = {
  id: string;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  body: string;
  image?: {
    url: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  };
};
