// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../assets/locales/en.json';
import tw from '../assets/locales/zh-TW.json';

const resources = {
  en: {
    translation: en,
  },
  'zh-TW': {
    translation: tw,
  },
};

  i18n
    .use(initReactI18next).init({
    resources,
    lng: navigator.language,             //預設語言
    fallbackLng: 'zh-TW',     //如果當前切換的語言沒有對應的翻譯則使用這個語言，
    interpolation: {
        escapeValue: false, // 因為 React 會自動 escape 所以這裡不需要
    },
  });

export default i18n;