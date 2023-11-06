const addedBuscet = document.querySelector(".addedBuscet")
let busketArr=[]
busketArr=getLocalStorage("Basket")
function setLocalStorage(key,data) {
    localStorage.setItem(key, JSON.stringify(data))
}
function getLocalStorage(key) {
   return JSON.parse(localStorage.getItem(key))
}
function creatBuscetCard(id, img_url, flowerTittle, flowerPrice) {
    const addedCard = document.createElement("div")
    const img = document.createElement("img")
    img.setAttribute("src", img_url)
    const titlePrice = document.createElement("div")
    const titleBus = document.createElement("h2")
    const priceBus = document.createElement("span")
    const delProduct = document.createElement("span")

    addedCard.classList.add.apply("addedCard")
    titlePrice.classList.add.apply("titlePrice")
    titleBus.classList.add.apply("titleBus")
    priceBus.classList.add.apply("priceBus")
    delProduct.classList.add.apply("delProduct")

    titlePrice.append(titleBus,priceBus)
    addedCard.append(img,titlePrice,delProduct)
    addedBuscet.append(addedCard)

    titleBus.textContent=flowerTittle
    priceBus.textContent="$"+ flowerPrice
    delProduct.textContent="x"

    addBasket.onclick=function (e) {
        busketArr.push({
            id,
            img_url,
            flowerTittle,
            flowerPrice
        })
        setLocalStorage("Basket",busketArr)
        console.log(busketArr);
    }
}

creatBuscetCard()
busketArr.forEach(element =>
    creatBuscetCard(element.id,element.img_url,element.flowerTittle,element.flowerPrice)
  );