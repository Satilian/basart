export default list => {
	var button = $('.side-list-batton')[0]
	var started = false
	var detecting = false
	var swipe = false
	var open = false
	var touch, x, y, newX, newY

	window.addEventListener('touchstart', e => {
  	if (e.touches.length != 1 || started) return
  	detecting = true
  	touch = e.changedTouches[0]
  	x = touch.pageX
		y = touch.pageY
	})

	window.addEventListener('touchmove', e => {
		if (e.touches.length != 1) return
	  if (!started && !detecting) return
  	var newTouch = e.changedTouches[0]
  	newX = newTouch.pageX
  	newY = newTouch.pageY

	  if (detecting) {
	  	if(Math.abs(x - newX) >= Math.abs(y - newY)) {
	  		started = true
		  	if ((newX - x) > 0 && !open) swipe = 'right'
		  	if ((newX - x) < 0 && open) swipe = 'left'
		  }
	  	detecting = false
	  }

	  if (started) {
	  	if(swipe == 'right') {
	  		list.style.left = -210 + (newX - x) + 'px'
		  	if((newX - x) > 110) {
			  	list.style.left = 0
			  	started = swipe = false
			  	open = true
			  }
	  	}
	  	if(swipe == 'left') {
	  		list.style.left = 0 - (x - newX) + 'px'
	  		if((x - newX) > 60) {
	  			list.style.left = ''
			  	started = swipe = false
			  	open = false
	  		}
	  	}
	  }
	})

	window.addEventListener('touchend', e => {
		if(swipe == 'right' && (newX - x) < 110) list.style.left = ''
		if(swipe == 'left' && (x - newX) < 60) list.style.left = 0
	  started = detecting = swipe = false
	})

	document.addEventListener('click', e => {
		if(!list.contains(e.target)) {
			list.style.left = ''
			open = false
		}
		if(e.target == button) {
			list.style.left = 0
			open = true
		}
	})
}