<?php
/**
 * @copyright Copyright (c) 2017, Afterlogic Corp.
 * @license AGPL-3.0 or AfterLogic Software License
 *
 * This code is licensed under AGPLv3 license or AfterLogic Software License
 * if commercial version of the product was purchased.
 * For full statements of the licenses see LICENSE-AFTERLOGIC and LICENSE-AGPL3 files.
 */

namespace Aurora\Modules\OutlookSyncWebclient;

/**
 * @package Modules
 */
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
