<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 * @package block-developer-examples
 */

$current_year = date ( "Y" );

if ( !empty( $attributes['startingYear']) && ! empty( $attributes['showStartingYear'] )) {
	$display_date = $attributes['startingYear'] . '-' . $current_year;
} else {
	$display_date = $current_year;
}
?>
<p
	<?php echo get_block_wrapper_attributes(); ?>>
	©<?php  echo esc_html( $display_date ); ?>
</p>