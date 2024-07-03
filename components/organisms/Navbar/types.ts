export type SetMenuVisibility = React.Dispatch<React.SetStateAction<boolean>>;

export type NavLinkProps = {
  label: string;
  href: string;
  setMenuVisibility: SetMenuVisibility;
};

export type NavbarProps = {
  setMenuVisibility: SetMenuVisibility;
};
