export default inner => {
	var wrapper = $('.lightbox-wrapper')[0]
	var outer = $('.lightbox-outer')[0]
	var image = $('.lightbox-img')[0]
	var path = $('.img-path').html()
	var names = $('.img-names').html().split(',')
	var i = 0

	document.addEventListener('click', e => {
		if(e.target.dataset.thumb) {
			$('.thumb-img-active')[0].classList.remove('thumb-img-active')
			e.target.classList.add('thumb-img-active')
			i = e.target.dataset.thumb
			$('.big-thumb-img')[0].src = e.target.src
		}

		if(e.target.dataset.bigThumb) {
			image.src = `${path}1200_${names[i]}`
			wrapper.style.display = 'block'
			outer.style.display = 'flex'
		}

		if(e.target.dataset.close)
			wrapper.style.display = outer.style.display = ''

		if(e.target.dataset.rotate) {
			e.target.dataset.rotate == 'left'?--i:++i
			if(i < 0) i = names.length - 1
			if(i == names.length) i = 0
			image.src = `${path}1200_${names[i]}`
		}
	})
}