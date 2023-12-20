import Vuei18nBaseBoot from '@thzero/library_client_vue3/boot/basei18n';

const resources = {};
const locales = ['en'];
// const modules = import.meta.globEager('@/locales/*.json');
const modules = import.meta.glob('@/locales/*.json' ,{ eager: true });
locales.forEach(locale => {
	resources[locale] = modules[`/src/locales/${locale}.json`];
});

export default class Vuei18nBoot extends Vuei18nBaseBoot {
	_initMessages() {
		return resources;
	}
}
