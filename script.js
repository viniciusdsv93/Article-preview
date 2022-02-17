const shareButton = document.querySelector('.share-button');

shareButton.addEventListener('click', event => {
    document.querySelector('.share-area').classList.toggle('hidden');
    
})