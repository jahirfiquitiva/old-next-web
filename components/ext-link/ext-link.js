const ExtLink = ({ to, label, newTab = true }) => {
  return (
    <a href={to} target={newTab ? '_blank' : '_self'} rel={'noopener noreferrer'}>{label}</a>
  );
};

export default ExtLink;
