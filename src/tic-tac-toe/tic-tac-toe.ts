;(function(): void {
	const table: HTMLTableElement = document.createElement('table')
	const rows: HTMLTableRowElement[] = []
	const cells: HTMLTableCellElement[][] = []
	let t3Turn: 'O' | 'X' = 'X'
	const t3Result: HTMLDivElement = document.createElement('div')
	let count: number = 0

	function callback(event: MouseEvent) {
		const rowIndex: number = rows.indexOf(
			(event.currentTarget as HTMLTableCellElement)
				.parentNode as HTMLTableRowElement
		)
		const cellIndex: number = cells[rowIndex].indexOf(
			event.currentTarget as HTMLTableCellElement
		)
		count++

		if (cells[rowIndex][cellIndex].textContent !== '') {
			console.log('빈 칸이 아닙니다.')
		} else {
			cells[rowIndex][cellIndex].textContent = t3Turn

			let full: boolean = false
			if (
				cells[rowIndex][0].textContent === t3Turn &&
				cells[rowIndex][1].textContent === t3Turn &&
				cells[rowIndex][2].textContent === t3Turn
			) {
				full = true
			}
			if (
				cells[0][cellIndex].textContent === t3Turn &&
				cells[1][cellIndex].textContent === t3Turn &&
				cells[2][cellIndex].textContent === t3Turn
			) {
				full = true
			}
			if (
				cells[0][0].textContent === t3Turn &&
				cells[1][1].textContent === t3Turn &&
				cells[2][2].textContent === t3Turn
			) {
				full = true
			}
			if (
				cells[0][2].textContent === t3Turn &&
				cells[1][1].textContent === t3Turn &&
				cells[2][0].textContent === t3Turn
			) {
				full = true
			}
			if (full) {
				t3Result.textContent = `${t3Turn}님이 승리!`
				t3Turn = 'X'
				cells.forEach(row => {
					row.forEach(cell => {
						cell.textContent = ''
					})
				})
			} else if (count === 9) {
				t3Result.textContent = `무승부!!`
				t3Turn = 'X'
				cells.forEach(row => {
					row.forEach(cell => {
						cell.textContent = ''
					})
				})
			} else {
				t3Turn = t3Turn === 'O' ? 'X' : 'O'
			}
		}
	}

	for (let i: number = 1; i <= 3; i++) {
		const row: HTMLTableRowElement = document.createElement('tr')
		rows.push(row)
		cells.push([])
		for (let j: number = 1; j <= 3; j++) {
			const cell: HTMLTableCellElement = document.createElement('td')
			cell.addEventListener('click', callback)
			cells[i - 1].push(cell)
			row.appendChild(cell)
		}
		table.appendChild(row)
	}
	const contentWrap: HTMLDivElement = document.querySelector(
		'.content.tic-tac-toe > div'
	) as HTMLDivElement
	contentWrap.appendChild(table)
	contentWrap.appendChild(t3Result)
})()
