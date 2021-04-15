import styles from './suggestions.module.css';
import Icon from '@mdi/react';
import { mdiLightbulbOnOutline } from '@mdi/js';
import { useEffect, useState } from 'react';
import { formium } from '@lib/formium';

const successText = 'Thanks for the suggestion!';
const errorText = 'Oops... something went wrong!';

interface SuggestionsProps {
  form?: { slug?: string; };
}

export const Suggestions = (props: SuggestionsProps) => {
  const formSlug = props?.form?.slug || 'contact-form';

  const [suggestion, setSuggestion] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState(
    { error: false, text: '' });

  const finishSubmission = (success: boolean) => {
    setSubmitting(false);
    setSuggestion('');
    setResultMessage(
      {
        text: `${success ? successText : errorText} ${success ? '😀' : '😨'}`,
        error: !success,
      });
  };

  const submitSuggestion = async () => {
    setResultMessage({ text: '', error: false });
    setSubmitting(true);
    await formium.submitForm(formSlug, { suggestion })
      .then((data?: any) => {
        finishSubmission(data && data.ok);
      })
      .catch((e: any) => {
        finishSubmission(false);
      });
  };

  useEffect(() => {
    if (!resultMessage.text.length) return;
    setTimeout(() => {
      setResultMessage({ text: '', error: false });
    }, 4000);
  }, [resultMessage]);

  return (<div className={styles.suggestions}>
    <div className={styles.content}>
      <div className={styles.texts}>
        <p>
          I&apos;m honestly not the kind of person who blogs much, but I&apos;d
          like
          to do it more frequently.
        </p>
        <p>
          Feel free to share ideas or topics for me to blog about. I&apos;d
          really appreciate it!  🙌
        </p>
      </div>
      <div className={[styles.result,
        resultMessage.error ? styles.error : styles.ok,
        (resultMessage.text.length > 0) ? styles.visible : ''].join(' ')}>
        <p>{resultMessage.text}</p>
      </div>
      <form>
        <textarea
          disabled={submitting}
          placeholder={'What should I blog about next?'}
          value={suggestion}
          onChange={(e) => { setSuggestion(e.target.value); }}/>
        <button
          type={'button'}
          onClick={(e) => {
            e.preventDefault();
            submitSuggestion().catch();
          }}
          disabled={suggestion.length <= 0 || submitting}>
          <Icon path={mdiLightbulbOnOutline} size={0.9}/>
          Submit
        </button>
      </form>
    </div>
  </div>);
};
