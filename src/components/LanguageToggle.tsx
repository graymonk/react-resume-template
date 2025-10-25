import {LanguageIcon} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import {Language, useLanguage} from '../contexts/LanguageContext';

const LanguageToggle: FC = memo(() => {
  const {language, setLanguage} = useLanguage();

  const toggleLanguage = () => {
    const newLang: Language = language === 'en' ? 'zh' : 'en';
    setLanguage(newLang);
  };

  return (
    <button
      aria-label="Toggle language"
      className="fixed right-4 top-20 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg transition-all hover:bg-orange-600 hover:shadow-xl sm:right-8 sm:top-4"
      onClick={toggleLanguage}
      type="button">
      <LanguageIcon className="h-6 w-6" />
      <span className="ml-1 text-xs font-semibold">{language === 'en' ? '中' : 'EN'}</span>
    </button>
  );
});

LanguageToggle.displayName = 'LanguageToggle';

export default LanguageToggle;

