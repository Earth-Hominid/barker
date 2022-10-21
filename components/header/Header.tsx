import { useState } from 'react';
import TopNavigation from './top-navigation/TopNavigation';
import BottomNavigation from './bottom-navigation/BottomNavigation';

interface Props {}

const Header: React.FC<Props> = () => {
  const [navigationMenuToggle, setNavigationMenuToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigationButton = () => {
    if (navigationMenuToggle) {
      setNavigationMenuToggle(false);
      setIsOpen(navigationMenuToggle);
    } else {
      setNavigationMenuToggle(true);
      setIsOpen(navigationMenuToggle);
    }
  };

  const handleNavigationMenuClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    toggleNavigationButton();
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <TopNavigation
        handleNavigationMenuClick={handleNavigationMenuClick}
        navigationMenuToggle={navigationMenuToggle}
      />
      {navigationMenuToggle ? (
        <BottomNavigation toggleNavigationButton={toggleNavigationButton} />
      ) : (
        ''
      )}
    </>
  );
};

export default Header;
