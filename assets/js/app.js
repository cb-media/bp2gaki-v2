$("#q10").click(function() {
    $("button").removeAttr("disabled");
    $("button").click(function() {
        var result = confirm('Form diklik');
        if (result) {
            alert('Terima kasih telah mengisi survey website BP2GAKI. Kami berharap dengan kontribusi Anda dalam mengisi survey ini, kami dapat memperbaiki dan meningkatkan pelayanan melalui website BP2GAKI');
        } else {
            alert("Oke, ada yang perlu diganti?");
        }
    });
});
$(function() {
    $('.radio-sonar').click(function() {
        $(".next").removeClass('d-none');
        $(".next").addClass('d-block');
    });
});

function optionsController(event) {
    if (event.value == 'lainnya') {
        $("#validationServer06").removeClass('d-none');
        $("#validationServer06").addClass('d-block');
    } else {
        $("#validationServer06").removeClass('d-block');
        $("#validationServer06").addClass('d-none');
    }
}

$('.dropdown-menu a.dropdown-toggle').on('mouseenter', function(e) {
    if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');


    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass("show");
    });


    return false;
});

$('body').on('mouseenter mouseleave', '.dropdown', function(e) {
    var _d = $(e.target).closest('.dropdown');
    _d.addClass('show');
    setTimeout(function() {
        _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
    }, 300);
});

// Redirect ke halaman survey ketika diclose

function responseSurveyFirst() {
    return window.location.href = 'survey-pengunjung.html';
}

// Modal Survey

var pageLocation = '/survey-pengunjung.html';
var halamanException = pageLocation;

if (location.pathname == halamanException) {
    $('#modalSurvey').modal('hide');
} else {

    setTimeout(function() {
        $('#modalSurvey').modal('show');
    }, 15000);
}

// Tagging and Hashing Profile

$(window).on('hashchange', function(e) {
    getLastURI(location.href.substr(location.href.lastIndexOf('/') + 13));
});

function getLastURI(LastUri) {
    let LastIndex = LastUri;

    switch (LastIndex) {
        case '#sejarah':
            $('.if-sejarah').show();
            $('.if-kepala-dari-masa-ke-masa').hide();
            $('.if-visi-misi').hide();
            $('.if-struktur-organisasi').hide();
            $('.if-dasar-hukum').hide();
            $('.if-sumber-daya-manusia').hide();
            break;
        case '#visi-misi':
            $('.if-visi-misi').show();
            $('.if-kepala-dari-masa-ke-masa').hide();
            $('.if-sejarah').hide();
            $('.if-struktur-organisasi').hide();
            $('.if-dasar-hukum').hide();
            $('.if-sumber-daya-manusia').hide();
            break;
        case '#struktur-organisasi':
            $('.if-struktur-organisasi').show();
            $('.if-kepala-dari-masa-ke-masa').hide();
            $('.if-sejarah').hide();
            $('.if-visi-misi').hide();
            $('.if-dasar-hukum').hide();
            $('.if-sumber-daya-manusia').hide();
            break;
        case '#dasar-hukum':
            $('.if-dasar-hukum').show();
            $('.if-kepala-dari-masa-ke-masa').hide();
            $('.if-sejarah').hide();
            $('.if-visi-misi').hide();
            $('.if-struktur-organisasi').hide();
            $('.if-sumber-daya-manusia').hide();
            break;
        case '#kepala-dari-masa-ke-masa':
            $('.if-dasar-hukum').hide();
            $('.if-kepala-dari-masa-ke-masa').show();
            $('.if-sejarah').hide();
            $('.if-visi-misi').hide();
            $('.if-struktur-organisasi').hide();
            $('.if-sumber-daya-manusia').hide();
            break;
        default:
            $('.if-sumber-daya-manusia').show();
            $('.if-kepala-dari-masa-ke-masa').hide();
            $('.if-visi-misi').hide();
            $('.if-struktur-organisasi').hide();
            $('.if-dasar-hukum').hide();
            $('.if-sejarah').hide();
            break;
    }
}