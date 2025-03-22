export const subscribe = () => {

    const subscribeBaloon = document.querySelector('.js-subscribe-baloon');
    const subscribeOpen = document.querySelector('.js-subscribe-open');
    const subscribeClose = document.querySelector('.js-subscribe-close');

    if ( subscribeOpen && subscribeBaloon ) {
        
        subscribeOpen.addEventListener('click',function(e){
            e.preventDefault();

            subscribeBaloon.classList.add("main-research__subscribe_open");
        });

    }

    if ( subscribeClose && subscribeBaloon ) {
        subscribeClose.addEventListener('click',function(){
            subscribeBaloon.classList.remove("main-research__subscribe_open");
        });
    }

}