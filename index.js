function saveLead(){
    console.log("button clicked ")
}

let myLeads = []
const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
console.log(ulEl)

inputBtn.addEventListener("click", function(){
   // console.log("button clicked from event listener")

   myLeads.push(inputEl.value)
   //clear the input field 
   inputEl.value = ""
  renderLeads()
})



function renderLeads(){
    let listItem  = ""
for(let i =0 ; i<myLeads.length; i++){
    //add the item to the listItem var instead of ulEL.innerHtml 

    
   // ulEl.innerHTML += "<li>"+myLeads[i] + " </li>"
   listItem += "<li><a target='_blank' href=''>"+myLeads[i] + " </a></li>"



   // render the list item inside the ul using ulEL.innerHtml 
   ulEl.innerHTML = listItem


    //create element
  //const li =   document.createElement("li")
    //set text content 
  //  li.textContent = myLeads[i]
    // appened to ul 
  //  ulEl.append(li)
}
}

    
