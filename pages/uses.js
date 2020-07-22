import GoTo from '@components/global/goto/goto';

const Uses = ({ url, title, ...props }) => {
  return (<GoTo title={title} url={url}/>);
};

export default Uses;

export const getStaticProps = async () => {
  return {
    props: {
      title: 'Uses blog post',
      url: '#',
    },
  };
};
