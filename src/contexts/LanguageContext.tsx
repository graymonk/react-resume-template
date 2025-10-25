import React, {createContext, FC, memo, PropsWithChildren, useCallback, useContext, useMemo, useState} from 'react';

export type Language = 'en' | 'zh';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: FC<PropsWithChildren> = memo(({children}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Try to get language from localStorage, default to 'en'
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language') as Language;
      return savedLang || 'en';
    }
    return 'en';
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  }, []);

  const value = useMemo(() => ({language, setLanguage}), [language, setLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
});

LanguageProvider.displayName = 'LanguageProvider';

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

