export const accordion = () => {

    const accordionHeaders = document.querySelectorAll('.js-accordion-header');

    if ( accordionHeaders.length ) {
        accordionHeaders.forEach(header => {
            header.addEventListener('click', function() {
                const accordion = this.closest('.js-accordion');
                accordion.classList.toggle('active');
            });
        });
    }
    

}