// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
//  getInstruction("mashedPotatoes", 0, (step1) => {
//    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//  }, (error) => console.log(error));
//  
//  getInstruction("mashedPotatoes", 1, (step2) => {
//    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
//  }, (error) => console.log(error));
  
//  getInstruction("mashedPotatoes", 2, (step3) => {
//    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
//  }, (error) => console.log(error));
  
//  getInstruction("mashedPotatoes", 3, (step4) => {
//    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
//  }, (error) => console.log(error));
  
//  getInstruction("mashedPotatoes", 4, (step5) => {
//    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
//  }, (error) => console.log(error));

//------------------------------------------------------------------START WORK----------------------------------------------
// Iteration 1 - using callbacks (function copied from the indications) Done same as lesson 
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;

  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
          //document.querySelector("#mashedPotatoesImg").removeAttribute("hidden"); //before bonus
          
          }, (error) => console.log(error)); // step4 
        }, (error) => console.log(error)); // step3  
      }, (error) => console.log(error)); // step2
    }, (error) => console.log(error)); // step 1
  }, (error) => console.log(error)); // step 0

// Iteration 2 - using promises
// done 1 by 1 with .then + .catch + .finally
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction('steak', 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('steak', 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction('steak', 5);
  }) 
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction('steak', 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction('steak', 7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    return obtainInstruction('steak', 8);
  }) 
  .catch((error) => {
        console.log(error);
  })
  .finally(() => {
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
    //document.querySelector("#steakImg").removeAttribute("hidden"); //before bonus
  });

// Iteration 3 using async/await
// ask why cannot do 1 by 1 with await, how can I do it one by one? 
async function makeBroccoli() {
  try{
    //await obtainInstruction('broccoli', 0); // if I do an arrow funct doesnt let me retrieve data from data
    //document.querySelector("#broccoli").innerHTML += `<li>${0}</li>`;
    for (i=0; i < broccoli.length; i++) {
      const step = await obtainInstruction('broccoli', i);
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    }
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
    //document.querySelector("#broccoliImg").removeAttribute("hidden"); //before bonus

  } catch (error) {
        console.log(error);
  }
}
makeBroccoli();

// Bonus 1 - Eliminate the image hidden attribute (DONE) 

// Bonus 2 - Promise all
const pr1 = obtainInstruction('brusselsSprouts', 0);
const pr2 = obtainInstruction('brusselsSprouts', 1);
const pr3 = obtainInstruction('brusselsSprouts', 2);
const pr4 = obtainInstruction('brusselsSprouts', 3);
const pr5 = obtainInstruction('brusselsSprouts', 4);
const pr6 = obtainInstruction('brusselsSprouts', 5);
const pr7 = obtainInstruction('brusselsSprouts', 6);
const pr8 = obtainInstruction('brusselsSprouts', 7);

Promise.all([pr1, pr2, pr3, pr4, pr5, pr6, pr7, pr8])
  .then((steps) => {
    steps.forEach(item => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${item}</li>`;
    });
  
  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  //document.querySelector("#brusselsSproutsImg").removeAttribute("hidden"); //before bonus
  
  });
  //.catch((error) => {
   // console.log(error)}); (me da error es decir no me corre en chrome porque?)
