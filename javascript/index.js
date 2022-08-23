// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

/*// Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));
  */



// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
},(error) => console.log(error));


// Iteration 2 - using promises

obtainInstruction('steak',0)
  .then((instruction) => {
  document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
  return obtainInstruction('steak',1)
   })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction('steak',2)
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction('steak',3)
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction('steak',4)
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction('steak',5)
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction('steak',6)
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction('steak',7)
  })
  .catch((error) => console.log(error))
  .finally(() => {
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`,
    document.getElementById("steakImg").removeAttribute("hidden")});


// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    for (let i = 0; i < broccoli.length; i++){
      let instruction= await obtainInstruction('broccoli',i);
      document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
    }
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
    document.getElementById("broccoliImg").removeAttribute("hidden");

  } catch (err) {
    console.log(err);
  }
}
makeBroccoli();

// Bonus 2 - Promise all

async function makeBSprouts() {

  try {
    const promisesArr = [];

    for ( let i = 0; i < brusselsSprouts.length; i++) {
      promisesArr.push(await obtainInstruction("brusselsSprouts", i));
    }

    Promise.all(promisesArr)
      .then(instruction => {
        instruction.forEach(instruction =>{
          document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction}</li>`;
        })
        document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
      })
      document.getElementById("brusselsSproutsImg").removeAttribute("hidden");

    } catch (err) {
      console.log(err);
    }
}

makeBSprouts();
