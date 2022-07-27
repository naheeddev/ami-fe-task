
$(document).ready(function() {
    $('#select-language').select2({
        theme: "bootstrap-5",
        placeholder: "Select Language",
        minimumResultsForSearch: -1
    });
    $('#select-academy').select2({
        theme: "bootstrap-5",
        placeholder: "Select Language",
        minimumResultsForSearch: -1
    });
    $('#select-channel').select2({
        theme: "bootstrap-5",
        placeholder: "Select Language",
        minimumResultsForSearch: -1
    });
    $('.nav-wrapper a').click(function() {

        $('.nav-wrapper a.active').removeClass('active');
        $(this).addClass('active');
    });
});

