export const video = () => {

    const videos = document.querySelectorAll('.js-video');

    setTimeout(() => {
        if ( videos.length ) {
            for (let video of videos ) {
                video.play();
            }
        }
    }, 1000);

}