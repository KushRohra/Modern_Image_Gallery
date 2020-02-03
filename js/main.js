const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.5;

imgs.forEach( img => img.addEventListener('click', imgClick));

function imgClick(e)
{
    //Reset the opacity of all the images
    imgs.forEach(img => (img.style.opacity = 1));

    //Change current to src of clicked image
    current.src = e.target.src;

    //Change the opacity 
    e.target.style.opacity = opacity;
}