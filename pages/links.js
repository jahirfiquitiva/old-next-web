import GoTo from '@components/global/goto/goto';

const Links = ({ url, title, ...props }) => {
  return (<GoTo title={title} url={url}/>);
};

export default Links;

export const getStaticProps = async () => {
  return {
    props: {
      title: 'home site',
      url: '/',
    },
  };
};
