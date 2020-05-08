import "./index.scss"

const backgroundImgae: any = {
	"times-table": require("./assets/img/times-table.png").default,
	"number-baseball": require("./assets/img/number-baseball.png").default,
	"pair-card": require("./assets/img/pair-card.png").default,
	"tic-tac-toe": require("./assets/img/tic-tac-toe.png").default,
	rps: require("./assets/img/rps.png").default
}

document.addEventListener("DOMContentLoaded", () => {
	const body: HTMLElement = document.querySelector("body") as HTMLElement
	const watch: HTMLTimeElement = document.querySelector(".real-time") as HTMLTimeElement
	const games: HTMLDivElement = document.querySelector(".games") as HTMLDivElement
	const gameList: NodeListOf<Element> = games.querySelectorAll(".item")
	const iframeGame: HTMLElement = document.getElementById("selectedGame") as HTMLElement
	const startKey: HTMLDivElement = document.querySelector(".keyMap.enter") as HTMLDivElement

	setInterval(() => {
		const realtime: string = new Date().toISOString()
		const hours: string =
			new Date().getHours() < 12
				? `AM ${new Date().getHours()}`
				: `PM ${new Date().getHours() - 12}`
		const mins: string | number =
			new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()
		watch.setAttribute("datetime", realtime)
		watch.textContent = `${hours} : ${mins}`
	}, 1000)

	gameList.forEach((item: any) => {
		item.addEventListener("focus", () => {
			startKey.classList.remove("disabled")
		})
		item.addEventListener("blur", () => {
			startKey.classList.add("disabled")
		})

		const imageElement: HTMLImageElement = item.querySelector("img")
		const itemBg: string = item.dataset.game
		itemBg ? imageElement.setAttribute("src", backgroundImgae[itemBg]) : null
	})

	const handleEnterKey: (e: any) => void = e => {
		if (e.keyCode === 13) openGame()
	}
	document.addEventListener("keydown", handleEnterKey)

	const handleEscKey: (e: any) => void = e => {
		if (e.keyCode === 27) closeGame()
	}

	const openGame: () => void = () => {
		const focusedGame: HTMLElement = games.querySelector(".item:focus") as HTMLElement
		if (!focusedGame) return
		const focusedGameUrl: any = window.location.origin + "/web-game/" + focusedGame.dataset.game
		console.log("focusedGameUrl =", focusedGameUrl)
		iframeGame.setAttribute("src", focusedGameUrl)
		body.classList.add("is-playing-game")
		document.removeEventListener("keydown", handleEnterKey)
		document.addEventListener("keydown", handleEscKey)
	}

	const closeGame: () => void = () => {
		iframeGame.setAttribute("src", "/")
		body.classList.remove("is-playing-game")
		document.removeEventListener("keydown", handleEscKey)
		document.addEventListener("keydown", handleEnterKey)
	}
})
