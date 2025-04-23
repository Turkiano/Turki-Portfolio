import { useTranslation } from 'react-i18next';

export function MultiLang() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t('greeting')}</h1>
      <button onClick={() => i18n.changeLanguage('ar')}>Arabic</button>
      <button onClick={() => i18n.changeLanguage('en')}>English</button>
    </div>
  );
}
