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
  isVerifiedByGarage: "unchecked" | "verified" | "unverified";
  isDeleteByUser: boolean;
  isNegotiable: boolean;
}

interface ProductAttributes {
  products: [
    {
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
      isVerifiedByGarage: "unchecked" | "verified" | "unverified";
      isDeleteByUser: boolean;
      isNegotiable: boolean;
    }
  ];
}

interface AllProductsType extends ProductAttributes {
  count: number;
  totalPages: number;
  currentPage: number;
}
