import AppConstants from '@/constants';

import apiService from '@/service/api';
import authService from '@thzero/library_client_firebase/service';
import downloadService from '@/service/download';
import rocketsService from '@/service/rockets';
import flightInfoProcessorToolsService from '@/service/tools/flightInfo/index';
import flightInfoProcessorEggtimerToolsService from '@/service/tools/flightInfo/processors/eggtimer';
import flightPathOutputToolsService from '@/service/tools/flightPath/output/index';
import flightPathOutputKmlToolsService from '@/service/tools/flightPath/output/kml';
import flightPathOutputTemplateToolsService from '@/service/tools/flightPath/output/template/index';
import flightPathOutputTemplateHandlebarsToolsService from '@/service/tools/flightPath/output/template/handlebars';
import flightPathProcessorToolsService from '@/service/tools/flightPath/index';
import flightPathProcessorFeatherweightToolsService from '@/service/tools/flightPath/processors/featherweight';
import foamToolsService from '@/service/tools/foam';
import mathJsCalculationEngineToolsService from '@/service/tools/engine/mathjs/index';
import parachuteSizingToolsService from '@/service/tools/parachuteSizing';
import restCommunicationService from '@thzero/library_client_service_rest_fetch';
import thrust2WeightToolsService from '@/service/tools/thrust2Weight';
import weatherCockingToolsService from '@/service/tools/weathercocking';
import thrustCurveMotorSearchExternalService from '@/service/external/motorSearchThrustCurve';
import settingsService from '@/service/settings';
import storeService from '@thzero/library_client_vue3_store_pinia/service/store/index'; // STORE TYPE
// import storeService from '@thzero/library_client_vue3/service/store/vuex'; // STORE TYPE
import userService from '@/service/user';
import utilityService from '@/service/utility';
import versionService from '@/service/version';

import AdminServicesBaseBoot from '@thzero/library_client_vue3/boot/baseAdminServices';

class AppServiceBoot extends AdminServicesBaseBoot {
	_initialize() {
		super._initialize();

		this._injectService(AppConstants.InjectorKeys.SERVICE_API, new apiService());
		this._injectService(AppConstants.InjectorKeys.SERVICE_DOWNLOAD, new downloadService());

		this._injectService(AppConstants.InjectorKeys.SERVICE_EXTERNAL_MOTOR_SEARCH, new thrustCurveMotorSearchExternalService());

		this._injectService(AppConstants.InjectorKeys.SERVICE_ROCKETS, new rocketsService());

		this._injectService(AppConstants.InjectorKeys.SERVICE_TOOLS_CALCULATION_ENGINE, new mathJsCalculationEngineToolsService());
		this._injectService(AppConstants.InjectorKeys.SERVICE_TOOLS_FOAM, new foamToolsService());

		this._injectService(AppConstants.InjectorKeys.SERVICE_TOOLS_FLIGHT_INFO_PROCESSOR, new flightInfoProcessorToolsService());
		this._injectService(AppConstants.InjectorKeys.SERVICE_TOOLS_FLIGHT_INFO_PROCESSOR_EGGTIMER, new flightInfoProcessorEggtimerToolsService());
		this._injectService(AppConstants.InjectorKeys.SERVICE_TOOLS_FLIGHT_PATH_OUTPUT, new flightPathOutputToolsService());
		this._injectService(AppConstants.InjectorKeys.SERVICE_TOOLS_FLIGHT_PATH_OUTPUT_KML, new flightPathOutputKmlToolsService());
		this._injectService(AppConstants.InjectorKeys.SERVICE_TOOLS_FLIGHT_PATH_OUTPUT_TEMPLATE, new flightPathOutputTemplateToolsService());
		this._injectService(AppConstants.InjectorKeys.SERVICE_TOOLS_FLIGHT_PATH_OUTPUT_TEMPLATE_HANDLEBARS, new flightPathOutputTemplateHandlebarsToolsService());
		this._injectService(AppConstants.InjectorKeys.SERVICE_TOOLS_FLIGHT_PATH_PROCESSOR, new flightPathProcessorToolsService());
		this._injectService(AppConstants.InjectorKeys.SERVICE_TOOLS_FLIGHT_PATH_PROCESSOR_FEATHERWEIGHT, new flightPathProcessorFeatherweightToolsService());

		this._injectService(AppConstants.InjectorKeys.SERVICE_TOOLS_PARACHUTE_SIZING, new parachuteSizingToolsService());
		this._injectService(AppConstants.InjectorKeys.SERVICE_TOOLS_THRUST2WEIGHT, new thrust2WeightToolsService());
		this._injectService(AppConstants.InjectorKeys.SERVICE_TOOLS_WEATHERCOCKING, new weatherCockingToolsService());
	}

	_initializeAuth() {
		return new authService();
	}

	_initializeCommunicationRest() {
		return new restCommunicationService();
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

export default AppServiceBoot;
