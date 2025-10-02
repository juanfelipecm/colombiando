import { defaultLang, type Language } from './config';
import es from './locales/es.json';
import en from './locales/en.json';

const translations = {
  es,
  en,
} as const;

export function useTranslations(lang: Language = defaultLang) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: any = translations[lang];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key} for language: ${lang}`);
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };
}

export function getRouteFromUrl(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length > 1 && (parts[0] === 'es' || parts[0] === 'en')) {
    return parts.slice(1).join('/') || 'home';
  }
  return parts.join('/') || 'home';
}

