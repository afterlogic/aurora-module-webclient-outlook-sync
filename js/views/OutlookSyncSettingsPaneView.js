'use strict';

var
	ko = require('knockout'),
	
	TextUtils = require('%PathToCoreWebclientModule%/js/utils/Text.js'),
	
	Ajax = require('%PathToCoreWebclientModule%/js/Ajax.js'),
	Api = require('%PathToCoreWebclientModule%/js/Api.js'),
	App = require('%PathToCoreWebclientModule%/js/App.js'),
	ModulesManager = require('%PathToCoreWebclientModule%/js/ModulesManager.js'),
	UserSettings = require('%PathToCoreWebclientModule%/js/Settings.js'),
	
	Settings = require('modules/%ModuleName%/js/Settings.js')
;

/**
 * @constructor
 */
function COutlookSyncSettingsPaneView()
{
	this.oCreateLoginPasswordView = ModulesManager.run('OAuthIntegratorWebclient', 'getCreateLoginPasswordView');
	
	this.server = ko.observable('');
	
	this.bDemo = UserSettings.IsDemo;

	this.sPlugin32DownloadLink = Settings.Plugin32DownloadLink;
	this.sPlugin64DownloadLink = Settings.Plugin64DownloadLink;
	this.sPluginReadMoreLink = Settings.PluginReadMoreLink;

	this.credentialsHintText = ko.computed(function () {
		return TextUtils.i18n('COREWEBCLIENT/INFO_MOBILE_CREDENTIALS', {'LOGIN': App.userAccountLogin()});
	}, this);
	this.credentialsHintText.subscribe(function () {
		console.log('- App.userAccountLogin()', App.userAccountLogin());
		console.log('- this.credentialsHintText', this.credentialsHintText());
	}, this);
}

COutlookSyncSettingsPaneView.prototype.ViewTemplate = '%ModuleName%_OutlookSyncSettingsPaneView';

COutlookSyncSettingsPaneView.prototype.onRoute = function ()
{
	Ajax.send(Settings.ServerModuleName, 'GetInfo', this.onGetInfoResponse, this);
};

/**
 * @param {Object} oResponse
 * @param {Object} oRequest
 */
COutlookSyncSettingsPaneView.prototype.onGetInfoResponse = function (oResponse, oRequest)
{
	var oResult = oResponse.Result;
	
	if (!oResult)
	{
		Api.showErrorByCode(oResponse);
	}
	else
	{
		this.server(oResult.Server);
	}
};

module.exports = new COutlookSyncSettingsPaneView();
