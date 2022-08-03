// ---------- Books -----------
// OpenLibAPI
// часть  IBookPageData  IBook
export interface IAuthor {
  key: string; // /authors/OL10968A
  name: string;
}

// OpenLibAPI
// часть IBookPageData
export interface IBook {
  key: string;
  title: string;
  cover_id: number;
  authors: IAuthor[];
}

// OpenLibAPI
// URL  https://openlibrary.org/subjects/arts.json?limit=30&offset=2
export interface IBookPageData {
  key: string; //адрес после   openlibrary.org
  name: string; // название темы
  work_count: number;
  works: IBook[];
}
// ---------- ___ -----------
