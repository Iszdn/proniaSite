const sideBuscet=document.querySelector(".sideBuscet")
const addedBuscet = document.querySelector(".addedBuscet")
const openBuscet=document.getElementById("openBuscet")
const BuscetClose=document.querySelector(".side-Buscet-Close")
openBuscet.addEventListener('click',(e)=>{
  e.preventDefault()
  sideBuscet.classList.add("openBus")
})
BuscetClose.addEventListener('click',(e)=>{
  e.preventDefault()
  sideBuscet.classList.remove("openBus")
})
const productItemRow = document.querySelector(".productItemRow");

let busketArr = [];
if (getLocalStorage('Basket')) {
  busketArr = getLocalStorage('Basket')
  
}

function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
function creatCard(id, img_url, flowerTittle, flowerPrice) {
  const colFlowers = document.createElement("div");
  const imgCard = document.createElement("div");
  const img = document.createElement("img");
  img.setAttribute("src", img_url);
  const cardContent = document.createElement("div");
  const h2Title = document.createElement("h2");
  const priceBasket = document.createElement("div");
  const priceFlo = document.createElement("span");
  const addBasket = document.createElement("span");
  const addedBasket = document.createElement("a");
  const linkBusket = document.createTextNode("Busket");
  const starUL = document.createElement("span");
  const iconElement = document.createElement("i");
  const iconElement2 = document.createElement("i");
  const iconElement3 = document.createElement("i");
  const iconElement4 = document.createElement("i");
  const iconElement5 = document.createElement("i");

  iconElement.className = "fa-solid fa-star";
  iconElement2.className = "fa-solid fa-star";
  iconElement3.className = "fa-solid fa-star";
  iconElement4.className = "fa-solid fa-star";
  iconElement5.className = "fa-solid fa-star";
  colFlowers.classList.add("col-flowers");
  imgCard.classList.add("img-card");
  cardContent.classList.add("card-content");
  h2Title.classList.add("h2Title");
  priceBasket.classList.add("price-basket");
  priceFlo.classList.add("priceFlo");
  addBasket.classList.add("addBasket");
  starUL.classList.add("starUl");

  addedBasket.append(linkBusket);
  imgCard.append(img);
  priceBasket.append(priceFlo, addBasket, addedBasket);
  starUL.append(
    iconElement,
    iconElement2,
    iconElement3,
    iconElement4,
    iconElement5
  );
  cardContent.append(h2Title, priceBasket, starUL);
  colFlowers.append(imgCard, cardContent);
  productItemRow.append(colFlowers);

  addedBasket.title = "Busket";
  addedBasket.href = "basket.html";
  addBasket.textContent = "Add | ";
  h2Title.textContent = flowerTittle;
  priceFlo.textContent = "$" + flowerPrice;

  addBasket.onclick = function (e) {
    busketArr.push({
      id,
      img_url,
      flowerTittle,
      flowerPrice,
    });
    setLocalStorage("Basket", busketArr);
    console.log(busketArr);
    busketArr.forEach(x=>{
      console.log(x);
      creatBuscetCard(x.id,x.img_url,x.flowerTittle,x.flowerPrice)
    })
  };

}

function getFlowers() {
  axios
    .get("http://localhost:3000/flowers")
    .then((x) => {
      x.data.forEach((element) => {
        creatCard(element.id, element.image, element.title, element.price);
      });
      console.log(x.data);
    })
    .catch((err) => console.log(err));
}
getFlowers();

function creatBuscetCard(id, img_url, flowerTittle, flowerPrice) {
  const addedCard = document.createElement("div")
  const img = document.createElement("img")
  img.setAttribute("src", img_url)
  const titlePrice = document.createElement("div")
  const titleBus = document.createElement("h2")
  const priceBus = document.createElement("span")
  const delProduct = document.createElement("span")

  addedCard.classList.add("addedCard")
  titlePrice.classList.add("titlePrice")
  titleBus.classList.add("titleBus")
  priceBus.classList.add("priceBus")
  delProduct.classList.add("delProduct")

  titlePrice.append(titleBus,priceBus)
  addedCard.append(img,titlePrice,delProduct)
  addedBuscet.append(addedCard)

  titleBus.textContent=flowerTittle
  priceBus.textContent="$"+ flowerPrice
  delProduct.textContent="x"


}