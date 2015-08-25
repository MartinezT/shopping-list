$(document).ready(function () {
    $(this).on('click', '.item', function () {
        $(this).remove();
    });
    $('button').click(function () {
        var toAdd = $("input[name=shopping-list]").val();
        $('#list').append("<div class ='item'>" + toAdd + "</div>");
        $("form").trigger("reset");
    });
});