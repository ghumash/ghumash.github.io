function insert(num) {
	document.form.textview.value = document.form.textview.value + num
}

function clean() {
	document.form.textview.value = ''
}

function back() {
	var exp = document.form.textview.value;
  document.form.textview.value = exp.substring(0,exp.length-1);
}

function equal() {
	var exp = document.form.textview.value;
  if(exp) { //nshanakum a ete toxi mej ban ka...uremn
  	document.form.textview.value = eval(exp);
  }
}
const itemColor = document.querySelectorAll('.item').forEach(function(val) {
	val.addEventListener('click', function() {
		
	})
})


document.querySelectorAll('.item').forEach(function(val) {
	val.addEventListener('click', function() {
		val.classList.add('toggle');
		val.classList.remove('h');
		document.querySelector('input').style.cssText = 'bottom: 310px';

		setInterval(function() {
			val.classList.remove('toggle');
			val.classList.add('h');
	},1000) 
	})
})

// document.querySelectorAll('.item').click = () => {
// 	document.querySelectorAll('.item').style.background = 'green'
// }



