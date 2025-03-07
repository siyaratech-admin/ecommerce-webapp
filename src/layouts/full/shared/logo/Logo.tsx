import { FC, useContext } from 'react';

import { Link } from 'react-router';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as LogoDark } from 'src/assets/images/logos/dark-logo.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as LogoDarkRTL } from 'src/assets/images/logos/dark-rtl-logo.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as LogoLight } from 'src/assets/images/logos/light-logo.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as LogoLightRTL } from 'src/assets/images/logos/light-logo-rtl.svg';
import { styled } from '@mui/material';
import config from 'src/context/config';
import { CustomizerContext } from 'src/context/CustomizerContext';


const Logo: FC = () => {
  const { isCollapse, isSidebarHover, activeDir, activeMode } = useContext(CustomizerContext);
  const TopbarHeight = config.topbarHeight;

  const LinkStyled = styled(Link)(() => ({
    height: TopbarHeight,
    width: isCollapse == "mini-sidebar" && !isSidebarHover ? '40px' : '180px',
    overflow: 'hidden',
    display: 'block',
  }));

  if (activeDir === 'ltr') {
    return (
      <LinkStyled to="/dashboards/ecommerce/" style={{
        display: 'flex',
        alignItems: 'center',
      }}>
        {activeMode === 'dark' ? (
          <h1>ShopSphere</h1>
        ) : (
          <h1>ShopSphere</h1>
        )}
      </LinkStyled>
    );
  }

  return (
    <LinkStyled to="/dashboards/ecommerce/" style={{
      display: 'flex',
      alignItems: 'center',
    }}>
      {activeMode === 'dark' ? (
          <h1>ShopSphere</h1>
        ) : (
          <h1>ShopSphere</h1>
      )}
    </LinkStyled>
  );
};

export default Logo;
