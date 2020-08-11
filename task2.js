const readline = require('readline');
const MAX_VALUE = 1000;

function showResult(num, isSimple) {
  const result = isSimple ? 'простое' : 'составное';
  console.info(`Число ${num} - ${result}.`);
  return num;
}

function showNumberIsSimple(value) {
  let isSimple = true;

  if(typeof value !== 'number' || isNaN(value) || value > MAX_VALUE || value < 2) {
    console.info('Неверные данные');
    return value;
  }

  for(let i = 2; i < value; i++) {
    if( value%i === 0 ) {
      isSimple = false;
      break;
    }
  }

  showResult(value, isSimple);

  return value;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Введите число: ", (answer) => {
  showNumberIsSimple(+answer);
  rl.close();
});