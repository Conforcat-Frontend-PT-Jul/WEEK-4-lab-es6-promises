// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

/*
// Out of sync
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
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        } ,(error) => console.log(error));

      },(error) => console.log(error)) ;
    },(error) => console.log(error)) ; 
  },(error) => console.log(error)) ;
},(error) => console.log(error)) ;

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1);
    
  })
  
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 2);
    
  })
  
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    
    return obtainInstruction('steak', 3);
  })
  
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    
    return obtainInstruction('steak', 4);
  })
  
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    
    return obtainInstruction('steak', 5);
  })

  .finally( () => {
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  })

// Iteration 3 using async/await

/*
async function makeBroccoli() {
  let recipePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // Get the instruction string
      let instruction;

      if (food === "mashedPotatoes") {
        instruction = mashedPotatoes[step];
      }
      else if (food === "steak") {
        instruction = steak[step];
      }
      else if (food === "brusselsSprouts") {
        instruction = brusselsSprouts[step];
      }
      else if (food === "broccoli") {
        instruction = broccoli[step];
      };
      

      // Resolve or reject the promise
      if (!instruction) {
        reject("Instruction step does not exist!")
      }
      else {
        resolve(instruction);
      }

    }, Math.floor(Math.random() * 1000));
  });

  document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>` = await recipePromise;
  document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>` = await recipePromise;
  document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>` = await recipePromise;
  document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>` = await recipePromise;
  document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>` = await recipePromise;

}

makeBroccoli()
*/

// Bonus 2 - Promise all

const brusselsPromise1 = obtainInstruction('brusselsSprouts', 0);
const brusselsPromise2 = obtainInstruction('brusselsSprouts', 1);
const brusselsPromise3 = obtainInstruction('brusselsSprouts', 2);
const brusselsPromise4 = obtainInstruction('brusselsSprouts', 3);
const brusselsPromise5 = obtainInstruction('brusselsSprouts', 4);


Promise.all([brusselsPromise1, brusselsPromise2, brusselsPromise3, brusselsPromise4, brusselsPromise5 ]).then(function(values)  
{
  console.log(values)
  for(let i=0; i<values.length; i++)
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[i]}</li>`
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
}
);
// ...