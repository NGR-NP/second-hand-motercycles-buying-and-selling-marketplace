
type SingleProductResponseTypes = {
  id?: number ;
  name: string;
  companyId: number;
  boughtYear: number;
  price: number;
  modal: string;
  images: [];
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
};

interface ProductAttributes {
  products: [
    {
      id?: number | string;
      name: string;
      companyId: number;
      boughtYear: number;
      price: number;
      modal: string;
      images:[];
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
