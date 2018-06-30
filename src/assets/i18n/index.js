import EN from './en'
import ENGB from './en-gb';
import ENUS from './en-us';

// All supported locales
const locales = {
	'en': EN,
	'en-gb': ENGB,
	'en-us': ENUS
};

// Get locale from browser
const locale = navigator.language.toLocaleLowerCase();
const stringsJson = locales[locale] || EN;

export const getString = (key, options = {}) => {
	if (stringsJson.hasOwnProperty(key)) {
		// If options is not a empty object,
		// it means the key is looking for a dynamic string.
		// Below code adds support for creation of dynamic strings
		// TODO: should we take an action if <%=key=%> remains after execution of below code?
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
