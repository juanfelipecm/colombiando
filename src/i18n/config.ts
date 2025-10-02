export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'es';

export const ui = {
  es: 'es',
  en: 'en',
} as const;

// Route name mappings for different languages
export const routes = {
  es: {
    'nosotras': 'nosotras',
    'proyectos': 'proyectos',
    'sumate': 'sumate',
    'documentos': 'documentos',
  },
  en: {
    'nosotras': 'about-us',
    'proyectos': 'projects',
    'sumate': 'join-us',
    'documentos': 'documents',
  },
} as const;

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Language;
  return defaultLang;
}

export function useTranslatedPath(lang: Language) {
  return function translatePath(path: string, targetLang: string = lang) {
    const pathParts = path.split('/').filter(Boolean);
    const [currentLang, ...rest] = pathParts;
    
    // If the first part is a language code, remove it
    if (currentLang in languages) {
      rest.shift();
    }
    
    return `/${targetLang}/${rest.join('/')}`;
  };
}

