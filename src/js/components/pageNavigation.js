export const pageNavigation = () => {

    const nav = document.querySelector('.js-page-navigation');
    const navLinks = document.querySelectorAll('.js-page-navigation-link');
    const cmsTitles = document.querySelectorAll('.content-cms h2,h3,h4');
    const navClose = document.querySelector('.js-page-navigation-close');
    const navOpen = document.querySelector('.js-page-navigation-open');


    if ( navClose && nav ) {
        navClose.addEventListener('click',function(){
            nav.classList.remove("article__navigation_open");
        });
    }

    if ( navOpen && nav ) {
        navOpen.addEventListener('click',function(){
            nav.classList.add("article__navigation_open");
        });
    }


    document.addEventListener('scroll',function(){
        
        for (let title of cmsTitles ) {
            if ( title.id != '' ) {
                let rect = title.getBoundingClientRect();
                let id = "#" + title.id;

                if ( window.innerWidth > 480 ) {
                    if ( rect.top < 300 ) {
                        document.querySelector('.article__navigation-link_active')?.classList.remove("article__navigation-link_active");
                        document.querySelector(`.js-page-navigation-link[href='${id}']`)?.classList.add("article__navigation-link_active");
                    }
                }
                
            }
        }

    });

    if ( navLinks.length ) {
        for (let link of navLinks ) {

            if ( window.innerWidth > 480 ) {
                link.addEventListener('click',function(e){
                    e.preventDefault();
                    
                    let id = "#" + link.href.split("#")[1];
                    let cmsOffset = document.querySelector(".content-cms").offsetTop;
    
                    console.log('', id);
    
                    if ( id ) {
                        window.scrollTo({
                            top: document.querySelector(id).offsetTop + cmsOffset - 300,
                            left: 0,
                            behavior: 'smooth',
                        });    
                    }
    
                });
            } else {

                link.addEventListener('click',function(e){

                    let id = "#" + link.href.split("#")[1];

                    nav.classList.remove("article__navigation_open");
                    document.querySelector('.article__navigation-link_active')?.classList.remove("article__navigation-link_active");
                    document.querySelector(`.js-page-navigation-link[href='${id}']`)?.classList.add("article__navigation-link_active");
                });

                
            }

            
        }
    }



}