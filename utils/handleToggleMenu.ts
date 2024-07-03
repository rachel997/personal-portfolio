export const handleToggleMenu = (
  isDesktop: boolean,
  isLink: boolean = false,
  setMenuVisibility: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  if (isLink && isDesktop) return;

  setMenuVisibility(prevState => !prevState);
};
