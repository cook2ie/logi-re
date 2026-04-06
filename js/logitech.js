$(function () {
    $('#seungjae').fullpage({
        sectionsColor: ['#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E', '#1E1E1E'],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
        slidesNavigation: true,
        keyboardScrolling: true,
        responsiveWidth: 1200,

        onLeave: function (index, nextIndex) {
            currentActiveIndex = nextIndex;
        },

        afterLoad: function (anchorlink, index) {
            if (index >= 2) {
                $('header').css({ 'background': '#1E1E1E' });
                $('header nav ul').css({ 'padding': '10px 0' });
            } else {
                $('header').css({ 'background': 'transparent' });
                $('header nav ul').css({ 'padding': '35px 0' });
            }

            if (index == 6) {
                $('.opacity').addClass('on');
                $('.size').addClass('up');
            } else {
                $('.opacity').removeClass('on');
                $('.size').removeClass('up');
            }

            updateMenuColor(index);
        }
    });


    $('.logo').on('click', function (e) {
        e.preventDefault();
        $.fn.fullpage.moveTo('page1');
        updateMenuColor(1);
    });


    $('nav ul li a').on('click', function (e) {
        e.preventDefault();
        var menuText = $(this).text().trim();

        $('nav a').removeClass('active');
        $(this).addClass('active');

        switch (menuText) {
            case '제품': $.fn.fullpage.moveTo('page7'); break;
            case '소프트웨어': $.fn.fullpage.moveTo('page5'); break;
            case '지원': $.fn.fullpage.moveTo('page8'); break;
        }
    });
    function updateMenuColor(index) {
        $('nav a').removeClass('active');
        switch (index) {
            case 5: $('nav a:contains("소프트웨어")').addClass('active'); break;
            case 7: $('nav a:contains("제품")').addClass('active'); break;
            case 8: $('nav a:contains("지원")').addClass('active'); break;
        }
    }
});