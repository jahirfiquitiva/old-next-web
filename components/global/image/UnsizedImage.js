import Image from 'next/image';

const UnsizedImage = ({ allowNextComponent = false, ...props }) => {
  if (allowNextComponent) {
    return (<Image
      layout={'fill'}
      objectFit={'contain'}
      {...props}/>);
  }
  return (<img
    loading={'lazy'}
    decoding={'async'}
    {...props}/>);
};

export default UnsizedImage;
