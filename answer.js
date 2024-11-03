const fs = require('fs');

async function run(urlString) {
	const response = await fetch(urlString);
	const content = await response.text();

	// tach noi dung table
	const newContent = content.match(/<table[\s\S]*<\/table>/gim);

	const filename = 'answer.html';
	const stream = fs.createWriteStream(filename);
	const script = `	<script>
		const table = document.querySelector('table');
		const rows = table.rows;
		const arrayModified = [];
		let maxX = 0;
		if (rows.length > 0) {
			for (let index = 1; index < rows.length; index++) {
				const row = rows[index];
				const cells = row.cells
				if (cells.length === 3) {
					const contentCell = {}
					for (let j = 0; j < cells.length; j++) {
						contentCell.x = +cells[0].innerText
						contentCell.text = cells[1] ? cells[1].innerText.toUpperCase() : ''
						contentCell.y = +cells[2].innerText
					}
					if (contentCell.x > maxX) {
						maxX = contentCell.x
					}
					arrayModified.push(contentCell)
				}
			}
		}

		if (arrayModified.length > 0) {
			arrayModified.sort((a, b) => {
				if (a.y !== b.y) {
					return b.y - a.y;
				} else {
					return a.x - b.x;
				}
			})
		}

		let result = ""

		for (let index = 0; index < arrayModified.length; index++) {
			const currentElement = arrayModified[index];
			const nextElement = arrayModified[index + 1];
			if (currentElement.y < 0 && currentElement.x < 0) {
				break;
			}

			if (currentElement.y === nextElement?.y) {
				if (currentElement.x > maxX) continue
				if (nextElement?.y === currentElement.y) {
					result += currentElement.text
					continue;
				}
			}
			if (currentElement.y > nextElement?.y) {
				if (currentElement?.y === arrayModified[index - 1]?.y) {
					result += currentElement.text
					result += "\\n"
					continue
				} else {
					if (currentElement.text) result += currentElement.text
					continue
				}
			}
			if (currentElement.y === 0) {
				if (currentElement.x > maxX) continue
				result += currentElement.text
			}
		}
		console.log(result);

	</script>`;
	stream.once('open', () => {
		stream.write('<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body>' + newContent + script + '</body></html>');
		stream.end();
	});
}

// run('https://docs.google.com/document/d/e/2PACX-1vRMx5YQlZNa3ra8dYYxmv-QIQ3YJe8tbI3kqcuC7lQiZm-CSEznKfN_HYNSpoXcZIV3Y_O3YoUB1ecq/pub');
run('https://docs.google.com/document/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub');

// https://docs.google.com/document/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub
