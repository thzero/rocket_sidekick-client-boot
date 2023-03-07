import Vuei18nBaseBoot from '@thzero/library_client_vue3/boot/basei18n';

const resources = {};
const locales = ['en'];
const modules = import.meta.globEager('@/locales/*.json');
locales.forEach(locale => {
	resources[locale] = modules[`/src/locales/${locale}.json`];
});

export default class AppVuei18nBoot extends Vuei18nBaseBoot {
	_initMessages() {
		return resources;
	}
}
