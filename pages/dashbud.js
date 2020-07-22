import GoTo from '@components/global/goto/goto';

const Dashbud = ({ url, title, ...props }) => {
  return (<GoTo title={title} url={url}/>);
};

export default Dashbud;

export const getStaticProps = async () => {
  return {
    props: {
      title: 'Dashbud site',
      url: 'https://dashbud.dev',
    },
  };
};
