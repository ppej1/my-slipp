$(".answer-write input[type=submit]").click(addAnswer);

function addAnswer(e){
	e.preventDefault();
	console.log("click me");
	
	var queryString = $(".answer-write").serialize();
	console.log("query: " +queryString);
	var url = $(".answer-write").attr("action");
	console.log("url: " +url);
	$.ajax({
			type :'POST',
			url: url,
			data: queryString,
			dataType : 'json',
			error : onError,
			success: onSuccess});
}

function onError(){
	
}
function onSuccess(data, status){
	
}