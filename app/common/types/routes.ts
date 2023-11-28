import { v4 as uuidv4 } from 'uuid';

export interface IRoute {
  id: string;
  name: string;
  path: string;
  active: boolean;
}

export enum PATH {
  HOME = '/',
  CART = '/cart',
  PRODUCT = '/product',
  CHECKOUT = '/checkout',
}

export const ROUTES: IRoute[] = [
  { id: uuidv4(), name: 'Home', path: PATH.HOME, active: false },
  { id: uuidv4(), name: 'Cart', path: PATH.CART, active: false },
  { id: uuidv4(), name: 'Product', path: PATH.PRODUCT, active: false },
  { id: uuidv4(), name: 'Checkout', path: PATH.CHECKOUT, active: false },
];
