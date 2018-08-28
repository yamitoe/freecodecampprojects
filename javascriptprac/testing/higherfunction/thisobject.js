//testing objects with "this"
let protoRabbit = {
    speak: function(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    }
  };
  let killerRabbit = Object.create(protoRabbit);
  killerRabbit.type = "killer";
  killerRabbit.speak("SKREEEE!");
  // → The killer rabbit says 'SKREEEE!'

  //shorthand form 
  let protoRabbit = {
      //not  function value //makes object proties + function value
    speak(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    }
  };
  let killerRabbit = Object.create(protoRabbit);
  killerRabbit.type = "killer";
  killerRabbit.speak("SKREEEE!");
  // → The killer rabbit says 'SKREEEE!'

  //what a constructor does
  function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
  }

  //^^ equiv to this
  let weirdRabbit = new Rabbit("weird");
  //new keyword is treated as an constructor in javascript