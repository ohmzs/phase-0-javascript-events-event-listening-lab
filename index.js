// function addingEventListener() {
// }






// //select elements
// const grandparent = document.getElementById('grandparent')
// const parent = document.querySelector('#parent')
// const child = document.querySelector('#')

// // addEventListener
// //grandparent.addEventListener('click', e=> console.log(e.target))
// parent.addEventListener('click', handleParent)
// child.addEventListener('mouseover', () => child.style.backgroundColor = 'orange')
// button.addEventListener('click', e => handleButtonClick(e))

// // document.addEventListener('mouseover',onmousemove)





// //callbacks
// function handleParent(e) {
//     console.log(e)
// }

// const handleButtonClick = e => {
//         //console.log(e)
//     if(button.textContent === "Press Me"){
//     e.target.textContent = "Swapped Text!"
//     } else {
//         e.target.textContent = "Press Me"
//     }
// }

// // onmousemove = function(e){console.log("mouse location:", e.clientX, e.clientY)}//

// //Array.from(nodeList)


   
const input = document.querySelector('input');

function addingEventListener() {
  input.addEventListener('click', function(event) {
    return "clicked"
  });
}