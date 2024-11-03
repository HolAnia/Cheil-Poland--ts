import React from 'react';
import { 
  Wrapper, 
  BannerText 
} from './headerStyles';
import content from '../../data/content.json';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <BannerText>{content.title}</BannerText>
    </Wrapper>
  );
};

export default Header;
