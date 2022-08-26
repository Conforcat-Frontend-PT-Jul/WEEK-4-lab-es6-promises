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
  }, (error) => console.log(error));

*/

// Iteration 1 - using callbacks
// ...


getInstruction("mashedPotatoes", 0, function (step1){
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

  getInstruction("mashedPotatoes", 1, function (step2){
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  
    getInstruction("mashedPotatoes", 2, function (step3){
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
    
      getInstruction("mashedPotatoes", 3, function (step4){
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
      
        getInstruction("mashedPotatoes", 4, function (step5){
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
        
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;

          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");

        
        
        }, function (error) {
          console.log(error)
        });
      
      
      
      
      }, function (error) {
        console.log(error)
      });
    
    
    }, function (error) {
      console.log(error)
    });
  
  
  }, function (error) {
    console.log(error)
  });


}, function (error) {
  console.log(error)
});



// Iteration 2 - using promises
// ...

const promise1 = obtainInstruction ("steak", 0);
const promise2 = obtainInstruction ("steak", 1);
const promise3 = obtainInstruction ("steak", 2);
const promise4 = obtainInstruction ("steak", 3);
const promise5 = obtainInstruction ("steak", 4);
const promise6 = obtainInstruction ("steak", 5);
const promise7 = obtainInstruction ("steak", 6);
const promise8 = obtainInstruction ("steak", 7);


promise1.then(function(done){
  document.querySelector("#steak").innerHTML += `<li>${done}</li>`;

  promise2.then(function(done2){
    document.querySelector("#steak").innerHTML += `<li>${done2}</li>`;
  
    promise3.then(function(done3){
      document.querySelector("#steak").innerHTML += `<li>${done3}</li>`;
    
      promise4.then(function(done4){
        document.querySelector("#steak").innerHTML += `<li>${done4}</li>`;
      
        promise5.then(function(done5){
          document.querySelector("#steak").innerHTML += `<li>${done5}</li>`;
        
          promise6.then(function(done6){
            document.querySelector("#steak").innerHTML += `<li>${done6}</li>`;
          
            promise7.then(function(done7){
              document.querySelector("#steak").innerHTML += `<li>${done7}</li>`;
            
              promise8.then(function(done8){
                document.querySelector("#steak").innerHTML += `<li>${done8}</li>`;
              
                document.querySelector("#steakImg").removeAttribute("hidden");

              
              });
            
            });
          
          });
        });
      
      });
    
    });
  
  });
});

// Iteration 3 using async/await
// ...

async function makeBroccoli (){
document.getElementById ("broccoli").innerHTML += `<li>${await obtainInstruction("broccoli",0)}</li>`;
document.getElementById ("broccoli").innerHTML += `<li>${await obtainInstruction("broccoli",1)}</li>`;
document.getElementById ("broccoli").innerHTML += `<li>${await obtainInstruction("broccoli",2)}</li>`;
document.getElementById ("broccoli").innerHTML += `<li>${await obtainInstruction("broccoli",3)}</li>`;
document.getElementById ("broccoli").innerHTML += `<li>${await obtainInstruction("broccoli",4)}</li>`;
document.getElementById ("broccoli").innerHTML += `<li>${await obtainInstruction("broccoli",5)}</li>`;
document.getElementById ("broccoli").innerHTML += `<li>${await obtainInstruction("broccoli",6)}</li>`;
document.getElementById ("broccoli").innerHTML += `<li>${await obtainInstruction("broccoli",7)}</li>`;

document.querySelector("#broccoliImg").removeAttribute("hidden");

}

makeBroccoli ();

// Bonus 2 - Promise all
// ...

