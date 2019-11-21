export class HangmanService {
  async getHangmanAnswer(name) {
    try {
      let answer = await fetch(`http://dinoipsum.herokuapp.com/api/?format=json`);
      let dinoIpsum = await answer.json();
      return dinoIpsum;
    }catch(error) {
      alert("There was an error:" + error.message);
    }
  }
}
