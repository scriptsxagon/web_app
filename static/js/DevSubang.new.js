(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-51093490-1', 'codepolitan.com');
	ga('send', 'pageview');

var OneSignal = window.OneSignal || [];
    OneSignal.push(["init", {
      appId: "a2540447-5236-4ac5-b5b3-b2b8d027e0c9",
      autoRegister: false,
      notifyButton: {
        enable: true /* Set to false to hide */
      }
    }]);

var h = document.getElementsByTagName('head')[0];
	(function(){
	var fc = document.createElement('link'); fc.type = 'text/css'; fc.rel = 'stylesheet';
	fc.href = 'https://product.feedbacklite.com/feedbacklite.css'; h.appendChild(fc);
	})();
	var fbl = {'campaign':{'id':1932, 'type':2, 'size':2, 'position':5, 'tab':4, 'control':1}};
	(function(){
	var fj = document.createElement('script'); fj.type = 'text/javascript';
	fj.async = true; fj.src = 'https://product.feedbacklite.com/feedbacklite.js'; h.appendChild(fj);
	})();

!function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '496143660723921');
    fbq('track', 'PageView');

var target_scroll = '#target_scroll';

                $(window).scroll(function() {
                var hT = $(target_scroll).offset().top,
                    hH = $(target_scroll).outerHeight(),
                    wH = $(window).height(),
                    wS = $(this).scrollTop();

                if (wS > (hT+hH-wH)){
                        if($(".cp-mini-popup").hasClass('popupshow')){
                            // do nothing
                        }else{
                            $(".cp-mini-popup").addClass("popupshow");
                            $(".cp-mini-popup").addClass("active");
                        }
                }
                });