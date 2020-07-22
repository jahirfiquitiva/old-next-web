import GoTo from '@components/global/goto/goto';

const Support = ({ url, title, ...props }) => {
  return (<GoTo title={title} url={url}/>);
};

export default Support;

export const getStaticProps = async () => {
  return {
    props: {
      title: 'donation site',
      url: '/donate',
    },
  };
};
