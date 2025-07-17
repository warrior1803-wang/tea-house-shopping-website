export type Product = {
  name: string;
  slug: string;
  image: string;
  price: number;
  rating: number;
  currency: string;
  description?: string;
  ingredients?: string;
};

export const products: Product[] = [
  {
    name: "Kirin Lemon Tea",
    slug: "kirin-lemon-tea",
    image: "/40.png",
    price: 2.5,
    rating: 5.0,
    currency: "EUR",
    description: "A refreshing lemon tea from Kirin.",
    ingredients: "Water, Lemon, Tea, Sugar, etc.",
  },
  {
    name: "Lemon Slice Ade",
    slug: "lemon-slice-ade",
    image: "/47.png",
    price: 2.4,
    rating: 5.0,
    currency: "EUR",
    description:
      "A real lemon slice inside. Refreshing lemonade with vitamin C. Vertically opening full-tap to fully enjoy fresh flavor and taste.",
    ingredients:
      "Purified Water, Erythritol (sweetener), Lemon Slice 2.85% (lemon content 100%, from Korea), Lemon Concentrate 0.54%, Vitamin C, Citric Acid, Sodium Citrate, Natural Flavor, Sucralose (sweetener), Stevia Extract, Beta-Carotene (color), Ascorbyl Palmitate (antioxidant)",
  },
  {
    name: "Kirin Namacha",
    slug: "kirin-namacha",
    image: "/35.png",
    price: 2.4,
    rating: 5.0,
    currency: "EUR",
    description: "Authentic Japanese green tea from Kirin.",
    ingredients: "Water, Green Tea, etc.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
