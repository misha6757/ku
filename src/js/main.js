/**
 * Created by Alla on 24.06.2016.
 */

//* arrow in gallery*//
$(".stepBack").on("click", function () {
    console.log(0);
    var g = $(this).parent();
    var j = $(g).attr("data-user");
    var e = $(g).find("figure img")[0];
    if (articleGallery[j]) {
        var d = articleGallery[j].length;
        var h = $(e).attr("src");
        for (var f = d - 1; f >= 0; f--) {
            if (h == articleGallery[j][f]) {
                $(e).attr("src", articleGallery[j][(f - 1 > 0) ? f - 1 : d - 1]);
                break
            }
        }
    }
});

$(".stepForward").on("click", function () {
    var g = $(this).parent();
    var j = $(g).attr("data-user");
    var e = $(g).find("figure img")[0];
    if (articleGallery[j]) {
        var d = articleGallery[j].length;
        var h = $(e).attr("src");
        for (var f = 0; f < d; f++) {
            if (h == articleGallery[j][f]) {
                $(e).attr("src", articleGallery[j][(f + 1 < d) ? f + 1 : 0]);
                break
            }
        }
    }
});
//* end *//


//* menu *//
$(".menu > li > a").click(function (e) {
    var li = $(this).parent();
    if (li.hasClass("dropdown-open")) {
        rotateElem(li.find(".sprites.arrow"), 0);
        li.find('.arr-transform').removeClass('active-arrow');
        li.removeClass("dropdown-open").find(".dropdown").hide();
        return;
    }
    e.preventDefault();
    rotateElem($(".dropdown-open").find(".sprites.arrow"), 0);
    $(".dropdown-open").find('.arr-transform').removeClass('active-arrow');
    $(".dropdown-open").removeClass("dropdown-open").find(".dropdown").hide();
    li.addClass("dropdown-open").find(".dropdown").show();
    rotateElem(li.find(".sprites.arrow"), 180);
    li.find('.arr-transform').addClass('active-arrow');
});

function rotateElem(elem, deg) {
    elem.stop().animate({borderSpacing: deg}, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
            $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
            $(this).css('transform', 'rotate(' + now + 'deg)');
        },
        duration: 150
    });
}

$(document).click(function (e) {
    0 == $(e.target).parents(".menu").length && $(".dropdown-open").removeClass("dropdown-open").find(".dropdown").hide()
});
//* end *//


$(document).ready(function () {

    //* size *//
    var size = getHash('size');
    if (size != undefined) {
        $(".b-table .size").find("div[data-size=" + size + "]").addClass("active-size");
    }

    function getHash(hashName) {
        var url = window.location.hash.replace('#', '');
        var hash = url.split('&');
        var res = {};
        for (var i = 0; i < hash.length; i++) {
            var t = hash[i].split('=');
            res[t[0]] = t[1];
        }
        return res[hashName];
    }

    // *end size *//


    //* filter *//
    $('.filter-mob').click(function () {
        var filter = $('.b-filter');

        if (filter.hasClass('active')) {

            filter.css({'left': '0', 'padding': '10px', 'display': 'block'});
            filter.animate({left: '-295px'}, 300);
            filter.removeClass('active');

        }
        else {
            filter.css({'left': '-285px', 'padding': '10px', 'display': 'block'});
            filter.animate({left: '-10px'}, 300);
            filter.addClass('active');
        }
    });

    //* end filter *//


    //* Popup-table *//
    $('.t-size').click(function () {
        $('.dialog-window').fadeIn();
    });
    $('.close').click(function () {
        $('.dialog-window').fadeOut();
    });

    $(".clothes_block_button").click(function () {
        $(this).removeClass("active");
        $(".how_spot_my_size_text_button").addClass("active");
        $(".table").show();
        $(".how_spot_my_size_text").hide()
    });
    $(".how_spot_my_size_text_button").click(function () {
        $(this).removeClass("active");
        $(".clothes_block_button").addClass("active");
        $(".table").hide();
        $(".how_spot_my_size_text").show()
    });
    //* end *//


//* button by credit *//
    $('.credits').hide();
    $('.by_creedit').click(function () {
        $('.credits').show();
        $('.by_creedit').hide();
    });
//* end  *//

    $('#menu-top').on('click', function () {
        $('.block-left-top').toggle();
    });

    $('#menu-center').on('click', function () {
        $('.menu-center').toggle();
    });


    $('.menu-center span').on('click', function () {
        $('.menu-center').hide();
    });


    //* dropdown *//

    $(function () {
        /* выбор города */
        $('.delivery_list').click(function () {
            $(".cities_list").slideToggle('fast');
        });
        $('ul.cities_list li').click(function () {
            var tx = $(this).html();
            var tv = $(this).attr('alt');
            $(".cities_list").slideUp('fast');
            $(".delivery_list span").html(tx);
            $(".delivery_text").html(tv);
        });
    });

    //* end *//


    //* Spinner *//

    //$("#currency").change(function () {
    //    $("#spinner").spinner("option", "culture", $(this).val());
    //});
    //spinner._parse = function (value) {
    //    return value.charCodeAt(0);
    //    return value;
    //};
    //* end *//


});


//* Top scroll*//
var top_show = 150;
var delay = 1000;
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > top_show) $('#top').fadeIn();
        else $('#top').fadeOut();
    });
    $('#top').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });
});
//* end *//


//* Modal windows *//
$(document).ready(function () {

    $(document).on('click', '.close', function () {
        $(this).closest('.overflow').hide();
    });
    $(document).on('click', '.popup-open', function (e) {
        e.preventDefault();
        var popup = $(this).attr('data-popup');
        $('.overflow .modal-window.' + popup).closest('.overflow').show();
    });

});
//* end *//


//* Modal windows *//
$('.items span').click(function () {
    $('.block-registration').hide();
    $('.block-entry').hide();
    $('.' + 'block-' + $(this).attr('data-type')).show();
});

//* end *//


//* Modal window basket*//
//* Modal window basket*//
$('.in_basket').click(function () {
    $('.overflow').fadeIn();
});
$('.remove-all-products').click(function () {
    $('.overflow').fadeOut();
});
//* end *//
//* end *//


//* Checkbox *//
$(".checkbox-wrapper").click(function () {
    console.log($(this)[0].href);
    if ($(this)[0].href.length) {
        location.href = $(this)[0].href
    } else {
        return false
    }
});
//* end *//


jQuery(document).ready(function () {


    /* слайдер цен */

    jQuery("#slider").slider({
        min: 0,
        max: 1000,
        values: [0, 1000],
        range: true,
        stop: function (event, ui) {
            jQuery("input#minCost").val(jQuery("#slider").slider("values", 0));
            jQuery("input#maxCost").val(jQuery("#slider").slider("values", 1));

        },
        slide: function (event, ui) {
            jQuery("input#minCost").val(jQuery("#slider").slider("values", 0));
            jQuery("input#maxCost").val(jQuery("#slider").slider("values", 1));
        }
    });

    jQuery("input#minCost").change(function () {

        var value1 = jQuery("input#minCost").val();
        var value2 = jQuery("input#maxCost").val();

        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            jQuery("input#minCost").val(value1);
        }
        jQuery("#slider").slider("values", 0, value1);
    });


    jQuery("input#maxCost").change(function () {

        var value1 = jQuery("input#minCost").val();
        var value2 = jQuery("input#maxCost").val();

        if (value2 > 1000) {
            value2 = 1000;
            jQuery("input#maxCost").val(1000)
        }

        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            jQuery("input#maxCost").val(value2);
        }
        jQuery("#slider").slider("values", 1, value2);
    });


// фильтрация ввода в поля
    jQuery('input').keypress(function (event) {
        var key, keyChar;
        if (!event) var event = window.event;

        if (event.keyCode) key = event.keyCode;
        else if (event.which) key = event.which;

        if (key == null || key == 0 || key == 8 || key == 13 || key == 9 || key == 46 || key == 37 || key == 39) return true;
        keyChar = String.fromCharCode(key);

        if (!/\d/.test(keyChar))    return false;

    });


});


