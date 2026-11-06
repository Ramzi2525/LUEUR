import type {
  CareItem,
  FooterColumn,
  JournalPost,
  Product,
  RitualCategory,
} from '@/types';

export const navCategories: string[] = ['Face', 'Brushes', 'Skin', 'Nails', 'Fragrance'];

export const ritualCategories: RitualCategory[] = [
  {
    id: 'face',
    label: 'Face',
    tagline: 'Cleanse to renew',
    image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=700&q=80',
    alt: 'Two amber skincare bottles beside a white tulip',
  },
  {
    id: 'brushes',
    label: 'Brushes',
    tagline: 'Flawless, blended',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80',
    alt: 'Pink and brown makeup brush set',
  },
  {
    id: 'skin',
    label: 'Skin',
    tagline: 'Serums and daily rituals',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=700&q=80',
    alt: 'Amber glass dropper bottle on a wooden pedestal',
  },
  {
    id: 'nails',
    label: 'Nails',
    tagline: 'Salon-grade, at home',
    image: 'https://images.unsplash.com/photo-1775500835259-d3b3f6d6e2f2?auto=format&fit=crop&w=700&q=80',
    alt: 'Manicure tools laid out on a white towel',
  },
  {
    id: 'fragrance',
    label: 'Fragrance',
    tagline: 'Layer your signature scent',
    image: 'https://images.unsplash.com/photo-1623248509172-53853f87cac7?auto=format&fit=crop&w=700&q=80',
    alt: 'Fragrance bottle detail',
  },
];

export const seasonProducts: Product[] = [
  {
    id: 'halo-led-mask',
    name: 'The Halo LED Mask',
    meta: 'Device · Red + NIR light',
    price: '$285',
    image:
      'https://images.unsplash.com/photo-1578747763484-51b21a33e4fa?auto=format&fit=crop&w=900&q=80',
    alt: 'The Halo LED Mask device',
  },
  {
    id: 'sculpt-stone',
    name: 'The Sculpt Stone',
    meta: 'Face tool · Polished quartz',
    price: '$68',
    image:
      'https://images.unsplash.com/photo-1611480367081-03e93cccefd6?auto=format&fit=crop&w=900&q=80',
    alt: 'The Sculpt Stone facial tool',
  },
  {
    id: 'atelier-brush-set',
    name: 'The Atelier Brush Set',
    meta: 'Brushes · 12 pieces, vegan bristles',
    price: '$124',
    image: 'https://images.unsplash.com/photo-1620464003286-a5b0d79f32c2?auto=format&fit=crop&w=900&q=80',
    alt: 'The Atelier makeup brush set',
  },
];

export const heroProduct: Product = {
  id: 'halo-led-mask-hero',
  name: 'The Halo LED Mask',
  meta: 'Red + near-infrared light therapy, clinically shown to smooth fine lines in 10 minutes a day.',
  price: '$285',
  compareAtPrice: '$340',
  image: '',
  alt: '',
};

export const careItems: CareItem[] = [
  {
    id: 'recalibration',
    icon: 'refresh',
    title: 'Free Recalibration for Life',
    description: 'Send your device in for complimentary sensor calibration.',
  },
  {
    id: 'trade-in',
    icon: 'exchange',
    title: 'Trade-in for Store Credit',
    description: 'Exchange your well-loved tools to fund your next ritual.',
  },
  {
    id: 'verified',
    icon: 'shield',
    title: 'Verified With Full History',
    description: 'Every resale tool is authenticated and serial-verified.',
  },
];

export const journalPosts: JournalPost[] = [
  {
    id: 'red-light-8-weeks',
    title: 'The Science of Red Light: 8 Weeks In',
    date: 'May 12, 2026',
    image:
      'https://images.unsplash.com/photo-1567721913486-6585f069b332?auto=format&fit=crop&w=700&q=80',
    alt: 'Black skincare containers on stacked stone blocks',
  },
  {
    id: 'wind-down-ritual',
    title: 'A 10-Minute Wind-Down Ritual',
    date: 'Apr 28, 2026',
    image:
      'https://images.unsplash.com/photo-1585945037805-5fd82c2e60b1?auto=format&fit=crop&w=700&q=80',
    alt: 'Cream texture on a soft beige surface',
  },
  {
    id: 'source-quartz',
    title: 'Why We Source Quartz From Minas Gerais',
    date: 'Apr 15, 2026',
    image:
      'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=700&q=80',
    alt: 'Skincare products with river stones and greenery',
  },
  {
    id: 'layer-fragrance',
    title: 'The Right Way to Layer Fragrance',
    date: 'Mar 30, 2026',
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80',
    alt: 'Pump bottle beside pink tulips and a towel',
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: 'Shop',
    links: [
      { label: 'Face', href: '#' },
      { label: 'Brushes', href: '#' },
      { label: 'Skin', href: '#' },
      { label: 'Gift Sets', href: '#' },
    ],
  },
  {
    title: 'Journal',
    links: [
      { label: 'Stories', href: '#' },
      { label: 'Reviews', href: '#' },
      { label: 'Guides', href: '#' },
      { label: 'Care', href: '#' },
    ],
  },
  {
    title: 'Socials',
    links: [
      { label: 'Instagram', href: '#' },
      { label: 'TikTok', href: '#' },
      { label: 'YouTube', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Refund Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
];

export const standardQuote = {
  text: 'Every tool is clinically tested on real skin for twelve weeks before it earns our name.',
  author: 'Dr. Amara Reyes',
  role: 'Lead Dermatology Consultant, Los Angeles CA',
  images: [
    {
      src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80',
      alt: 'Assorted makeup brushes, close-up',
    },
    {
      src: 'https://images.unsplash.com/photo-1620804464794-d0410e95fbe5?auto=format&fit=crop&w=800&q=80',
      alt: 'Brown and silver makeup brush',
    },
  ],
};

export const heroImage = {
src: 'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?auto=format&fit=crop&w=3000&q=95',
alt: 'Assorted pink cosmetic containers, tubes, and a makeup brush on a pale background',
};