
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
