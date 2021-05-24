import I18n from 'react-native-i18n';
import en from './locales/en';
import ja from './locales/ja';

I18n.defaultLocale = 'en';
I18n.locale = 'en';
I18n.fallbacks = true;

I18n.translations = {
  en,
  ja,
};

export default I18n;
