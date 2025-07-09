import { Product } from "@/lib/products";

type CartItem = {
  product: Product;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  getTotalCount: () => number;
};

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addToCart: (product, quantity) => {
    set((state) => {
      const existing = state.items.find((item) => item.product.slug === product.slug);
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.product.slug === product.slug
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      }
      return { items: [...state.items, { product, quantity }] };
    });
  },
  getTotalCount: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
})); 