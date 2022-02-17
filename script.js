const shareButton = document.querySelector('.share-button');
const bodyItem = document.querySelector('body');

shareButton.addEventListener('click', event => {
    document.querySelector('.share-area').classList.toggle('hidden');

    document.querySelector('.share-container--mobile').classList.toggle('hidden-mobile');

    document.querySelector('.container-text--profile').classList.toggle('hidden-mobile');  
    
})

const shareButtonMobile = document.querySelector('.profile-share--mobile');

shareButtonMobile.addEventListener('click', event => {
    
    document.querySelector('.share-container--mobile').classList.toggle('hidden-mobile');

    document.querySelector('.container-text--profile').classList.toggle('hidden-mobile');  
})