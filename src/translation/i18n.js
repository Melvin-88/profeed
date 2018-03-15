/**
 * Created by Tanya on 14.05.2017.
 */
/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import ukLocaleData from 'react-intl/locale-data/uk';

import { DEFAULT_LOCALE } from 'helpers/constants';

import enTranslationMessages from './en.json';
import ukTranslationMessages from './uk.json';

addLocaleData(enLocaleData);
addLocaleData(ukLocaleData);

export const appLocales = [
  'en',
  'uk'
];

export function formatTranslationMessages(locale, messages) {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE
    ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
    : {};

  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE
      ? defaultFormattedMessages[key]
      : messages[key];

    return Object.assign(formattedMessages, { [key]: formattedMessage });
  }, {});
}

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  uk: formatTranslationMessages('uk', ukTranslationMessages)
};
