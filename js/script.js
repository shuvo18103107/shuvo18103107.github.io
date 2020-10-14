
//Portfolio item filter
//Portfolio item filter
const filterContainer=document.querySelector(".portfolio-filter"),
      filterBtns= filterContainer.children,
      totalFilterBtn= filterBtns.length,
      portfilioItems=document.querySelectorAll(".portfolio-item"),
      totalPortfolioItem= portfilioItems.length;
      for(let i=0; i<totalFilterBtn; i++){
          filterBtns[i].addEventListener("click",function(){
              filterContainer.querySelector(".active").classList.remove("active");
              this.classList.add("active");

              const filterValue = this.getAttribute("data-filter");
              for(let k=0; k<totalPortfolioItem;k++){
                  if(filterValue===portfilioItems[k].getAttribute("data-catagory")){
                    portfilioItems[k].classList.remove("hide"); 
                     portfilioItems[k].classList.add("show"); 
                  }
                  else{
                    portfilioItems[k].classList.remove("show"); 
                    portfilioItems[k].classList.add("hide"); 
                  }
                  if(filterValue==="all"){
                    portfilioItems[k].classList.remove("hide"); 
                    portfilioItems[k].classList.add("show"); 
                  }
              }
          })
      }
//  lightbox js


const lightbox=document.querySelector(".lightbox"),
      lightboxImg=lightbox.querySelector(".lightbox-img"),
      lightboxClose=lightbox.querySelector(".lightbox-close"),
      lightboxText=lightbox.querySelector(".caption-text"),
      lightboxCounter=lightbox.querySelector(".caption-counter");
let itemIndex=0;
for(let i=0; i<totalPortfolioItem;i++){
    portfilioItems[i].addEventListener("click",function(){
        itemIndex=i;
        changeItem();
        toggleLightbox();
    })
}
function nextItem(){
    if(itemIndex === totalPortfolioItem-1){
        itemIndex=0;
    }
    else{
        itemIndex++;
    }
    changeItem();
}
function prevItem(){
    if(itemIndex === 0){
        itemIndex=totalPortfolioItem-1;
    }
    else{
        itemIndex--;
    }
    changeItem();
}
function toggleLightbox(){
    lightbox.classList.toggle("open");
} 
function changeItem(){
    imgSrc=portfilioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
    lightboxImg.src=imgSrc;
    lightboxText.innerHTML=portfilioItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML= (itemIndex+1) + " of " + totalPortfolioItem;
}
lightbox.addEventListener("click",function(event){
    if(event.target === lightboxClose || event.target === lightbox ){
        toggleLightbox();
    }
})