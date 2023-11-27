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
}

export const ROUTES: IRoute[] = [
  { id: uuidv4(), name: 'Home', path: PATH.HOME, active: false },
  { id: uuidv4(), name: 'Cart', path: PATH.CART, active: false },
];
