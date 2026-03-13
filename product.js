let sidenav = document.getElementById("sidenav")
let closenav = document.getElementById("closenav")
let menuicon = document.getElementById("menuicon")

menuicon.addEventListener("click", function(){
    sidenav.style.right = "0"
})

closenav.addEventListener("click", function(){
    sidenav.style.right = "-50%"
})

//prodouct search box
let prodouctcontainer=document.getElementById("prodouct-container")
let search=document.getElementById("search")
let productList= prodouctcontainer.querySelectorAll("div")
console.log(productList)

search.addEventListener("keyup",function(){
    let enteredValue= event.target.value.toUpperCase()
    for(count=0;count<productList.length;count=count+1)
    {
     if(productList[count].textContent.toUpperCase().indexOf(enteredValue)<0){
        productList[count].style.display="none"
     }
      else{
        productList[count].style.display="block"
      }
    }
})