import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith('en') ? 'en' : 'tr';

  const switchTo = (lang) => {
    if (lang !== currentLang) {
      i18n.changeLanguage(lang);
    }
  };

  return (
    <div className="lang-switcher" role="radiogroup" aria-label="Dil seçimi">
      <button
        className={`lang-option ${currentLang === 'tr' ? 'active' : ''}`}
        onClick={() => switchTo('tr')}
        aria-checked={currentLang === 'tr'}
        role="radio"
      >
        TR
      </button>
      <button
        className={`lang-option ${currentLang === 'en' ? 'active' : ''}`}
        onClick={() => switchTo('en')}
        aria-checked={currentLang === 'en'}
        role="radio"
      >
        EN
      </button>
    </div>
  );
}
