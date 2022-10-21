import { motion } from 'framer-motion';
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from '@heroicons/react/24/outline';
import Logo from '../logo/Logo';

interface Props {}

import {
  MainContainer,
  InsideContainer,
  LogoText,
  LinkText,
  IconContainer,
  RelativeContainer,
  AbsoluteContainer,
  StyledButton,
  HeaderSpan,
} from './Styles';

const TopNavigation = ({
  handleNavigationMenuClick,
  navigationMenuToggle,
}: {
  handleNavigationMenuClick: Function;
  navigationMenuToggle: boolean;
}) => {
  return (
    <MainContainer>
      <InsideContainer>
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center"
        >
          <Logo />
        </motion.div>
      </InsideContainer>
    </MainContainer>
  );
};

export default TopNavigation;
