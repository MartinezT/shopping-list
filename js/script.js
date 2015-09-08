$(document).ready(function () {
    $('#button1').click(function () {
        var toAdd = $("input[name=shopping-list]").val();
        $('#list').append("<div class ='item'><input type='checkbox' name='checkItem' id='checkItem'>"+toAdd+"</div>");
        $("form").trigger("reset");
    });
    $('#button2').click(function(){
    	if($('[type="checkbox"]').is(":checked")){
    		$('.item').remove();
    	}
    });
});