export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category?: string; // Added category field
  tag?: {
    type: 'discount' | 'new';
    value: string;
  };
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}