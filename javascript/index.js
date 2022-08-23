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

getInstruction("mashedPotatoes", 0, (callback) => {
  console.log(callback);
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${callback}</li>`;
  getInstruction("mashedPotatoes", 1, (callback) => {
    console.log(callback);
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${callback}</li>`;
    getInstruction("mashedPotatoes", 2, (callback) => {
      console.log(callback);
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${callback}</li>`;
      getInstruction("mashedPotatoes", 3, (callback) => {
        console.log(callback);
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${callback}</li>`;
        getInstruction("mashedPotatoes", 4, (callback) => {
          console.log(callback);
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${callback}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
            document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error)); //step 4
      }, (error) => console.log(error)); //step 3
    }, (error) => console.log(error)); // step 2
  }, (error) => console.log(error)); //step 1
}, (error) => console.log(error)); // step 0


// Iteration 2 - using promises

obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction('steak', 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak', 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak', 5);
  }) 
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak', 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction('steak', 7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
  })
  .finally(() => {
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch((error) => {
        console.error(error);
  })

// Iteration 3 using async/await
async function makeBroccoli() {
  for (let i= 0 ; i<broccoli.length; i++){
    document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction("broccoli",[i])}</li>`
    }
  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!.</li>`;
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}
makeBroccoli();

// Bonus 2 - Promise all
let p0 = Promise.resolve(obtainInstruction('brusselsSprouts', 0));
let p1 = Promise.resolve(obtainInstruction('brusselsSprouts', 1));
let p2 = Promise.resolve(obtainInstruction('brusselsSprouts', 2));
let p3 = Promise.resolve(obtainInstruction('brusselsSprouts', 3));
let p4 = Promise.resolve(obtainInstruction('brusselsSprouts', 4));
let p5 = Promise.resolve(obtainInstruction('brusselsSprouts', 5));
let p6 = Promise.resolve(obtainInstruction('brusselsSprouts', 6));
let p7 = Promise.resolve(obtainInstruction('brusselsSprouts', 7));
Promise.all([p0,p1,p2,p3,p4,p5,p6,p7]).then(values =>{
  console.log(values);
  values.forEach(item => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${item}</li>`
  })
  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
}).catch(e=>{
  console.log(e)
});