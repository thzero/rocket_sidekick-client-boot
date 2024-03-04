import AppSharedConstants from '@/utility/constants';

import NotImplementedError from '@thzero/library_common/errors/notImplemented';

import apiService from '@/service/api';
import authService from '@thzero/library_client_firebase/service';
import featuresService from '@/service/features';
import inventoryService from '@/service/inventory';
import mathJsCalculationEngineToolsService from '@/service/tools/engine/mathjs/index';
import motorService from '@/service/partsMotors';
import parachuteSizingToolsService from '@/service/tools/parachuteSizing';
import restCommunicationService from '@thzero/library_client_service_rest_fetch';
import thrust2WeightToolsService from '@/service/tools/thrust2Weight';
// import thrustCurveMotorsService from '@/service/external/motorSearchThrustCurve';
import weatherCockingToolsService from '@/service/tools/weathercocking';
import securityService from '@/service/security';
import settingsService from '@/service/settings';
import storeService from '@thzero/library_client_vue3_store_pinia/service/store/index'; // STORE TYPE
// import storeService from '@thzero/library_client_vue3/service/store/vuex'; // STORE TYPE
import userService from '@/service/user';
import utilityService from '@/service/utility';
import versionService from '@/service/version';

import RootServicesBoot from '@thzero/library_client_vue3/boot/rootServices';

class ServiceBoot extends RootServicesBoot {
	_initialize() {
		super._initialize();

		this._injectService(AppSharedConstants.InjectorKeys.SERVICE_API, new apiService());

		this._injectService(AppSharedConstants.InjectorKeys.SERVICE_CHECKLISTS, this._initializeChecklists());

		this._injectService(AppSharedConstants.InjectorKeys.SERVICE_COUNTRIES, this._initializeCountries());

		this._injectService(AppSharedConstants.InjectorKeys.SERVICE_MOTORS, new motorService());
		// this._injectService(AppSharedConstants.InjectorKeys.SERVICE_MOTORS, new thrustCurveMotorsService());

		this._injectService(AppSharedConstants.InjectorKeys.SERVICE_INVENTORY, new inventoryService());
		this._injectService(AppSharedConstants.InjectorKeys.SERVICE_LAUNCHES, this._initializeLaunches());
		this._injectService(AppSharedConstants.InjectorKeys.SERVICE_LOCATIONS, this._initializeLocations());
		this._injectService(AppSharedConstants.InjectorKeys.SERVICE_MANUFACTURERS, this._initializeManufacturers());
		this._injectService(AppSharedConstants.InjectorKeys.SERVICE_PARTS, this._initializeParts());
		this._injectService(AppSharedConstants.InjectorKeys.SERVICE_ROCKETS, this._initializeRockets());
		this._injectService(AppSharedConstants.InjectorKeys.SERVICE_ROCKETSETUPS, this._initializeRocketSetups());

		this._injectService(AppSharedConstants.InjectorKeys.SERVICE_TOOLS_CALCULATION_ENGINE, new mathJsCalculationEngineToolsService());
		this._injectService(AppSharedConstants.InjectorKeys.SERVICE_TOOLS_PARACHUTE_SIZING, new parachuteSizingToolsService());
		this._injectService(AppSharedConstants.InjectorKeys.SERVICE_TOOLS_THRUST2WEIGHT, new thrust2WeightToolsService());
		this._injectService(AppSharedConstants.InjectorKeys.SERVICE_TOOLS_WEATHERCOCKING, new weatherCockingToolsService());
	}

	_initializeAuth() {
		return new authService();
	}

	_initializeChecklists() {
		throw new NotImplementedError();
	}

	_initializeCommunicationRest() {
		return new restCommunicationService();
	}

	_initializeCountries() {
		throw new NotImplementedError();
	}

	_initializeFeatures() {
		return new featuresService();
	}

	_initializeLaunches() {
		throw new NotImplementedError();
	}

	_initializeLocations() {
		throw new NotImplementedError();
	}

	_initializeManufacturers() {
		throw new NotImplementedError();
	}

	_initializeParts() {
		throw new NotImplementedError();
	}

	_initializeRockets() {
		throw new NotImplementedError();
	}

	_initializeRocketSetups() {
		throw new NotImplementedError();
	}

	_initializeSecurity() {
		return new securityService();
	}

	_initializeSettings() {
		return new settingsService();
	}

	_initializeStore(injector) {
		return new storeService(injector);
	}

	_initializeUser() {
		return new userService();
	}

	_initializeUtility() {
		return new utilityService();
	}

	_initializeVersion() {
		return new versionService();
	}
}

export default ServiceBoot;
