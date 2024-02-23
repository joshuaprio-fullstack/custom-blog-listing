jQuery(document).ready(function($) {
    var page = 1;
    var loading = false;
    var container = $('.blog-post-section'); 

    function loadMorePosts() {
        if (loading) {
            return;
        }

        loading = true;

        $.ajax({
            url: my_ajax_object.ajax_url,
            type: 'POST',
            data: {
                action: 'load_more_posts',
                page: page,
                loaded_posts: loadedPosts.join(','),
                keyword: jQuery('#keyword').val()
            },
            success: function(response) {
                container.append(response);
                jQuery('.blog-post-section').html( data );
                page++;
                loading = false;
            },
            error: function(xhr, status, error) {
                console.log(xhr.responseText);
            }
        });
    }

    // Listen for the click event on the load more button
    $('.load-more-button').on('click', function(e) {
        e.preventDefault();
        loadMorePosts();
    });
});


jQuery(document).ready(function($) {
    $('#searchForm').on('submit', function(event) {
      event.preventDefault();
  
      var searchQuery = $('#searchQuery').val();
  

      $.ajax({
        url: my_ajax_object.ajaxurl, 
        type: 'POST',
        data: {
          action: 'custom_search', 
          searchQuery: searchQuery
        },
        success: function(response) {

          $('#searchResults').html(response);
        },
        error: function(error) {

          console.log(error);
        }
      });
    });
  });