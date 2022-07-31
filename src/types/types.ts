// ---------- Books -----------
export interface IAuthor {
  name: string;
  birth_year: number;
}

export interface IFormats {
  ["image/jpeg"]: string;
  ["text/html"]: string;
}

export interface IBook {
  id: number;
  title: string;
  authors: IAuthor[];
  formats: IFormats;
}

export interface IBookPageData {
  count: number;
  next: string;
  previous: string;
  results: IBook[];
}
// ---------- ___ -----------
