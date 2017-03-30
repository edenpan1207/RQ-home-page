$(document).ready(function() {
    $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });

    var the_terms = $("#checkbox-submit");
    the_terms.click(function() {
        if ($(this).is(":checked")) {
            $("#submit").removeAttr("disabled").css('opacity', '1');
        } else {
            $("#submit").attr("disabled", "disabled").css('opacity', '0.5');
        }
    });

    $('#coach').on('change', function() {
        var val = $(this).val();
        $('[data-coach]').show();
        $.each($('[data-coach]'), function() {
            console.log($(this));
            if ($(this).data('coach') !== val) {
                $(this).parent().parent().hide();
            } else {
                $(this).parent().parents().show();
            }
        });
    });

    $('#location').on('change', function() {
        var val = $(this).val();
        $('[data-location]').show();
        $.each($('[data-location]'), function() {

            if ($(this).data('location') !== val) {
                $(this).parent().parent().parent().hide();
            } else {
                $(this).parent().parent().parents().show();
            }
        });
    });

    $('#time').on('change', function() {
        var val = $(this).val();
        $('[data-time]').show();
        $.each($('[data-time]'), function() {
            console.log($(this));
            if ($(this).data('time') !== val) {
                $(this).parent().parent().parent().hide();
            } else {
                $(this).parent().parent().parents().show();
            }
        });
    });

});
