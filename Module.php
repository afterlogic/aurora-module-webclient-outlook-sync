<?php

namespace Aurora\Modules\OutlookSyncWebclient;

class Module extends \Aurora\System\Module\AbstractWebclientModule
{
	/***** public functions might be called with web API *****/
	/**
	 * Obtains list of module settings for authenticated user.
	 * 
	 * @return array
	 */
	public function GetSettings()
	{
		\Aurora\System\Api::checkUserRoleIsAtLeast(\EUserRole::Anonymous);
		
		return array(
			'Plugin32DownloadLink' => '', // AppData.Links.OutlookSyncPlugin32
			'Plugin64DownloadLink' => '', // AppData.Links.OutlookSyncPlugin64
			'PluginReadMoreLink' => '' // AppData.Links.OutlookSyncPluginReadMore
		);
	}
	/***** public functions might be called with web API *****/
}