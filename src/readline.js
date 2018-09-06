import fs from 'fs';
import readline from 'readline';

const processLine = line => {
  console.log('Line from file:', line);
};

const onFileClose = () => {
  console.log('end of run');
};

const run = () => {
  const lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('data.txt')
  });
  lineReader.on('line', processLine);
  lineReader.on('close', onFileClose);
  lineReader.prompt();
}

run();
