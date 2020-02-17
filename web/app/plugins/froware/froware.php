<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://ingenyus.com
 * @since             1.0.0
 * @package           Froware
 *
 * @wordpress-plugin
 * Plugin Name:       froware.com site-specific plugin
 * Plugin URI:        https://froware.com
 * Description:       This plugin defines custom functionality for froware.com.
 * Version:           1.0.0
 * Author:            Gary McPherson
 * Author URI:        https://ingenyus.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       froware
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'PLUGIN_NAME_VERSION', '1.0.0' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-froware-activator.php
 */
function activate_froware() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-froware-activator.php';
	Froware_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-froware-deactivator.php
 */
function deactivate_froware() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-froware-deactivator.php';
	Froware_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_froware' );
register_deactivation_hook( __FILE__, 'deactivate_froware' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-froware.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_froware() {

	$plugin = new Froware();
	$plugin->run();

}
run_froware();

if ( ! function_exists('write_log')) {
   function write_log ( $log )  {
      if ( is_array( $log ) || is_object( $log ) ) {
         error_log( print_r( $log, true ) );
      } else {
         error_log( $log );
      }
   }
}