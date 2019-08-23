const generateRandomNumber = (min, max, exclude) => {
  const Min = Math.ceil(min);
  const Max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  
  if(randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  }

  return randomNumber;
}

export default generateRandomNumber;