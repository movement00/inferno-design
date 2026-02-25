import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      className="lang-switcher"
      onClick={toggleLanguage}
      aria-label={`Switch to ${currentLang === 'tr' ? 'English' : 'Türkçe'}`}
    >
      {currentLang === 'tr' ? 'EN' : 'TR'}
    </button>
  );
}
