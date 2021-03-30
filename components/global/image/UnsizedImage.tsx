import Image from 'next/image';

import styles from './unsized-image.module.css';
import { FC } from 'react';

interface UnsizedImageProps {
  src: string;
  alt: string;
  h?: string;
  className?: string;
  allowNextComponent?: boolean;
}

const UnsizedImage: FC<UnsizedImageProps> = (props) => {
  const { allowNextComponent = false, h, ...rest } = props;
  if (allowNextComponent) {
    return (<div className={styles.unsizedImageWrapper}
                 style={{ minHeight: h || '96px' }}>
      <Image
        // @ts-ignore
        layout={'fill'}
        objectFit={'contain'}
        {...rest}/>
    </div>);
  }
  return (<img
    loading={'lazy'}
    decoding={'async'}
    {...rest}/>);
};

export default UnsizedImage;
