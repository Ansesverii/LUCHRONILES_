export interface Author {
  id: string;
  name: string;
  username: string;
  image: string;
  bio: string;
  email?: string;
  designation?: string;
  semester?: string;
  course?: string;
  department?: string;
  categories?: string[];
  articlesCount?: number;
  isFounder?: boolean;
  isFaculty?: boolean;
  socialMedia?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: {
    id: string;
    name: string;
    username: string;
    image: string;
  };
  date: string;
  views?: number;
  featured?: boolean;
  hero?: boolean;
}

export interface AdminUser {
  username: string;
  password: string;
  role: string;
}
