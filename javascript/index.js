// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction('mashedPotatoes', 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction('mashedPotatoes', 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction('mashedPotatoes', 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction('mashedPotatoes', 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          mashedPotatoes.push("Mashed potatoes are ready!");
          getInstruction('mashedPotatoes', 5, (step6) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step6}</li>`;
            document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
          });
        });  
      });
    });
  });
});

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 1);
  })
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 2);
  })
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('steak', 3);
  })
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction('steak', 4);
  })
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction('steak', 5);
  })
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction('steak', 6);
  })
  .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    return obtainInstruction('steak', 7);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally( () => {
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  });
 
// Iteration 3 using async/await
async function makeBroccoli() {
  try{
    for (i=0; i < 7; i++) {
      const instruction = await obtainInstruction('broccoli', i);
      document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
    }

    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");

  } catch (error) {
    console.log(error);
  }
}

makeBroccoli();

// Bonus 2 - Promise all
const promiseOfStep1 = obtainInstruction('brusselsSprouts', 0);
const promiseOfStep2 = obtainInstruction('brusselsSprouts', 1);
const promiseOfStep3 = obtainInstruction('brusselsSprouts', 2);
const promiseOfStep4 = obtainInstruction('brusselsSprouts', 3);
const promiseOfStep5 = obtainInstruction('brusselsSprouts', 4);
const promiseOfStep6 = obtainInstruction('brusselsSprouts', 5);
const promiseOfStep7 = obtainInstruction('brusselsSprouts', 6);
const promiseOfStep8 = obtainInstruction('brusselsSprouts', 7);

Promise.all([
  promiseOfStep1,
  promiseOfStep2,
  promiseOfStep3,
  promiseOfStep4,
  promiseOfStep5,
  promiseOfStep6,
  promiseOfStep7,
  promiseOfStep8
]).then((steps) => {
  steps.forEach(instruction => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction}</li>`;
  });
  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
});

