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
const scoreListElement: HTMLDListElement = playGround.querySelector(
	".scoreList"
) as HTMLDListElement
const formElement: HTMLFormElement = playGround.querySelector("form") as HTMLFormElement
const resultElement: HTMLParagraphElement = playGround.querySelector(
	".result"
) as HTMLParagraphElement
const answerTypeForm: HTMLDivElement = formElement.querySelector(".answer") as HTMLDivElement
const multipleTypeForm: HTMLDivElement = formElement.querySelector(".multiple") as HTMLDivElement
const submitButtonElment: HTMLButtonElement = formElement.querySelector(
	".multiple"
) as HTMLButtonElement
const modalElement: HTMLDivElement = document.querySelector(".modal") as HTMLDivElement
const totalScoreElement: Element = modalElement.querySelector(".total-score .value") as Element
const playTimeElement: HTMLTimeElement = modalElement.querySelector(
	".play-time .value"
) as HTMLTimeElement
const newGameButton: HTMLButtonElement = modalElement.querySelector(
	".new-game"
) as HTMLButtonElement
const closeGameButton: HTMLButtonElement = modalElement.querySelector(
	".close-game"
) as HTMLButtonElement

let currentStep: number = 1
let currentOptions: { difficulty: string; type: string } = {
	difficulty: "beginner",
	type: "answer"
}
let numberOne: number, numberTwo: number, options: number[], result: number
const setResult: { time: number; score: number; questions: number } = {
	time: new Date().getTime(),
	score: 0,
	questions: 10
}

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

const checkStepOptions: () => { difficulty: string; type: string } = () => {
	const difficulty = (document.querySelector("input[name=difficulty]:checked") as HTMLInputElement)
		.value
	const type = (document.querySelector("input[name=type]:checked") as HTMLInputElement).value
	return { difficulty, type }
}

newGameButton.addEventListener("click", () => {
	modalElement.hidden = true
	startGame()
})

closeGameButton.addEventListener("click", () => {
	modalElement.hidden = true
	prevStepButton.click()
})

newGameButton.addEventListener("keydown", e => {
	if (e.shiftKey && e.keyCode === 9) {
		e.preventDefault()
		closeGameButton.focus()
	}
})

closeGameButton.addEventListener("keydown", e => {
	if (e.keyCode === 9) {
		e.preventDefault()
		newGameButton.focus()
	}
})

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

	setResult.time = new Date().getTime()
	setResult.score = 0
	setResult.questions = 10
	scoreListElement.innerHTML = "<dt>결과표</dt>"

	setQuestion()
}

const setQuestion: () => void = () => {
	numberOne = Math.ceil(Math.random() * 9)
	numberTwo = Math.ceil(Math.random() * 9)
	result = numberOne * numberTwo
	options = createOptions(result)
	currentOptions.type === "multiple" ? (options = createOptions(result)) : (options = [])
	questionElement.textContent = `${numberOne} 곱하기 ${numberTwo}는 ?`
}

const createOptions: (result: number) => number[] = result => {
	let optionsCandidate: number[] = []
	let order: number[] = [0, 1, 2, 3, 4]

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

const checkAnswer: (input: HTMLInputElement) => void = input => {
	if (!input.value.length) {
		resultElement.textContent = "답을 입력해주세요"
		input.focus()
		return
	}

	const dd: Element = document.createElement("dd")
	if (result === Number(input.value)) {
		resultElement.textContent = "딩동댕"
		dd.textContent = "O"
		setResult.score++
	} else {
		resultElement.textContent = "땡"
		dd.textContent = "X"
	}
	scoreListElement.appendChild(dd)
	setResult.questions--
	resetInput(input)
	!setResult.questions ? doneGame() : setQuestion()
}

const doneGame: () => void = () => {
	const doneTime: number = new Date().getTime()
	const playTime: number = doneTime - setResult.time!
	totalScoreElement.textContent = `${String(setResult.score)} 점`
	playTimeElement.textContent = `${String(playTime / 1000)} 초`
	modalElement.hidden = false
	newGameButton.focus()
}

const resetInput: (input: HTMLInputElement) => void = input => {
	if (currentOptions.type === "answer") {
		input.value = ""
		input.focus()
	} else {
		input.checked = false
	}
}
