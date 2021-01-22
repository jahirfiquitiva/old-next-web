import useTranslation from 'next-translate/useTranslation';

export interface ExtLinkProps {
  to: string,
  label: string,
  title?: string,
  newTab?: boolean
}

const ExtLink = ({ to, label, title, newTab = true }: ExtLinkProps) => {
  const { t } = useTranslation();
  const defaultTitle = t('common:social-link', { site: label });
  return (
    <a
      title={title || defaultTitle} aria-label={title || defaultTitle}
      href={to} target={newTab ? '_blank' : '_self'}
      rel={'noopener noreferrer'}>{label}</a>
  );
};

export default ExtLink;
