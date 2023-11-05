const searchLoop = document.getElementById("searchLoop");
const searchLoopMedia = document.getElementById("searchLoopMedia");
const modal=document.getElementById("modal")
const closeIconForClose=document.getElementById("closeIconForClose")
const p=document.getElementById("closeP")
searchLoop.addEventListener("click", (e)=>{
    console.log("kliklendim");
    e.preventDefault()
  modal.classList.add("modalVid")
});
closeIconForClose.addEventListener('mouseover',(e)=>{
    e.preventDefault()
    closeIconForClose.classList.add("closeIconForClose")
    // p.classList.add("closeVid")
})
closeIconForClose.addEventListener('click',(e)=>{
    e.preventDefault()
   modal.classList.remove("modalVid")
})
searchLoopMedia.addEventListener("click", (e)=>{
    e.preventDefault()
  modal.classList.add("modalVid")
});
// modal end 




// imgSlider 
const body=document.querySelector('body')
const ImgSlider=document.getElementById('ImgSlider')
body.addEventListener('mousemove',(e)=>{
    let x=Math.floor(e.clientX/100)
    let y=Math.floor(e.clientY/100)
    ImgSlider.style.transform=`translate(${-x}px,${-y}px)`
})


