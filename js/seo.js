
let currentStep = 1;

function nextStep(n) {
	// console.log(n)

	let pBarItem = document.querySelectorAll('.p-bar__item');
	
	if (((currentStep + n) < (pBarItem.length + 1)) && (currentStep + n >= 1)) {
		currentStep = currentStep + n;
		let itemStep = document.querySelectorAll('.step__item');
		let currentNumder = document.getElementById('current-numder');

		let nextStep = document.getElementById('next-step');
		let prevStep = document.getElementById('prev-step');
		let stepsBar = document.getElementById('steps-bar');
		let progressBar = document.getElementById('progress-bar');

		// console.log(currentStep);

		currentNumder.innerText = currentStep;

		if (n === 1) {
			document.getElementById('bar-' + currentStep).classList.add('step-done');
		} else {
			document.getElementById('bar-' + (currentStep + 1)).classList.remove('step-done');
		}

		for (let i = 0; pBarItem.length > i; i++){
				let numberId = pBarItem[i].getAttribute('id');
				let item = document.getElementById('step-' + currentStep);

				if (numberId[4] = currentStep) {
					item.style.display = 'block';
					for (let a = 0; itemStep.length > a; a++) {
						let numberId2 = itemStep[a].getAttribute('id');

						if (numberId2[5] != currentStep) {
							itemStep[a].style.display = 'none';
						}
						if (currentStep === pBarItem.length) {
							nextStep.style.display = 'none';
							prevStep.style.display = 'none';
							stepsBar.style.display = 'none';
							progressBar.style.display = 'none';
						}
					}
				} 
		
		}

	} 

}
let step3 = document.getElementById('step-3')
let step3Other = document.getElementById('step-3-other');
let step3Text = document.getElementById('step-3-text');
step3.addEventListener('click', function () {
	if (step3Other.checked) {
		step3Text.removeAttribute('disabled')
		step3Text.classList.add('check__item')
	} else {
		step3Text.setAttribute('disabled', 'true')
		step3Text.classList.remove('check__item')
	}
})

let stepItems = document.getElementById('step-items')
let qus = document.getElementById('qus')
let qusText = document.getElementById('qus-text')
qus.addEventListener('click', function() {
	qusText.classList.add('qus-show')
})
// stepItems.addEventListener('click', function (e) {
// 	if (e.target.id != 'qus-text') {
// 		console.log('hi')
// 		qusText.classList.remove('qus-show')
// 	} else {
// 		qusText.classList.add('qus-show')
// 	}
// })
// step5.classList.contains