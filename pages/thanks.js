import GoTo from '@components/global/goto/goto';

const Thanks = ({ url, title, ...props }) => {
  return (<GoTo title={title} url={url}/>);
};

export default Thanks;

export const getStaticProps = async () => {
  return {
    props: {
      title: 'donation site',
      url: '/donate#thanks',
    },
  };
};
