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
const answerTypeForm = formElement.querySelector(".answer") as HTMLDivElement
const multipleTypeForm = formElement.querySelector(".multiple") as HTMLDivElement

let currentStep: number = 1
let currentOptions: { difficulty: string; type: string } = {
	difficulty: "beginner",
	type: "answer"
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
			break
	}
})

const startGame = () => {
	let input: HTMLInputElement
	let { numberOne, numberTwo, options, result } = setQuestion()

	selectedDifficulty.textContent = currentOptions.difficulty
	selectedType.textContent = currentOptions.type

	if (currentOptions.type === "answer") {
		answerTypeForm.hidden = false
		multipleTypeForm.hidden = true
	} else {
		answerTypeForm.hidden = true
		multipleTypeForm.hidden = false
	}

	questionElement.textContent = `${numberOne} 곱하기 ${numberTwo}는??`

	formElement.addEventListener("submit", function(e) {
		e.preventDefault()
		if (currentOptions.type === "answer") {
			input = answerTypeForm.querySelector("input") as HTMLInputElement
		} else {
			input = multipleTypeForm.querySelector("input[type=radio]:checked") as HTMLInputElement
		}

		console.log("input =", input)

		if (result === Number(input.value)) {
			resultElement.textContent = "딩동댕"
			if (currentOptions.type === "answer") {
				input.value = ""
				input.focus()
			} else {
				input.checked = false
			}
			let {
				numberOne: newNumberOne,
				numberTwo: newNumberTwo,
				options: newOptions,
				result: newResult
			} = setQuestion()
			numberOne = newNumberOne
			numberTwo = newNumberTwo
			options = newOptions
			result = newResult
			questionElement.textContent = `${numberOne} 곱하기 ${numberTwo}는??`
		} else {
			resultElement.textContent = "땡"
			if (currentOptions.type === "answer") {
				input.value = ""
				input.focus()
			} else {
				input.checked = false
			}
		}
	})
}

const checkStepOptions = () => {
	const difficulty = (document.querySelector("input[name=difficulty]:checked") as HTMLInputElement)
		.value
	const type = (document.querySelector("input[name=type]:checked") as HTMLInputElement).value
	return { difficulty, type }
}

const setQuestion: () => {
	numberOne: number
	numberTwo: number
	options: number[]
	result: number
} = () => {
	let numberOne: number = Math.ceil(Math.random() * 9)
	let numberTwo: number = Math.ceil(Math.random() * 9)
	let result: number = numberOne * numberTwo
	let options: number[] = createOptions(result)
	currentOptions.type === "multiple" ? (options = createOptions(result)) : (options = [])

	console.log("numberOne =", numberOne)
	console.log("numberTwo =", numberTwo)
	console.log("options =", options)
	console.log("result =", result)

	return { numberOne, numberTwo, options, result }
}

const createOptions: (result: number) => number[] = result => {
	let optionsCandidate: number[] = [
		Math.abs(result - Math.floor(Math.random() * 9)),
		Math.abs(result - Math.floor(Math.random() * 9)),
		Math.abs(result + Math.floor(Math.random() * 9)),
		Math.abs(result + Math.floor(Math.random() * 9)),
		result
	]
	let options: number[] = []
	for (let i: number = 0; optionsCandidate.length > 0; i++) {
		options = options.concat(
			optionsCandidate.splice(Math.floor(Math.random() * optionsCandidate.length), 1)
		)
	}

	let optionsElements: NodeListOf<HTMLLIElement> = multipleTypeForm.querySelectorAll("li")
	let buttonSubmit: HTMLButtonElement = multipleTypeForm.querySelector(
		"button"
	) as HTMLButtonElement

	optionsElements.forEach((optionElement, index) => {
		const labelElement: HTMLLabelElement = optionElement.querySelector("label") as HTMLLabelElement
		const inputElement: HTMLInputElement = optionElement.querySelector("input") as HTMLInputElement
		labelElement.textContent = String(options[index])
		inputElement.value = String(options[index])

		optionElement.addEventListener("click", () => {
			buttonSubmit.click()
		})
	})

	return options
}

// shuffle
