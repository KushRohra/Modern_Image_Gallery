const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.5;

//Set first img opacity
imgs[0].style.opacity = opacity;

imgs.forEach( img => img.addEventListener('click', imgClick));

function imgClick(e)
{
    //Reset the opacity of all the images
    imgs.forEach(img => (img.style.opacity = 1));

    //Change current to src of clicked image
    current.src = e.target.src;

    //Add fade-in Class
    current.classList.add('fade-in');

    //Remove fade-in class after 0.5s
    setTimeout( () => current.classList.remove('fade-in'), 500);

    //Change the opacity 
    e.target.style.opacity = opacity;
}