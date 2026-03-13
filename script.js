let sidenav = document.getElementById("sidenav")
let closenav = document.getElementById("closenav")
let menuicon = document.getElementById("menuicon")

menuicon.addEventListener("click", function(){
    sidenav.style.right = "0"
})

closenav.addEventListener("click", function(){
    sidenav.style.right = "-50%"
})