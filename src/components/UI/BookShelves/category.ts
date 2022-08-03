export interface categoryProps {
  title: string;
  searchParams: string;
}

export const сategories: categoryProps[] = [
  { title: "Искусство", searchParams: "arts" },
  { title: "Животные", searchParams: "animals" },
  { title: "Художественная литература", searchParams: "fiction" },
  { title: "Наука и математика", searchParams: "science&mathematics" },
  { title: "Бизнес-литература", searchParams: "business" },
  { title: "Детская литература", searchParams: "children" },
  { title: "История", searchParams: "history" },
  { title: "Здоровье", searchParams: "health" },
  { title: "Биографии", searchParams: "biography" },
  { title: "Социальные науки", searchParams: "social%20sciences" },
  { title: "Страны и города", searchParams: "places" },
  { title: "Лингвистика", searchParams: "language" },
];
