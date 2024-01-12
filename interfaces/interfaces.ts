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
