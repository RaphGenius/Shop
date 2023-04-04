export type ProductType = {
  category: string;
  description: string;
  id: number;
  image: string;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
};

export type StoreProduct = {
  id: number;
  quantity: number;
};
