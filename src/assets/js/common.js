function common() {
	$('#header').on('click', '.nav>li', function() {
		var _this = $(this),
			_index = _this.index()
		console.log(_this.html())
	})
}

export default common