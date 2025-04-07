/* export const copylink = () => {

    const copyLinks = document.querySelectorAll('.js-copy-link');
    const copyTooltip = document.querySelector('.js-copy-tooltip');



    if ( copyLinks.length ) {
        for (let link of copyLinks ) {
            link.addEventListener('click',function(e){
                e.preventDefault();

                let text = link.dataset.text;

                //console.log('', text);

                navigator.clipboard.writeText( text );

                copyTooltip?.classList.remove("tooltip_hidden");

                setTimeout(() => {
                    copyTooltip?.classList.add("tooltip_hidden");
                }, 700);

            });
        }
    }


} */


export const copylink = () => {
    const copyLinks = document.querySelectorAll('.js-copy-link');
    // const copyTooltip = document.querySelector('.js-copy-tooltip');
    if (copyLinks.length) {
        for (let link of copyLinks) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                let text = link.dataset.text;

                //console.log('', text);

                navigator.clipboard.writeText(text);
                let copyTooltip = link.closest('.js-copy-parent')?.querySelector('.js-copy-tooltip');
                copyTooltip?.classList.remove("tooltip_hidden");
                setTimeout(() => {
                    copyTooltip?.classList.add("tooltip_hidden");
                }, 700);
            });
        }
    }
};