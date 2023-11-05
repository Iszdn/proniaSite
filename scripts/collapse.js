// open close side menu 
const sideMenuClose=document.querySelector(".side-Menu-Close")
const barIcon=document.getElementById('barIcon')
const sideMenu=document.querySelector('.sideMenu')

barIcon.addEventListener('click',(e)=>{
    sideMenu.classList.add("sideMenuOpen")
})
sideMenuClose.addEventListener('click',(e)=>{
    sideMenu.classList.remove("sideMenuOpen")
})
// english usd user
const eng=document.querySelectorAll(".eng")
const engSub=document.querySelectorAll(".engSub")

// eng.addEventListener('click',(e)=>{
// e.preventDefault()
// engSub.classList.toggle("engSubVid")
// })
eng.forEach(function(eng, index) {
    eng.addEventListener('click', function(e) {
        e.preventDefault()
        const currentB = engSub[index];
        currentB.classList.toggle("engSubVid");

        engSub.forEach(function(otherBody, otherI) {
            if (otherI !== index) {
                otherBody.classList.remove("engSubVid");
            }
        });
    });
});
// colapse
const menuItem = document.querySelectorAll('.menu-item');
        const submenuMedia = document.querySelectorAll('.submenuMedia');
        menuItem.forEach(function(menuItem, index) {
            menuItem.addEventListener('click', function(e) {
                e.preventDefault()
                const currentB = submenuMedia[index];
                currentB.classList.toggle("bodyCont");

                submenuMedia.forEach(function(otherBody, otherI) {
                    if (otherI !== index) {
                        otherBody.classList.remove("bodyCont");
                    }
                });
            });
        });

