<?php


/**
 * Enqueue Child Theme CSS.
 * Attached on 'wp_enqueue_scripts' hook with priority set to 20 to make sure all parent theme CSS has been loaded first.
 *
 * Remove or comment out this block below if you don't have additional CSS on style.css.
 */
function suki_child_enqueue_styles() {
	wp_enqueue_style( 'suki-child', trailingslashit( get_stylesheet_directory_uri() ) . 'style.css', array( 'suki' ), wp_get_theme()->get( 'Version' ) );
}
add_action( 'wp_enqueue_scripts', 'suki_child_enqueue_styles', 20 );


function my_custom_scripts() {
    wp_enqueue_script( 'custom-js', get_stylesheet_directory_uri() . '/js/custom.js', array( 'jquery' ),'',true );
}
add_action( 'wp_enqueue_scripts', 'my_custom_scripts' );

?>