type SizesTypes = "small" | "regular";

export type Sizes = {
  [key in SizesTypes]: {
    size: number;
    strokeWidth: number;
    fontSize: number;
    padding?: number;
  };
};

export const sizes: Sizes = {
  small: {
    size: 79,
    strokeWidth: 5,
    fontSize: 36,
  },
  regular: {
    size: 295,
    strokeWidth: 10,
    fontSize: 120,
    padding: 6,
  },
};

export const colors = [
  { percent: 0, color: "#AC2020", name: "Зона риска" },
  { percent: 54, color: "#D38235", name: "Нейтральная зона" },
  { percent: 74, color: "#654EA3", name: "Зона результативности" },
];
