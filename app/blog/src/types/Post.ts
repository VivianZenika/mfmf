export interface Post {
  id: number;
  title: string;
  href: string;
  description: string;
  imageUrl: string;
  date: string;
  datetime: string;
  category: Category;
  author: Author;
}

interface Category {
  title: string;
  href: string;
}

interface Author {
  name: string;
  role: string;
  href: string;
  imageUrl: string;
}
