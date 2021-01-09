// const panels = document.querySelectorAll(".panel");

// panels.forEach((panel) => {
//   panel.addEventListener("click", () => {
//     removeClasses();
//     panel.classList.add("active");
//   });
// });
// function removeClasses() {
//   panels.forEach((panel) => {
//     panel.classList.remove("active");
//   });
// }
// console.log(panels[0]);


  
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}