
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
