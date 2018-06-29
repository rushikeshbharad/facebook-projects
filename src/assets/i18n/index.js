import EN from './en'
import ENGB from './en-gb';
import ENUS from './en-us';

const locales = {
	'en': EN,
	'en-gb': ENGB,
	'en-us': ENUS
};

const locale = navigator.language.toLocaleLowerCase();
const stringsJson = locales[locale] || EN;

export const getString = (key, options = {}) => {
	if (stringsJson.hasOwnProperty(key)) {
		if (Object.keys(options).length) {
			const string = stringsJson[key];
			return Object.keys(options).reduce((acc, key) => {
				return acc.replace(`<%=${key}=%>`, options[key])
			}, string);
		}
		return stringsJson[key];
	}

	return `*** BROKEN STRING, key => ${key}`;
};
