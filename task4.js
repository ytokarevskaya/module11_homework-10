function intervalPrint(start, end) {
  if (end < start) {
    console.error('Неверные данные');
  }
  let inputValue = start;
  const interval = setInterval(() => {
    if(inputValue <= end) {
      console.info(inputValue);
      inputValue++;
    } else {
      clearInterval(interval);
    }
  }, 1000);

  return interval;
}

intervalPrint(4, 45);