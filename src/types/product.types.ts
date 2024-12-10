export interface Product {
  id: number;
  title: string;
  srcUrl: string;
  gallery: string[];
  price: number;
  discount: {
    amount: number;
    percentage: number;
  };
  rating: number;
}
