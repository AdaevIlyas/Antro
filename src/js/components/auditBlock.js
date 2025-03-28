


export const auditBlock = () => {

    
    const auditSart1 = document.querySelector('.js-audit-start-1');
    const auditSart2 = document.querySelector('.js-audit-start-2');

    if ( auditSart1 && auditSart2 ) {
        
        document.addEventListener('scroll',function(){
            
            let rect = auditSart2.getBoundingClientRect();

            if ( rect.top < 600 ) {
                auditSart1.classList.add('audit-start__block_gray');
                auditSart2.classList.remove('audit-start__block_gray');
            } else {
                auditSart2.classList.add('audit-start__block_gray');
                auditSart1.classList.remove('audit-start__block_gray');
            }

        });
        
    }

}