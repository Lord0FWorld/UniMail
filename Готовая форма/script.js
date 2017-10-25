$(document).ready(function() {

	//E-mail Ajax Send
	$("#callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".success").addClass("visible"); // document.location.href = "https://bagmarcozarini.000webhostapp.com/Thanks.html"; - переход на нужную страницу
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$(".success").removeClass("visible");
			}, 3000);
		});
		return false;
	});

});