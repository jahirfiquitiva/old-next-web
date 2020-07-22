import GoTo from '@components/global/goto/goto';

const Monitorias = ({ url, title, ...props }) => {
  return (<GoTo title={title} url={url}/>);
};

export default Monitorias;

export const getStaticProps = async () => {
  return {
    props: {
      title: 'info de monitorias',
      url: 'https://www.notion.so/jahirfiquitiva/Monitoria-Programaci-n-Avanzada-29407a1943f143b2b014e27555c1824e',
    },
  };
};
