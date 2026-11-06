export interface RitualCategory {
  id: string;
  label: string;
  tagline: string;
  image: string;
  alt: string;
}

export interface Product {
  id: string;
  name: string;
  meta: string;
  price: string;
  compareAtPrice?: string;
  image: string;
  alt: string;
}

export interface JournalPost {
  id: string;
  title: string;
  date: string;
  image: string;
  alt: string;
}

export type CareIconName = 'refresh' | 'exchange' | 'shield';

export interface CareItem {
  id: string;
  icon: CareIconName;
  title: string;
  description: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}
