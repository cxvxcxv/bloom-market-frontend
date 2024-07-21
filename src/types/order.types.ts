enum EnumOrderStatus {
  PENDING,
  PAYED,
  SHIPPED,
  DELIVERED,
  CANCELED,
}

export interface IOrder {
  id: string;
  createdAt: string;
  status: EnumOrderStatus;
  totalPrice: number;
  items: IOrderItem[];
}

export interface IOrderItem {
  id: string;
  createdAt: string;
  quantity: number;
  price: number;
  orderId: string;
  productId: string;
}

export interface IOrderForm {
  totalPrice: number;
  items: Partial<Omit<IOrderItem, 'id' | 'createdAt'>>[];
}
