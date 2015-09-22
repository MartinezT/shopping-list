$(document).ready(function () {
    $('#button2').on('click',function(){
        $("input:checkbox").each(function(){
            if ($(this).is(":checked")){
                $(this).parent().remove();
            };
        });
    });
     $("form").submit(function(e){
        e.preventDefault();
        if($("input[name=shopping-list]").val() == ''){
            alert('Input can not be left blank');
            return false;
        }
        var toAdd = $("input[name=shopping-list]").val();
        $('#listItem').append("<li class ='item'><input type='checkbox' name='checkItem' id='checkItem'>"+toAdd+"</li>");
        $("form").trigger("reset");
    });
});
