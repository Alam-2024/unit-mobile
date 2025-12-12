interface TabItems {
  name: string;
  label: string;
  icon: string;
}

export interface IRoute {
  key: string;
  name: string;
}
export const TAB_ITEMS: TabItems[] = [
  { name: "index", label: "Early Learning", icon: "odnoklassniki" },
  { name: "two", label: "Elementary", icon: "weibo" },
  { name: "center", label: "Center", icon: "home" },
  { name: "third", label: "Middle School", icon: "graduation-cap" },
  { name: "profile", label: "Profile", icon: "user" },
];
