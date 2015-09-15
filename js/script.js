
$(document).ready(function () {
    $('#button1').click(function () {
        var toAdd = $("input[name=shopping-list]").val();
        $('#listItem').append("<li class ='item'><input type='checkbox' name='checkItem' id='checkItem'>"+toAdd+"</li>");
        $("form").trigger("reset");
    });
    $('#button2').on('click',function(){
        $("input:checkbox").each(function(){
            if ($(this).is(":checked")){
                $(this).parent().remove();
            };
        });
    });
});