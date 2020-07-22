import GoTo from '@components/global/goto/goto';

const DashSetup = ({ url, title, ...props }) => {
  return (<GoTo title={title} url={url}/>);
};

export default DashSetup;

export const getStaticProps = async () => {
  return {
    props: {
      title: 'Dashbud site',
      url: 'https://dashbud.dev',
    },
  };
};
