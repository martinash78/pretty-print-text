const fs = require('fs');

const rawText = require('./rawText');
const outputFile = 'output.txt';

fs.writeFile(`./${outputFile}`, rawText, err => {
	if (err) {
		console.error(err)
	}

	console.log(`File written to ${outputFile}`)
})
