import EN from './en'
import ENGB from './en-gb';
import ENUS from './en-us';

const locales = {
	'en': EN,
	'en-gb': ENGB,
	'en-us': ENUS
};

const locale = navigator.language.toLocaleLowerCase();
const stringsJson = locales[locale];

export const getString = key => {
	if (stringsJson.hasOwnProperty(key)) {
		return stringsJson[key];
	}

	return `*** BROKEN STRING, key => ${key}`;
};
