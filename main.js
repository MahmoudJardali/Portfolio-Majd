const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById("nav-close");

    /*==================== Show menu ====================*/
    /* Validate if constant exists */
    if(navToggle){
        navToggle.addEventListener('click', ()=> {
            navMenu.classList.add("show-menu")
        })
    }
     
    
    
    /*========== Menu Hidden ==========*/
    /* Validate if constant exists */
    if(navClose){
        navClose.addEventListener('click', ()=> {
            navMenu.classList.remove("show-menu")
        })
    }
    



    /*==================== Remove Menu Mobile ====================*/
    const navLink = document.querySelectorAll('.nav-link');
       
    function linkAction(){
        const navMenu = document.getElementById("nav-menu")
        navMenu.classList.remove("show-menu")
    }
    navLink.forEach(n => n.addEventListener('click', linkAction));




    
    /*==================== Change Background Header ====================*/
    function scrollHeader(){
        const header = document.getElementById("header")
        // when the scroll is greater than 80 view port height, and the class scroll header to the tag header
        if(this.scrollY >= 80) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")
    }
    window.addEventListener("scroll", scrollHeader)








    /*==================== Testimonial Swiper ====================*/
    var swiper = new Swiper(".testimonial-wrapper", {
        loop: 'true',
        pagination: {
          el: ".swiper-pagination",
        },
      });

    /*==================== Scroll Section Active Link ====================*/

    // get all sections that have an id defined
    const sections = document.querySelectorAll("section[id]");

    // add an event listner lisrining for scroll
    window.addEventListener("scroll", navHighLighter);

    function navHighLighter(){
        //get current scroll position
        let scrollY = window.pageYOffset;

        // now we loop through sections to get height, top and Id values for each 
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 58;
            sectionId = current.getAttribute("id");
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add("active-link")
            }
            else {
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove("active-link")
            }
        })
    }
    
    /*==================== Portofolio Item Fikter ====================*/
    const filterContainer = document.querySelector(".portfolio-filter-inner"),
          filterBtns = filterContainer.children,
          totalFilterBtn = filterBtns.length,
          portfolioItems = document.querySelectorAll(".portfolio-item"),
          totalPortfolioItem = portfolioItems.length;

          for(let i=0; i<totalFilterBtn; i++){
            filterBtns[i].addEventListener("click", function(){
                filterContainer.querySelector(".active").classList.remove("active");
                this.classList.add("active");

                const filterValue = this.getAttribute("data-filter");
                for(let k=0; k<totalPortfolioItem; k++){
                    if(filterValue == portfolioItems[k].getAttribute("data-category")){
                        portfolioItems[k].classList.remove("hide");
                        portfolioItems[k].classList.add("show");
                    }
                    else{
                        portfolioItems[k].classList.add("hide");
                        portfolioItems[k].classList.remove("show");
                    }
                    if(filterValue == "all"){
                        portfolioItems[k].classList.remove("hide");
                        portfolioItems[k].classList.add("show");
                    }
                }
            })
          }

    
    /*==================== Theme/Display Customization ====================*/
    const theme = document.querySelector("#theme-button"),
          themeModal = document.querySelector(".customize-theme"),
          fontSizes = document.querySelectorAll('.choose-size span'),
          colorPlatte = document.querySelectorAll(".choose-color span");
    var root = document.querySelector(":root");  
    const Bg1 =document.querySelector(".bg-1"),
          Bg2 =document.querySelector(".bg-2"),  
          Bg3 =document.querySelector(".bg-3");  


          //open modal
    const openThemeModal = () => {
        themeModal.style.display = 'grid';
    }
    //close modal
    const closeThemeModal = (e) =>{
        if(e.target.classList.contains('customize-theme')){
            themeModal.style.display = 'none'
        }
    }
    theme.addEventListener("click", openThemeModal);
    themeModal.addEventListener("click", closeThemeModal);
    
    /*========== Fonts ==========*/

    //remove active class from spans or font size selectors
    const removeSizeSelector = () => {
        fontSizes.forEach(size => {
            size.classList.remove("active");
        })
    }
    fontSizes.forEach(size => {
        size.addEventListener('click', () => {

            removeSizeSelector();
            let fontSize;
            size.classList.toggle('active');
            if(size.classList.contains('font-size-1')){
                fontSize = '12px';
            }
            else if(size.classList.contains('font-size-2')){
                fontSize = '14px';
            }
            else if(size.classList.contains('font-size-3')){
                fontSize = '16px';
            }
            else if(size.classList.contains('font-size-4')){
                fontSize = '18px';
            }
            //change Font size
            document.querySelector('html').style.fontSize = fontSize;
        })
    })
    
    /*========== Color ==========*/

    //remove active from span to another
    const changeActiveColorClass = () => {
        colorPlatte.forEach(colorPicker => {
            colorPicker.classList.remove('active');
        })
    }
    colorPlatte.forEach(color => {
        color.addEventListener('click', () => {
            let primaryHue;
            changeActiveColorClass();
            if(color.classList.contains('color-1')){
                primaryHue = 252;
            }
            else if(color.classList.contains('color-2')){
                primaryHue = 52;
            }
            else if(color.classList.contains('color-3')){
                primaryHue = 352;
            }
            else if(color.classList.contains('color-4')){
                primaryHue = 152;
            }
            else if(color.classList.contains('color-5')){
                primaryHue = 202;
            }
            color.classList.add("active");
            //change Font Color
           root.style.setProperty('--primary-color-hue', primaryHue);
        })
    })




    /*========== Background Color ==========*/
    let lightColorLightness;
    let whiteColorLightness;
    let darkColorLightness;

    //change background color
    const changeBG = () => {
        root.style.setProperty('--light-color-lightness', lightColorLightness);
        root.style.setProperty('--white-color-lightness', whiteColorLightness);
        root.style.setProperty('--dark-color-lightness', darkColorLightness);
    }
    Bg1.addEventListener('click', () => {
        //add active class
        Bg1.classList.add('active');
        //remove active class
        Bg2.classList.remove('active');
        Bg3.classList.remove('active');
        //remove customize changes from local storage
        window.location.reload();
    })
    Bg2.addEventListener('click', () => {
        darkColorLightness = '95%';
        whiteColorLightness = '20%';
        lightColorLightness = '15%';

        //add active class
        Bg2.classList.add('active');

        //remove active class
        Bg1.classList.remove('active');
        Bg3.classList.remove('active');
        changeBG();
    })

    Bg3.addEventListener('click', () => {
        darkColorLightness = '95%';
        whiteColorLightness = '10%';
        lightColorLightness = '0%';

        //add active class
        Bg3.classList.add('active');

        //remove active class
        Bg1.classList.remove('active');
        Bg2.classList.remove('active');
        changeBG();
    })