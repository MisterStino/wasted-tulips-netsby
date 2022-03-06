import React, { useState, useEffect } from 'react';

import { ReactComponent as Logo } from '../../../assets/tulip.svg';
import { ReactComponent as Insta } from '../../../assets/instagram-logo.svg';
import { ReactComponent as FaceBook } from '../../../assets/facebook-logo.svg';
import { ReactComponent as Spotify } from '../../../assets/spotify.svg';


import { 
  HeaderContainer,
  OptionLink,
  OptionContainer,
  IconContainer,
  LogoContainer,
} from './header.styles';

const Header = () => {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    })
  })

  return (
  <HeaderContainer
    transBool={scroll}
  >
    {/* <OptionContainer>
      <LogoContainer to='/'>
        <Logo/>
      </LogoContainer>
      <OptionLink to='/'>
        MUSIC
      </OptionLink>
      <OptionLink to='/'>
        VIDEOS
      </OptionLink>
      <OptionLink to='/'>
        PHOTOS
      </OptionLink>
    </OptionContainer>
    <IconContainer>
      <OptionLink as='a' href='https://www.instagram.com/wasted.tulips/'>
        <Insta />
      </OptionLink>
      <OptionLink as='a' href='https://www.facebook.com/wastedtulips/'>
        <FaceBook />
      </OptionLink>
      <OptionLink as='a' href='https://open.spotify.com/artist/3OMDXePuUkau5khS7AX1uF'>
        <Spotify />
      </OptionLink>
    </IconContainer> */}
  </HeaderContainer>
)}

export default Header;