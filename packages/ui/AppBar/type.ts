export interface BreadcrumsType {
  name: string;
  toLink: string;
}

export interface AppBarProps {
  getNavigationBreadcrum: (path: string) => {
    pageName: string;
    crumbs: BreadcrumsType[];
  };
}
