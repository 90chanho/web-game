import "../common.scss"
import "../nomalize.scss"
import "./times-table.scss"

const step1Element: HTMLDivElement = document.querySelector(".step.step1") as HTMLDivElement
const step2Element: HTMLDivElement = document.querySelector(".step.step2") as HTMLDivElement
const step3Element: HTMLDivElement = document.querySelector(".step.step3") as HTMLDivElement

const prevStepButton: HTMLButtonElement = document.querySelector(
	".button-prev-step"
) as HTMLButtonElement
const nextStepButton: HTMLButtonElement = document.querySelector(
	".button-next-step"
) as HTMLButtonElement

const playGround: HTMLDivElement = document.querySelector(".play-game") as HTMLDivElement
const selectedDifficulty: HTMLParagraphElement = playGround.querySelector(
	".selectedDifficulty span"
) as HTMLParagraphElement
const selectedType: HTMLParagraphElement = playGround.querySelector(
	".selectedType span"
) as HTMLParagraphElement
const questionElement: HTMLParagraphElement = playGround.querySelector(
	".play-game .question"
) as HTMLParagraphElement
const formElement: HTMLFormElement = playGround.querySelector("form") as HTMLFormElement
const resultElement: HTMLParagraphElement = playGround.querySelector(
	".result"
) as HTMLParagraphElement
const answerTypeForm: HTMLDivElement = formElement.querySelector(".answer") as HTMLDivElement
const multipleTypeForm: HTMLDivElement = formElement.querySelector(".multiple") as HTMLDivElement
const submitButtonElment: HTMLButtonElement = formElement.querySelector(
	".multiple"
) as HTMLButtonElement

let currentStep: number = 1
let currentOptions: { difficulty: string; type: string } = {
	difficulty: "beginner",
	type: "answer"
}
let numberOne: number, numberTwo: number, options: number[], result: number

prevStepButton.addEventListener("click", () => {
	switch (currentStep) {
		case 2:
			currentStep = 1
			step1Element.hidden = false
			step2Element.hidden = true
			prevStepButton.disabled = true
			nextStepButton.textContent = "다음"
			break
		case 3:
			currentStep = 2
			step2Element.hidden = false
			step3Element.hidden = true
			nextStepButton.disabled = false
			formElement.removeEventListener("submit", submitAction)
			break
	}
})

nextStepButton.addEventListener("click", () => {
	switch (currentStep) {
		case 1:
			currentStep = 2
			step1Element.hidden = true
			step2Element.hidden = false
			prevStepButton.disabled = false
			nextStepButton.textContent = "시작"
			break
		case 2:
			currentStep = 3
			step2Element.hidden = true
			step3Element.hidden = false
			nextStepButton.disabled = true
			currentOptions = checkStepOptions()
			startGame()
			formElement.addEventListener("submit", submitAction)
			break
	}
})

const setQuestion: () => void = () => {
	numberOne = Math.ceil(Math.random() * 9)
	numberTwo = Math.ceil(Math.random() * 9)
	result = numberOne * numberTwo
	options = createOptions(result)
	currentOptions.type === "multiple" ? (options = createOptions(result)) : (options = [])
	questionElement.textContent = `${numberOne} 곱하기 ${numberTwo}는 ?`
}

const submitAction: (event: Event) => any = event => {
	let input: HTMLInputElement
	event.preventDefault()
	if (currentOptions.type === "answer") {
		input = answerTypeForm.querySelector("input") as HTMLInputElement
	} else {
		input = multipleTypeForm.querySelector("input[type=radio]:checked") as HTMLInputElement
	}

	checkAnswer(input)
}

const startGame = () => {
	selectedDifficulty.textContent = currentOptions.difficulty
	selectedType.textContent = currentOptions.type

	if (currentOptions.type === "answer") {
		formElement.classList.remove("type-multiple")
		formElement.classList.add("type-answer")
	} else {
		formElement.classList.remove("type-answer")
		formElement.classList.add("type-multiple")
	}

	setQuestion()
}

const checkAnswer: (input: HTMLInputElement) => void = input => {
	if (result === Number(input.value)) {
		resultElement.textContent = "딩동댕"
		resetInput(input)
		setQuestion()
	} else {
		resultElement.textContent = "땡"
		resetInput(input)
	}
}

const resetInput: (input: HTMLInputElement) => void = input => {
	if (currentOptions.type === "answer") {
		input.value = ""
		input.focus()
	} else {
		input.checked = false
	}
}

const checkStepOptions: () => { difficulty: string; type: string } = () => {
	const difficulty = (document.querySelector("input[name=difficulty]:checked") as HTMLInputElement)
		.value
	const type = (document.querySelector("input[name=type]:checked") as HTMLInputElement).value
	return { difficulty, type }
}

const createOptions: (result: number) => number[] = result => {
	let optionsCandidate: number[] = []
	let order = [0, 1, 2, 3, 4]

	order.reduce((accumulator, current) => {
		optionsCandidate.push(accumulator + current)
		return accumulator + current
	}, result)

	let options: number[] = []
	for (let i: number = 0; optionsCandidate.length > 0; i++) {
		options = options.concat(
			optionsCandidate.splice(Math.floor(Math.random() * optionsCandidate.length), 1)
		)
	}

	let optionsElements: NodeListOf<HTMLLIElement> = multipleTypeForm.querySelectorAll("li")

	optionsElements.forEach((optionElement, index) => {
		const labelElement: HTMLLabelElement = optionElement.querySelector("label") as HTMLLabelElement
		const inputElement: HTMLInputElement = optionElement.querySelector("input") as HTMLInputElement
		labelElement.textContent = String(options[index])
		inputElement.value = String(options[index])
	})

	return options
}
