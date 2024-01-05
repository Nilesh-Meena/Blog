// interface for the button component

export interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}

// interface for navlinks

export interface NavLinksProps {
  className?: string;
  href: string;
  children: React.ReactNode;
}

// interface for mobile navlinks
export interface NavMobileLinksProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  toggle: () => void;
}

// interface for article component
export interface ArticleProps {
  title: string;
  coverImage: string;
  description: string;
}
