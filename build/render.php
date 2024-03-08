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


if ( ! function_exists( 'my_custom_enqueue_scripts' ) ) {
    function my_custom_enqueue_scripts() {
        // Enqueue your JavaScript file
        wp_enqueue_script( 'my-custom-script', plugin_dir_url(__FILE__) . '/load-more.js', array( 'jquery' ), '1.0', false );

        // Localize the script with the AJAX endpoint URL
        wp_localize_script( 'my-custom-script', 'my_ajax_object', array(
            'ajax_url' => admin_url( 'admin-ajax.php' ),
        ) );
    }

    add_action( 'wp_enqueue_scripts', 'my_custom_enqueue_scripts' );
}
    $block_content = $content;
	$number_post = ! empty($attributes['numberPost']) ? $attributes['numberPost'] : '6';

    $uncateg = get_cat_ID( 'uncategorized' );
    $args    = array(
        'post_type'        => 'post',
        'posts_per_page'   => $number_post,
        'category__not_in' => array( $uncateg ),
    );

    $query         = new WP_Query( $args );
    $loaded_posts  = array();

    if ( $query->have_posts() ) {
        $block_content = '<div class="blog-post-section">';
        while ( $query->have_posts() ) {
            $query->the_post();
            $post_id         = get_the_ID();
            $loaded_posts[] = $post_id;

            $block_content .= '<div class="blog-list-container">';
            // Category
            $categories = get_the_category();
            if ( ! empty( $categories ) ) {
                $block_content .= '<p class="blog-post-category">
                <a href="' . esc_url( get_category_link( $categories[0]->term_id ) ) . '">' . esc_html( $categories[0]->name ) . '</a></p>';
            }
            // Featured image
            if ( has_post_thumbnail() ) {
                $block_content .= '<div class="featured-image">' . get_the_post_thumbnail( null, '' ) . '</div>';
            }

            // Title
            $block_content .= '<p class="blog-post-title"><a href="' . esc_url( get_permalink() ) . '">' . get_the_title() . '</a></p>';

            $block_content .= '</div>';
        }
        $block_content .= '</div>';
        wp_reset_postdata();
    } else {
        $block_content = '<p>No posts found.</p>';
    }

echo wp_kses_post( $block_content );

echo '<script>var loadedPosts = ' . json_encode( $loaded_posts ) . ';</script>';
