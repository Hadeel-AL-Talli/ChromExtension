function saveLead(){
    console.log("button clicked ")
}

let myLeads = []
const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function(){
   // console.log("button clicked from event listener")

   myLeads.push(inputEl.value)
   console.log(myLeads)
})

for(let i =0 ; i<myLeads.length; i++){
    
}