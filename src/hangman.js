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
      for (var j = 0; j < this.underArray.length; j++) {
        if (this.inputLetter === this.dinoArray[i]) {
          this.underArray .push(this.inputLetter)
          console.log('test')
          // let trash = this.inputLetter;
          // this.underArray[j] = trash;
        }
      }
    }
  }
}
