import "./index.scss"

const backgroundImgae: any = {
	"times-table": require("./assets/img/times-table.png").default,
	"number-baseball": require("./assets/img/number-baseball.png").default,
	"pair-card": require("./assets/img/pair-card.png").default,
	"tic-tac-toe": require("./assets/img/tic-tac-toe.png").default,
	rps: require("./assets/img/rps.png").default
}

document.addEventListener("DOMContentLoaded", () => {
	const main: HTMLElement = document.querySelector("main") as HTMLElement
	const watch: HTMLTimeElement = document.querySelector(".real-time") as HTMLTimeElement
	const games: HTMLDivElement = document.querySelector(".games") as HTMLDivElement
	const gameList: NodeListOf<Element> = games.querySelectorAll(".item")
	const iframeGame: HTMLElement = document.getElementById("selectedGame") as HTMLElement

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
		const imageElement: HTMLImageElement = item.querySelector("img")
		const itemBg: string = item.dataset.game
		itemBg ? imageElement.setAttribute("src", backgroundImgae[itemBg]) : null
	})

	const handleEnterKey: (e: any) => void = e => {
		if (e.keyCode === 13) openGame()
	}

	document.addEventListener("keydown", handleEnterKey)

	const openGame: () => void = () => {
		const focusedGame: HTMLElement = games.querySelector(".item:focus") as HTMLElement
		if (!focusedGame) return
		const focusedGameUrl: any = window.location.origin + "/" + focusedGame.dataset.game
		iframeGame.setAttribute("src", focusedGameUrl)
		document.removeEventListener("keydown", handleEnterKey)
		main.classList.add("is-playing-game")
	}

	const closeGame: () => void = () => {}

	// iframe action
	const iframeGameWindow: Window = (<HTMLIFrameElement>iframeGame).contentWindow!
	// iframeGameWindow.addEventListener("DOMContentLoaded", () => {
	// 	const gameList: NodeListOf<Element> = iListWindow.document.querySelectorAll(".list")
	// 	gameList.forEach(item => {
	// 		item.addEventListener("click", e => {
	// 			const target: any = e.target!
	// 			const selectedContentUrl = target.dataset.url
	// 			iframeGame.setAttribute("src", selectedContentUrl)
	// 		})
	// 	})
	// })
})
