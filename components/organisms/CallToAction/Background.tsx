import Image from 'next/image';
import { BackgroundProps } from './types';

const Background = ({ image }: BackgroundProps) => {
  const { src, alt } = image || {};

  if (!src) return null;
  return (
    <>
      <Image
        src={src}
        className="absolute top-0 left-0 w-full h-full object-cover z-minus-1"
        alt={alt}
      />
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-r from-interface-400/60 to-interface-400 lg:from-interface-400/30 lg:to-interface-400"></div>
    </>
  );
};

export default Background;
