class DASHBOARD {
  private root = '/profile';

  HOME = this.root;
  CART = `${this.root}/cart`;
  FAVORITES = `${this.root}/favorites`;
  ORDERS = `${this.root}/orders`;
}

export const DASHBOARD_PAGES = new DASHBOARD();
