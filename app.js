let products = [

{
name:"Hamburguesa Mónaco",
price:18000,
img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
},

{
name:"Pizza Pepperoni",
price:25000,
img:"https://images.unsplash.com/photo-1548365328-8b849e0d88c1"
},

{
name:"Pasta Alfredo",
price:24000,
img:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9"
}

]

let cart=[]
let total=0

function renderMenu(){

let menu=document.getElementById("menu")

products.forEach((p,i)=>{

menu.innerHTML+=`

<div class="card">

<img src="${p.img}">

<div class="card-body">

<h4>${p.name}</h4>

<p>$${p.price}</p>

<button onclick="addToCart(${i})">Agregar</button>

</div>

</div>

`

})

}

function addToCart(i){

cart.push(products[i])

total+=products[i].price

renderCart()

}

function renderCart(){

let items=document.getElementById("cartItems")

items.innerHTML=""

cart.forEach(p=>{

items.innerHTML+=p.name+" $"+p.price+"<br>"

})

document.getElementById("total").innerText=total

}

function sendOrder(){

let msg="Hola quiero pedir:%0A"

cart.forEach(p=>{
msg+=p.name+" $"+p.price+"%0A"
})

msg+="%0ATotal: $"+total

window.open("https://wa.me/573XXXXXXXX?text="+msg)

}

renderMenu()
