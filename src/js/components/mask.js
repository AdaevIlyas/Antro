import Inputmask from 'inputmask';

export const mask = () => {

    document.addEventListener('DOMContentLoaded', () => {
        if(document.querySelectorAll('input[type="tel"]').length > 0) {
            let selector = document.querySelectorAll('input[type="tel"]');
            let im = new Inputmask('+7 (999) 999-99-99', {
                showMaskOnHover: false,
            });
            im.mask(selector);

            for (let input of selector ) {
                let count = 1;
                input.addEventListener('input',function(){
                    count = 0;
                });
                input.addEventListener('keydown',function(e){
                    let keyCode = e.keyCode;
                    if (keyCode === 8) {   
                        
                        //console.log('', input.value);
                        //console.log('', count);      
                        
                        if ( input.value == "" ) {
                            
                            if ( count > 0 ) {
                                //console.log('del');      
                                let empty = new Inputmask('', {
                                    showMaskOnHover: false,
                                });
                                empty.mask(input);

                                input.removeAttribute("inputmode");
                                
                                input.addEventListener('input',function(e){
                                    input.value = input.value.replace(/[^\d\s-+]/g, "");
                                });
                            }

                            count = count + 1;
                        }
                    }
                });
            }

            for (let el of selector ) {
                el.oninput = function() {
                    if ( el.value.replace(/[()+_ -]/g,'').length < 11 ) {
                        el.setCustomValidity(" ");
                    } else {
                        el.setCustomValidity("");
                    }
                }
            }

        }
    })



    /* document.addEventListener('keydown', function(e) {
        let keyCode = e.keyCode;
        if (keyCode === 8) {                
            alert("del")
        }
    }); */

}