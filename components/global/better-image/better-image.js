import Image from 'next/image';

const shouldUseNextImage = false;

const BetterImage = (props) => {
  if (shouldUseNextImage) {
    return <Image {...props}/>;
  } else {
    return <img {...props}/>;
  }
};

export default BetterImage;
