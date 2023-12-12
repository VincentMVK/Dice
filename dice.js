function erJakobGay ([]){
  if(erJakobGay.length ===0){
    return undefined; 
  }
  const jakob = Math.floor(Math.random()* erJakobGay.lenght);
  return erJakobGay[jakob]
}

const gay =['meget', 'nei', 'ikke serlig', 'helt ærlig veldig hard homo'];
const picker=erJakobGay(gay);
console.log(picker);