import { Network } from '@capacitor/network';

import LibraryClientUtility from '@thzero/library_client/utility/index';

import BaseBoot from '@thzero/library_client/boot/base';

export default class AppNetworkBoot extends BaseBoot {
	async execute(framework, router, store) {
		Network.addListener('networkStatusChange', status => {
			console.log('Network status changed', status);
			console.log('Network status changed', status);
			console.log('Network status changed', status);
			console.log('Network status changed', status);
			console.log('Network status changed', status);
			LibraryClientUtility.online = status.connected;
			console.log('Network status changed', LibraryClientUtility.online);
			store.online = status.connected;
		});

		const status = await Network.getStatus();
		console.log('Network status:', status);
		LibraryClientUtility.online = status.connected;
		store.online = status.connected;
	}
}
