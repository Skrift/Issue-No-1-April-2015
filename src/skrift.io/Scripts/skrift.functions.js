var skrift = {
    init: function() {
        skrift.menu.init();
    },
    menu: {
        init: function() {
            skrift.menu.bind();
        },
        bind: function() {
            $('nav#main ul').on('click', function() {
                skrift.menu.close();
            });
			$('#readLatestIssue').on('click', function() {
				$('html, body').animate({scrollTop: $('#content').offset().top}, 1000);
				return false;
			});
        },
        close: function() {
            $('#mobile-toggle').removeAttr('checked');
        }
    }
};

skrift.init();