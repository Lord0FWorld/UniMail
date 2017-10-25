//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".success").addClass("visible"); //Добавляем в разметку класс,который всплывает при успешной отправке сообщения,и присваиваем ему класс visible
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			$(".success").removeClass("visible");//Убираем класс visible после 3000мс(3 сек)
			$.magnificPopup.close();//Закрываем всплывающее окно
			}, 3000);
		});
		return false;
	});


// <div class="hidden">
		
// 		<form class="popup-form callback zoom-anim-dialog mfp-hide" id="callback">

// 			<div class="success">Спасибо за заявку</div>

// 			<!-- Hidden Required Fields -->                                         ОБЯЗАТЕЛЬНЫЕ ПОЛЯ!!!
// 		<input type="hidden" name="project_name" value="Site Name">
// 		<input type="hidden" name="admin_email" value="admin@mail.com">				ОБЯЗАТЕЛЬНЫЕ ПОЛЯ!!!
// 		<input type="hidden" name="form_subject" value="Form Subject">
// 		<!-- END Hidden Required Fields -->														ОБЯЗАТЕЛЬНЫЕ ПОЛЯ!!!

// 			<h3>Заказать звонок</h3>
// 			<label>
// 				<span>Ваше Имя:</span>
// 				<input type="text" name="Имя" placeholder="Введите ваше имя...">
// 			</label>
// 			<label>
// 				<span>Ваш Телефон:</span>
// 				<input type="text" name="Телефон" placeholder="Введите ваш телефон..." required>
// 			</label>
// 			<div class="text-center">
// 				<button class="button">Отправить</button>
// 			</div>
// 			<input class="form-name" type="hidden" name="Форма">
// 		</form>

// 	</div>