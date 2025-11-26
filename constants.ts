import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'Dining',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Living',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1000&auto=format&fit=crop'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
    originalPrice: 3500000,
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800&auto=format&fit=crop',
    category: 'Dining',
    tag: { type: 'discount', value: '-30%' }
  },
  {
    id: '2',
    name: 'Leviosa',
    description: 'Stylish cafe chair',
    price: 2500000,
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800&auto=format&fit=crop',
    category: 'Dining'
  },
  {
    id: '3',
    name: 'Lolito',
    description: 'Luxury big sofa',
    price: 7000000,
    originalPrice: 14000000,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop',
    category: 'Living',
    tag: { type: 'discount', value: '-50%' }
  },
  {
    id: '4',
    name: 'Respira',
    description: 'Outdoor bar table and stool',
    price: 500000,
    image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=800&auto=format&fit=crop',
    category: 'Living',
    tag: { type: 'new', value: 'New' }
  },
  {
    id: '5',
    name: 'Grifo',
    description: 'Night lamp',
    price: 1500000,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop',
    category: 'Living'
  },
  {
    id: '6',
    name: 'Muggo',
    description: 'Small mug',
    price: 150000,
    image: 'https://images.unsplash.com/photo-1584271854089-9bb3e5168e32?q=80&w=800&auto=format&fit=crop',
    category: 'Dining',
    tag: { type: 'new', value: 'New' }
  },
  {
    id: '7',
    name: 'Pingky',
    description: 'Cute bed set',
    price: 7000000,
    originalPrice: 14000000,
    image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?q=80&w=800&auto=format&fit=crop',
    category: 'Bedroom',
    tag: { type: 'discount', value: '-50%' }
  },
  {
    id: '8',
    name: 'Potty',
    description: 'Minimalist flower pot',
    price: 500000,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop',
    category: 'Living',
    tag: { type: 'new', value: 'New' }
  }
];