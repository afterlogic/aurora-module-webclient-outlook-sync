'use strict';

var
	_ = require('underscore'),
	
	Types = require('%PathToCoreWebclientModule%/js/utils/Types.js')
;

module.exports = {
	ServerModuleName: 'MobileSync',
	HashModuleName: 'outlooksync',
	
	PluginDownloadLink: '',
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
			this.PluginDownloadLink = Types.pString(oAppDataSection.PluginDownloadLink, this.PluginDownloadLink);
			this.PluginReadMoreLink = Types.pString(oAppDataSection.PluginReadMoreLink, this.PluginReadMoreLink);
		}
	}
};
