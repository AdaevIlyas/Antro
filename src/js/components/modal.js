

export const modal = () => {


    const modalOpen = 'js-modal-open';
    const modalClose = document.querySelectorAll('.js-modal-close');
    const modals = document.querySelectorAll('.modal');
    const forms = document.querySelectorAll('.js-form');
    var distance = 0;





    function disable_scroll() {
        document.querySelector(".site-container").classList.add("dis-scroll");
        document.querySelector(".site-container").scrollTo({
            top: distance,
            left: 0,
        });
    }

    function enable_scroll() {

        document.querySelector(".site-container").classList.remove("dis-scroll");

        if ( distance != 0 ) {
            setTimeout(() => {
                window.scrollTo({
                    top: distance,
                    left: 0,
                });
            }, 1);
        }

    }


    document.addEventListener('click',function(e){
        if ( e.target.classList.contains(modalOpen) ) {

            let modalName = e.target.dataset.modal;

            distance = window.pageYOffset;
            //disable_scroll();
            document.querySelector('.modal_open')?.classList.remove('modal_open');
            document.querySelector(`.modal[data-modal=${modalName}]`)?.classList.add("modal_open");

            if ( modalName == "video-about" || modalName == "video-solutions" ) {
                document.querySelector('.modal_open')?.querySelector("video").play();
            }
            
        }
    });

    document.addEventListener('keydown', function(e) {
        let keyCode = e.keyCode;
        if (keyCode === 27) {     
            if ( document.querySelector('.modal_open').querySelector("video") ){
                document.querySelector('.modal_open').querySelector("video").pause();
            }

            document.querySelector('.modal_open')?.classList.remove('modal_open');            
            //enable_scroll();
        }
    });

    if ( modals.length ) {
        for (let modal of modals ) {
            modal.addEventListener('mousedown',function(e){
                if ( e.target.classList.contains("modal") ) {   
                    if ( document.querySelector('.modal_open').querySelector("video") ){
                        document.querySelector('.modal_open').querySelector("video").pause();
                    }                     
                    document.querySelector('.modal_open')?.classList.remove('modal_open');
                    //enable_scroll();
                }
            });
        }
    }

    if ( modals.length ) {
        for (let close of modalClose ) {
            close.addEventListener('mousedown',function(e){       
                if ( document.querySelector('.modal_open').querySelector("video") ){
                    document.querySelector('.modal_open').querySelector("video").pause();
                }
                document.querySelector('.modal_open')?.classList.remove('modal_open');
                //enable_scroll();
            });
        }
    }



    if ( forms.length ) {
        
        for (let form of forms ) {
            
            let fields = form.querySelectorAll("input");

            for (let field of fields ) {
                field.setCustomValidity(" ");
            }

        }

    }

    

}
