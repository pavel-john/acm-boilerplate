import fs from 'fs';
import * as parseData from './parseData';

const readFilePromise = () => new Promise((resolve, reject) => {
  fs.readFile('data/numbers.txt', 'utf8', (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  })
});

readFilePromise()
  .then(parseData.splitByLine)
  .then(lines => lines.map(line => parseData.parseNumbersFromLine(line)))
  .then(console.log);
