<?php
/**
 * This code is licensed under AGPLv3 license or Afterlogic Software License
 * if commercial version of the product was purchased.
 * For full statements of the licenses see LICENSE-AFTERLOGIC and LICENSE-AGPL3 files.
 */

namespace Aurora\Modules\OutlookSyncWebclient;

use Aurora\System\SettingsProperty;

/**
 * @property bool $Disabled
 * @property string $PluginDownloadLink
 * @property string $PluginReadMoreLink
 */

class Settings extends \Aurora\System\Module\Settings
{
    protected function initDefaults()
    {
        $this->aContainer = [
            "Disabled" => new SettingsProperty(
                false,
                "bool",
                null,
                "Setting to true disables the module",
            ),
            "PluginDownloadLink" => new SettingsProperty(
                "https://afterlogic.com/download/OutlookSyncSetup.exe",
                "string",
                null,
                "URL of Outlook Sync plugin download link",
            ),
            "PluginReadMoreLink" => new SettingsProperty(
                "",
                "string",
                null,
                "URL of documentation page on installing and using Outlook Sync plugin",
            ),
        ];
    }
}
