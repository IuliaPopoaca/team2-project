const e=document.querySelector(".mainMenu"),n=document.querySelector(".closeMenu"),t=document.querySelector(".openMenu"),c=document.querySelectorAll("nav .mainMenu li a");function o(){e.style.top="-100%"}//# sourceMappingURL=index.790cc1ad.js.map
t.addEventListener("click",function(){e.style.display="flex",e.style.top="0"}),n.addEventListener("click",o),// close menu when you click on a menu item
c.forEach(e=>{e.addEventListener("click",function(){o()})});
//# sourceMappingURL=index.790cc1ad.js.map
