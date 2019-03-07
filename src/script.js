import md5 from './md5'
import swipeMenu from './swipeMenu'
import gallery from './gallery'

$(function(){
	$('form[name="signin"]').on('submit', function(e) {
		e.preventDefault()
		var mail = $(this).find('input[name="email"]').val()
		var pass = $(this).find('input[name="pass"]').val() 
		if(mail && pass) {
			var body = new FormData()
			body.append('mail', mail)
			body.append('pass', md5(pass))
			fetch('/signin', { method: 'POST', body, credentials: 'include'})
			.then(res => res.json())
			.then(({signin}) => {
				if(signin) $('.sign-form').eq(0).html('<p class="h3">Вы вошли!</p>')
				else $('.sign-form').eq(0).html('<p class="h3">Что-то не так!</p>')
			})
		}
	})

	$('form[name="signup"]').on('submit', function(e) {
		e.preventDefault()
		var mail = $(this).find('input[name="email"]').val()
		var pass = $(this).find('input[name="pass"]')
		var pass1 = pass.eq(0).val()
		var pass2 = pass.eq(1).val()
		if(mail && pass1 == pass2)
			var body = new FormData()
			body.append('mail', mail)
			body.append('pass', md5(pass1))
			fetch('/signup', { method: 'POST', body, credentials: 'include'})
			.then(res => res.json())
			.then(({created}) => {
				if(created) $('.sign-form').eq(0).html('<p class="h3">Спасибо за регистрацию!</p>')
				else $('.sign-form').eq(0).html(`
					<p class="h3">Пользователь с таким адресом уже зарегистрирован!</p>
					<p><a href="/вход"> Продолжить регистрацию! </a></p>`)
			})
	})

	var list = $('.side-list')[0]
	if(list) swipeMenu(list)

	var galleryInner = $('.gallery-inner')[0]
	if(galleryInner) gallery(galleryInner)
})