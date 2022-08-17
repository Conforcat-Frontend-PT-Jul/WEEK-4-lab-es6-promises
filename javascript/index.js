// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*getInstruction("mashedPotatoes", 0, (step1) => {
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
  }, (error) => console.log(error));*/

// Iteration 1 - using callbacks
// ...
let masshedStep = 0;
getInstruction("mashedPotatoes", masshedStep, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  ++masshedStep;
  getInstruction("mashedPotatoes", masshedStep,(step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    ++masshedStep;
    getInstruction("mashedPotatoes", masshedStep,(step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      ++masshedStep;
      getInstruction("mashedPotatoes", masshedStep,(step3) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
          ++masshedStep;
          getInstruction("mashedPotatoes", masshedStep,(step4) => {
            document.querySelector("#mashedPotatoes"
            ).innerHTML += `<li>${step4}</li>`;
            ++masshedStep;
            document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
            document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
          },
          (error) => console.log(error));
        },
        (error) => console.log(error));
      },
      (error) => console.log(error));
    },
    (error) => console.log(error));
  },
  (error) => console.log(error)
);

// Iteration 2 - using promises
// ...
let steakStep = 0;
obtainInstruction("steak", steakStep)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", ++steakStep);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", ++steakStep);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", ++steakStep);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", ++steakStep);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", ++steakStep);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", ++steakStep);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", ++steakStep);
  })
  .finally(() => {
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch((err) => {
    console.log(err);
  });

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  try {
    let instruction = "";
    let step = 0;

    for (step; step < 7; ++step) {
      instruction = await obtainInstruction("broccoli", step);
      document.querySelector(
        "#broccoli"
      ).innerHTML += `<li>${instruction}</li>`;
    }

    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>Broccoli is ready!</li>`;

    document.querySelector("#broccoliImg").removeAttribute("hidden");

  } catch (err) {
    console.log(err);
  }
}

makeBroccoli();

// Bonus 2 - Promise all
// ...
const brusselsSproutsPromise0 = obtainInstruction("brusselsSprouts", 0);
const brusselsSproutsPromise1 = obtainInstruction("brusselsSprouts", 1);
const brusselsSproutsPromise2 = obtainInstruction("brusselsSprouts", 2);
const brusselsSproutsPromise3 = obtainInstruction("brusselsSprouts", 3);
const brusselsSproutsPromise4 = obtainInstruction("brusselsSprouts", 4);
const brusselsSproutsPromise5 = obtainInstruction("brusselsSprouts", 5);
const brusselsSproutsPromise6 = obtainInstruction("brusselsSprouts", 6);
const brusselsSproutsPromise7 = obtainInstruction("brusselsSprouts", 7);

Promise.all([
  brusselsSproutsPromise0,
  brusselsSproutsPromise1,
  brusselsSproutsPromise2,
  brusselsSproutsPromise3,
  brusselsSproutsPromise4,
  brusselsSproutsPromise5,
  brusselsSproutsPromise6,
  brusselsSproutsPromise7,
]).then((values) => {
  values.forEach((instr) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${instr}</li>`;
  });
  document.querySelector(
    "#brusselsSprouts"
  ).innerHTML += `<li>Brussels sprouts are ready!</li>`;
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
});
