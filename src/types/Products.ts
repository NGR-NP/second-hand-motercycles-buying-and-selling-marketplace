type MinProductListType = {
  name: string;
  company: string;
  boughtYears: number;
  price: number;
  description: string;
  engineType: string;
  modal: string;
  images: [];
  color: string;
  shortDescription: string;
  userId: number;
  kmDriven: number;
  ownerShip: number;
  engineDisplacement: number;
  yearOfManufracture: number;
  milage: string;
  wheelSize: number;
  isSold: boolean;
  isDeleteByUser: boolean;
  isNegotiable: boolean;
};
type SingleProductResponseTypes = {
  createdAt: string;
  name: string;
  image: string;
  company: string;
  year: string;
  price: number;
  description: string;
  shortDescription: string;
  engineType: string;
  model: string;
  userId: string;
  isSold: boolean;
  isDeleteByUser: boolean;
  isNegotiable: boolean;
  id: number;
  ownership: number;
  odometer: string;
};




type ProductAttributes= {
  id?: number;
  name: string;
  companyId: number;
  boughtYear: number;
  price: number;
  modal: string;
  images: Record<string, any>;
  location: string;
  color: string;
  userId: number;
  kmDriven: number;
  ownerShip: number;
  engineDisplacement: number;
  milage: string;
  category: string;
  wheelSize: number;
  isVerifiedByGarage: 'unchecked' | 'verified' | 'unverified';
  isDeleteByUser: boolean;
  isNegotiable: boolean;
} | null

type AllProductsType = {
  allProducts: {
    count: number;
    totalPages: number;
    currentPage: number;
    products: ProductAttributes[];
  };
};
