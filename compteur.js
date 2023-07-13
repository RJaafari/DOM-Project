var plus = document.querySelectorAll(".plus")
var moins = document.querySelectorAll(".moins")
var count = document.querySelector(".nbre")
var total = document.querySelector(".total")
var heart = document.querySelectorAll(".heart")
for(j=0;j<heart.length;j++){
heart[j].addEventListener("click",function(){
    this.style.color = "red"
})}
for(i=0;i<plus.length;i++){
plus[i].addEventListener("click",function(){
    var parent = this.parentNode
    var h = parent.querySelector(".nbre")
    var numb = Number(h.textContent)
    numb = numb + 1
    h.textContent = numb
    var x = parent.parentNode
    var price = x.querySelector(".prix")
    total.textContent = Number(total.textContent) + Number(price.textContent)
})
}
for(i=0;i<moins.length;i++){
moins[i].addEventListener("click",function(){
    var parent = this.parentNode
    h = parent.querySelector(".nbre")
    var numb = Number(h.textContent)
    if(numb>0){
    numb = numb - 1
    h.textContent = numb
    var x = parent.parentNode
    var price = x.querySelector(".prix")
    total.textContent = Number(total.textContent) - Number(price.textContent)
}
})}
