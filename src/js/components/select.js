export const select = () => {

        
    const selects = document.querySelectorAll(".select");

    document.addEventListener("click",function(){
        document.querySelector(".select__list_open")?.classList.toggle("select__list_open");
    });

    for (let select of selects ){
        let options = select.querySelectorAll(".select__option");
        let value = select.querySelector(".select__value");
        let list = select.querySelector(".select__list");

        value.addEventListener("click",function(e){

            
            document.addEventListener("click",function(){
            document.querySelector(".select__list_open")?.classList.remove("select__list_open");
            });
            
            if ( !select.querySelector(".select__list_open") ) {
            setTimeout(function(){
                list.classList.toggle("select__list_open");
            }, 100);
            }
            
        });
        
        for (let option of options) {
            option.addEventListener("click",function(){
            value.value = option.dataset.value;
            list.classList.toggle("select__list_open");
            });
        }
    
    }


}