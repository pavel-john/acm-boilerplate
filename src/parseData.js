import os from 'os';

export const splitByLine = data => data.split(os.EOL);

export const parseNumbersFromLine = string => {
  const arr = string.split(' ');
  return arr.map(item => parseInt(item));
}
