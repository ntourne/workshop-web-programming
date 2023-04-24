function printPlayer() {
  const player = {
    name: "John",
    age: 30,
    country: "AR",
  };

  console.log("Step 4 - player ", player);
  //   console.log(
  //     `Step 4 - El jugador se llama ${player.name} y su edad es ${player.age}, y el país es ${player.country}`
  //   );
  //   console.log(
  //     "Step 4 - El jugador se llama " +
  //       player.name +
  //       "y su edad es " +
  //       player.age +
  //       ", y el país es ${player.country}"
  //   );
}

function printDate() {
  console.log("Step 2 - date is", new Date());
}

function execute() {
  console.log("Step 1");

  printDate();

  console.log("Step 3");

  printPlayer();
}
