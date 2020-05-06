;(function(): void {
	const { body } = document
	let candidate: number[]
	let selectNumbers: number[]
	let strike: number
	let ball: number
	let contentBody = body.querySelector('.content.number-baseball')!
	let buttonSendNumber = contentBody.querySelector('.button.send-number')!
	let baseballGameResult = contentBody.querySelector('.result')!

	function chooseNumber() {
		candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9]
		selectNumbers = []
		strike = 0
		ball = 0

		for (let i: number = 0; i < 4; i++) {
			let item = candidate.splice(Math.floor(Math.random() * 9 - i), 1)[0]
			selectNumbers.push(item)
		}

		console.log('정답kkkkkk =', selectNumbers)
	}

	chooseNumber()

	buttonSendNumber.addEventListener('click', function(event: Event) {
		event.preventDefault()
		let answer = document.querySelector('#inputNumber') as HTMLInputElement
		if (answer.value === selectNumbers.join('')) {
			baseballGameResult.textContent = '정답'
			chooseNumber()
		} else {
			strike = 0
			ball = 0
			let answerNumber = answer.value.split('')
			console.log('answerNumber =', answerNumber)
			console.log('answerNumber =', answerNumber[1])
			console.log('selectNumbers =', selectNumbers.join(''))
			for (let i: number = 0; i < 4; i++) {
				if (selectNumbers[i] === Number(answerNumber[i])) {
					strike += 1
				} else if (selectNumbers.join('').indexOf(answerNumber[i]) > -1) {
					ball += 1
				}
			}

			baseballGameResult.textContent = `오답 ${strike} Strike & ${ball} Ball 입니다.`
		}
	})
})()
