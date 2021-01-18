export interface ExtLinkProps {
  to: string,
  label: string,
  title?: string,
  newTab?: boolean
}

const ExtLink = ({ to, label, title, newTab = true }: ExtLinkProps) => {
  return (
    <a
      title={title || `${label} link`} aria-label={title || `${label} link`}
      href={to} target={newTab ? '_blank' : '_self'}
      rel={'noopener noreferrer'}>{label}</a>
  );
};

export default ExtLink;
