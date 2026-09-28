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
};

export type PostMeta = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
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
};
