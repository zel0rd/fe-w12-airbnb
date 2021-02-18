// function mouseClick() {
//     contents.classList.toggle("containerShow");
// }

let btn = document.querySelector(".userBtn")
let contents = document.querySelector(".containerHidden");
let containerTitle = document.querySelector(".containerTitle");

// btn.addEventListener("mouseover", mouseenter);
// btn.addEventListener("mouseleave", mouseleave);

window.addEventListener("click", (event) => {
    // console.log(contents.lastElementChild)
    console.log(event.target.id)
    if (event.target.matches('#userBtn')) {
        contents.classList.add("containerShow");
    } else if(!event.target.matches('#userBtn') && contents.classList.contains("containerShow")) {
        contents.classList.toggle("containerShow");
    } else if(event.target.matches("containerHidden__item")){
        console.log("A")
    }
})