jQuery(document).ready(function ($) {

	$(".headroom").headroom({
		"tolerance": 20,
		"offset": 50,
		"classes": {
			"initial": "animated",
			"pinned": "slideDown",
			"unpinned": "slideUp"
		}
	});

	// Contact Form logic
	$('#contact-form').on('submit', function (e) {
		e.preventDefault();

		var name = $(this).find('[name="name"]').val();
		var email = $(this).find('[name="email"]').val();
		var phone = $(this).find('[name="phone"]').val();
		var message = $(this).find('[name="message"]').val();

		var subject = encodeURIComponent('Contacto desde JamesClon WEB - ' + name);
		var body = encodeURIComponent(
			'Nombre: ' + name + '\n' +
			'Email: ' + email + '\n' +
			'Teléfono: ' + (phone || 'No proporcionado') + '\n\n' +
			'Mensaje:\n' + message
		);

		window.location.href = 'mailto:info@jamesclon.com?subject=' + subject + '&body=' + body;
	});

	// Cookie Banner Logic
	if (!localStorage.getItem('cookies-choice')) {
		setTimeout(function () {
			$('#cookie-banner').addClass('show');
		}, 1000);
	}

	$(document).on('click', '#accept-cookies, #reject-cookies', function () {
		localStorage.setItem('cookies-choice', 'completed');
		$('#cookie-banner').removeClass('show').fadeOut();
	});

});