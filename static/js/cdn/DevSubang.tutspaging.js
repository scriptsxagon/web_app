var showall_caption = "Show All";
var showstep_caption = "Show Step";

// add id on every step
var stepnum = 0;
$('.step-contents').children('.step').each(function(){
	stepnum++;
	$(this).attr('id', 'step'+stepnum);
	$('#step-pagination').append('<li><a href="#step'+stepnum+'" id="link-step'+stepnum+'" data-toggle="pill">'+stepnum+'</a></li>');
});

// hide paging if page has only one step
if(stepnum < 2){
	$('#step-pagination').hide();
}

$('#pagination-loading').remove();

// show first step or spesific step from hash url
if(window.location.hash){
	$('a[href="'+window.location.hash+'"]').tab('show');
	$('.tab-pane.step'+window.location.hash).addClass('active');
} else {
	$('a[href="#step1"]').tab('show');
}

$('#nav-tab-top a, #step-pagination a').click(function (e) {
	e.preventDefault();
	// $('#nav-tab-top a[href='+$(this).attr('href')+']').tab('show');
	// $('#step-pagination').children('a[href='+$(this).attr('href')+']').tab('show');
	$(this).tab('show');

	$("html,body").animate({scrollTop: ($('.step-contents').offset().top - 85) +'px'});

	// if(window.location.hash) window.location.hash = '';
	// window.location.hash = $(e.target).attr('href');
	// return false;
});

$('#showall-toggle').on('click', function(e){
	// e.preventDefault();
	if($('.tutspaging').hasClass('showall')){
		$(this).html(showall_caption).attr('href', '#step1');
		$('.tutspaging').removeClass('showall');
	}
	else{
		$(this).html(showstep_caption).attr('href', '#showall');
		$('.tutspaging').addClass('showall');
	}
})