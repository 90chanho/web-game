;(function(): void {
	let numberOne: number = Math.ceil(Math.random() * 9)
	let numberTwo: number = Math.ceil(Math.random() * 9)
	let result: number = numberOne * numberTwo
	let _main = document.querySelector('.content.times-table')!

	const question: HTMLDivElement = document.createElement('div')
	question.textContent = `${numberOne} 곱하기 ${numberTwo}는??`
	_main.append(question)

	const form: HTMLFormElement = document.createElement('form')
	_main.append(form)

	const input: HTMLInputElement = document.createElement('input')
	input.type = 'number'
	form.append(input)

	const button: HTMLButtonElement = document.createElement('button')
	button.textContent = '입력'
	form.append(button)

	const resultDiv: HTMLDivElement = document.createElement('div')
	_main.append(resultDiv)

	form.addEventListener('submit', function(e) {
		e.preventDefault()
		if (result === Number(input.value)) {
			numberOne = Math.ceil(Math.random() * 9)
			numberTwo = Math.ceil(Math.random() * 9)
			result = numberOne * numberTwo
			question.textContent = `${numberOne} 곱하기 ${numberTwo}는??`
			resultDiv.textContent = '딩동댕'
			input.value = ''
			input.focus()
		} else {
			resultDiv.textContent = '땡'
			input.value = ''
			input.focus()
		}
	})
})()
