//  interface for homeProps in Home Pge

export interface HomeProps {
  params: { slug: string };
  searchParams: { [key: string]: string | undefined };
}

//  interface for PostItems in CardList component
export interface PostItem {
  _id: string;
  slug: string;
  catSlug: string;
  cat: string;
  userEmail: string;
  user: string;
  comments: [];
  img?: string;
  title: string;
  desc: string;
  createdAt: string;
  views: number;
}

// interface for comments
export interface CommentItemProps {
  _id: string;
  createdAt: string;
  desc: string;
  userEmail: string;
  postSlug: string;
  user: {
    id: string;
    name: string;
    email: string;
    emailVerified: string | null;
    image: string;
    role: string;
  };
  // Add other properties as needed
}

// interface for CardListProps in CardList Componenet

export interface CardListProps {
  page: number;
  cat?: string;
}

// interface for the button component

export interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}

// interface for navlinks in Navbar

export interface NavLinksProps {
  className?: string;
  href: string;
  children: React.ReactNode;
  dropdownItems?: string[];
}

// interface for mobile navlinks
export interface NavMobileLinksProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

// interface for article component
export interface ArticleProps {
  title: string;
  coverImage: string;
  description: string;
}

// interface for TutorialColumn
export interface column {
  bgColor: string;
  title: string;
  items: string[];
}
