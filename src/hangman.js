export class Hangman {  constructor(inputLetter) {
    this.dinoArray = [],
    this.underArray = [],
    this.inputLetter = inputLetter,
    this.counter = 0,
    this.color = false
  }

  addToArray(dino) {
    return this.dinoArray = dino;
  }

  addToUnder() {
    for (var i = 0; i < this.dinoArray.length; i++) {
      this.underArray.push("_");
    }
    return this.underArray
  }

  play() {
    this.color = false;

    if(this.dinoArray.includes(this.inputLetter)){
      this.counter += 0;
    }else{
      this.counter += 1;
    }

    for (var i = 0; i < this.dinoArray.length; i++) {
      if (this.inputLetter === this.dinoArray[i]) {
        this.underArray[i] = (this.inputLetter);
        this.color = true;
      }
    }
  }

}
