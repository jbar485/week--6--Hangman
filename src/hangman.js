export class Hangman {
  constructor(inputLetter) {
    this.dinoArray = [],
    this.underArray = [],
    this.inputLetter = inputLetter
  }

  addToArray(dino) {
    this.dinoArray = dino;
  }

  addToUnder() {
    for (var i = 0; i < this.dinoArray.length; i++) {
      this.underArray.push("_");
    }
  }

  play() {
    for (var i = 0; i < this.dinoArray.length; i++) {
      if (this.dinoArray[i].includes(this.inputLetter)) {
        this.underArray[i] = this.inputLetter;
        console.log(this.underArray[i]);
      }else {
        return this.underArray[i]
      }
    }
  }
}
