type MinProductListType = {
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
  id: string;
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
  id: string;
  ownership:number;
  odometer:string;
}