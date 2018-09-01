var base_url = 'https://cpdata.cdn-cdpl.com';
var token = 'account-3b0d03b85bd960106ebcfc0d761595';
var page_id = null;
var dirty_url = document.URL;
var user_agent = navigator.userAgent;
var page_total_view = null;
var total = null;
var user_ip = $('meta[name=ip]').attr('content');
var post_id = $('meta[name=post_id]').attr('content');
var page_title = $('title').html();

// Cleaning URL.
var split = dirty_url.split(/[?#]/);
var page_url = split[0].replace(/\/$/, "");

show_total();
push_log();

function show_total()
{
	$.ajax({
		type: "POST",
		url: base_url + '/api/collections/get/pageview?token=' + token,
		dataType: 'json',
		async: false,
		contentType : 'application/json',
		data: JSON.stringify({"filter": {"url": page_url}}),
		success: function (data) {

			if (data.total == 0)
			{
				$('.counter').html(1);
				push_total(post_id, page_title, page_url, 1);
			}
			else
			{
				page_total_view = data.entries[0].total;

				page_id = data.entries[0]._id;

				total = parseInt(page_total_view) + 1;

				$('.counter').html(total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."));

				update_total(page_title, page_id, page_url, total);
			}
		}
	});
}

function push_log()
{
	$.ajax({
		type: "POST",
		url: base_url + '/api/collections/save/logpageview?token=' + token,
		dataType: 'json',
		async: false,
		contentType : 'application/json',
		data: JSON.stringify({"data" : {"url": page_url, "ip" : user_ip, "user_agent" : user_agent }}),
		success: function (data) {
			console.log("Log pushed..");
		}
	});
}

function update_total(page_title, page_id, page_url, total)
{
	$.ajax({
		type: "POST",
		url: base_url + '/api/collections/save/pageview?token=' + token,
		dataType: 'json',
		async: false,
		contentType : 'application/json',
		data: JSON.stringify({"data" : {"_id": page_id, "title": page_title, "url": page_url, "total" : total }}),
		success: function (data) {
			console.log("Total updated..");
		}
	});
}

function push_total(post_id, page_title, page_url, total)
{
	$.ajax({
		type: "POST",
		url: base_url + '/api/collections/save/pageview?token=' + token,
		dataType: 'json',
		async: false,
		contentType : 'application/json',
		data: JSON.stringify({"data" : {"postID": post_id, "title": page_title, "url": page_url, "total" : total }}),
		success: function (data) {
			console.log("Total pushed..");
		}
	});
}