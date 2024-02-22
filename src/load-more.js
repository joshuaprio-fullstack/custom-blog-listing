jQuery(document).ready(function($) {
    var page = 1;
    var loading = false;
    var container = $('.blog-post-section'); // Update this selector to match your container
  
    function loadMorePosts() {
      if (loading) {
        return;
      }
  
      loading = true;
  
      container.append('<div class="loading-message">Loading...</div>');
  
      $.ajax({
        url: my_ajax_object.ajax_url,
        type: 'POST',
        data: {
          action: 'load_more_posts',
          page: page,
        },
        success: function(response) {
          $('.loading-message').remove();
  
          container.append(response);
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