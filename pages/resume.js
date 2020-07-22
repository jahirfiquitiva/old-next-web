import GoTo from '@components/global/goto/goto';

const Resume = ({ url, title, ...props }) => {
  return (<GoTo title={title} url={url}/>);
};

export default Resume;

export const getStaticProps = async () => {
  return {
    props: {
      title: 'Jahir Fiquitiva\'s Resume',
      url: '/share/Jahir-Fiquitiva-Resume.pdf',
    },
  };
};
