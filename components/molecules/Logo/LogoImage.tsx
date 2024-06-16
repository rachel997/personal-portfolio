import Image from 'next/image';

import logo from '@images/logo.svg';

const LogoImage = () => {
  return (
    <Image
      src={logo}
      width={156}
      height={50}
      alt="Rachela Markwica - Portfolio"
    />
  );
};

export default LogoImage;
