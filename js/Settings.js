'use strict';

var
	_ = require('underscore'),
	
	Types = require('%PathToCoreWebclientModule%/js/utils/Types.js')
;

module.exports = {
	ServerModuleName: 'OutlookSync',
	HashModuleName: 'outlooksync',
	
	Plugin32DownloadLink: '',
	Plugin64DownloadLink: '',
	PluginReadMoreLink: '',
	
	/**
	 * Initializes settings from AppData object sections.
	 * 
	 * @param {Object} oAppData Object contained modules settings.
	 */
	init: function (oAppData)
	{
		var oAppDataSection = oAppData['%ModuleName%'];
		
		if (!_.isEmpty(oAppDataSection))
		{
			this.Plugin32DownloadLink = Types.pString(oAppDataSection.Plugin32DownloadLink, this.Plugin32DownloadLink);
			this.Plugin64DownloadLink = Types.pString(oAppDataSection.Plugin64DownloadLink, this.Plugin64DownloadLink);
			this.PluginReadMoreLink = Types.pString(oAppDataSection.PluginReadMoreLink, this.PluginReadMoreLink);
		}
	}
};
