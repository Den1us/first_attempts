	window.onload = function () {
	var check = document.getElementById('chck');
	var subm = document.getElementById('but');
		subm.setAttribute('disabled', 'true');

		check.onchange = function () {
			var hastrue = subm.hasAttribute('disabled');
			if (hastrue == false){
				subm.setAttribute('disabled', 'true');
			}
			if (hastrue == true) {
				subm.removeAttribute('disabled');
		}
	}
}