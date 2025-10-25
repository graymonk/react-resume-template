import {Language} from '../contexts/LanguageContext';
import * as dataEn from './data.en';
import * as dataZh from './data.zh';

export const getData = (language: Language) => {
  return language === 'zh' ? dataZh : dataEn;
};

// Re-export SectionId (exports both value and type automatically)
export {SectionId} from './data.en';
