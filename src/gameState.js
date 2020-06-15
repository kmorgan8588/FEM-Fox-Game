const gameState = {
  current: "INIT",
  clock: 1,
  wakeTime: -1,
  tick() {
    this.clock++;
    console.log(`Clock ${this.clock}`);
    return this.clock;
  },
  handleUserAction(icon) {
    if (["SLEEP", "FEEDING", "CELEBRATING", "HATCING"].includes(this.current)) {
      return;
    }

    if (this.current === "INIT" || this.current === "DEAD") {
      this.startGame();
      return;
    }

    switch (icon) {
      case "weather":
        this.changeWeather();
        break;
      case "poop":
        this.cleanUpPoop();
        break;
      case "fish":
        this.feed();
        break;
    }
  },
  changeWeather() {
    console.log("change weather");
  },
  cleanUpPoop() {
    console.log("clean poopoo");
  },
  feed() {
    console.log("feast on fish");
  },
  startGame() {
    console.log("hatching");
    this.current = "HATCHING";
    this.wakeTime = this.clock + 4;
  },
  wake() {
    console.log("wake up!");
    this.current = "IDLING";
    this.wakeTime = -1;
  },
};

export const handleUserAction = gameState.handleUserAction.bind(gameState);
export default gameState;
