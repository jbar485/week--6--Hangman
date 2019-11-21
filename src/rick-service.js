export class WhichRick {
  async getRick() {
    let randomNumber = Math.floor(Math.random() * (19 - 1) + 1);
    try {
      let randomRick = await fetch (`https://rickandmortyapi.com/api/character/${randomNumber}`);
      let randomChoice = await randomRick.json();
      return randomChoice;
    }catch(error) {
      alert("There was an error:" + error.message);
    }
  }
}
