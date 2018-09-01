$(document).ready(function() {

	/**
	 * Global var.
	 */
	var base_url = $('#base_url').val();

	/**
	 * Close head alert
	 */
	$('#btn-close-head-alert').click(function(){
		$('#head-alert').hide();
	});

	/**
	 * Thanks button handler
	 */
	$('.btn-thanks').click(function(){
		var post_id = $(this).attr('post-id');
		var number_thank = parseInt($("#thank_number_sidebar").text());

		$(this).html('WAIT..');

		$.ajax({
			type: "GET",
			url: base_url + '/feedback-to/thanks/' + post_id,
			success: function(data)
			{
				if (data.status == 'failed')
				{
					$('.btn-thanks').html(data.message);
				}
				else if (data.status == 'failed-self')
				{
					$('.btn-thanks').html('YES, THANKS');
					sweetAlert("Oops", "Kamu tidak bisa memberikan thanks pada artikel sendiri", "error");
				}
				else if (data.status == 'must-login')
				{
					window.location = base_url + '/users/login?alert=danger&message=You have to login first&callback=' + document.URL;
				}
				else
				{
					$('.btn-thanks').html('DONE!');
					number_thank = number_thank + 1;
					$("#thank_number_sidebar").text(number_thank);
					$("#thank_number_bottom").text(number_thank);
				}
			},
			error: function(data){
				sweetAlert("Oops...", "Something wrong.", "error");
			}
		});


	})

	/**
	 * Share button handler
	 */
	$('.btn-share').click(function(){
		var text = $(this).attr('text');
		var url = $(this).attr('url');
		var social = $(this).attr('social');

		if (social == 'twitter')
			window.open("http://twitter.com/share?text="+text+"&url="+url, "Share", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=600,height=500");
		else if (social == 'facebook')
			window.open("https://www.facebook.com/sharer/sharer.php?u="+url, "Share", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=600,height=500");
		else if (social == 'googleplus')
			window.open("https://plus.google.com/share?url="+url, "Share", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=600,height=500");
		else
			window.open("https://www.linkedin.com/shareArticle?mini=true&url="+url+"&title="+text+"&source=Codepolitan", "Share", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=600,height=500");

		return false;
	});

	/**
	 * Analytics handler
	 */
	$(".record-data").on('click', function(e) {
		e.preventDefault();
		var record_action = $(this).data("action");
		var record_position = $(this).data("position");
		var record_id = $(this).data("id");
		var href = $(this).attr('href');
		var target = $(this).attr('target');

	    ga('send', {
			'hitType': 'event',
			'eventCategory': record_position,
			'eventAction': record_action,
			'eventLabel': record_id
		});

		if (typeof href !== typeof undefined && href !== false) {
		    if (typeof target !== typeof undefined && target !== false) {
		    	window.open(href, '_blank');
		    }
		    else
		    {
		    	window.location = href;
		    }
		}
	});

	/**
	 * Tab handler
	 */
	$('.tab-article').click(function(){
		var target_content = $(this).attr("href");

		$(this).parents("ul").find("li").removeClass("active");
		$(this).parent().addClass("active");
		$('.article-tab-content').removeClass("active");
		$(target_content).addClass("active");

		return false;
	});

	/**
	 * Open new tab on link content handler
	 */
	$("#main_content_post a").each(function () {
	    $(this).attr("target", "_blank");
	});

	/**
	 * Popup handler
	 */
	$('#general_popup').modal('show');

	$('#general_popup').on('hidden.bs.modal', function (e) {
	  	$("#video_popup").attr("src", $("#video_popup").attr("src"));
	})

	/**
	 * Code highlight handler
	 */
	hljs.initHighlightingOnLoad();

	/**
	 * Sub menu navigation.
	 */
	$('#submenu a').click(function(event) {
		// Figure out element to scroll to
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		// Does a scroll target exist?
		if (target.length) {
			// Only prevent default if animation is actually gonna happen
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top - 120
			}, 1000, function() {
				// Callback after animation
				// Must change focus!
				var $target = $(target);
				$target.focus();
			});
		};
	});

	$(".btn-close-mini-popup").click(function(){
		$(".cp-mini-popup").removeClass("active");

		return false;
	})

})