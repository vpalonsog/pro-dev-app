import back_es from './es/back.json';
import front_es from './es/front.json';

export const resources = {
  es: {
    allTranslations: { ...front_es, ...back_es }
  }
};
