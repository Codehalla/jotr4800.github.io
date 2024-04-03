const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];

/* Declaring the alternative text for each image file */
const alts = {
  'pic1.jpg' : 'glitchy image of a cat god',
  'pic2.jpg' : 'glitchy image of a cat 2',
  'pic3.jpg' : 'glitchy image of a cat 3',
  'pic4.jpg' : 'glitchy image of a cat demon',
  'pic5.jpg' : 'glitchy cat killed the radio star'
}

/* Looping through images */
for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
  }

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.classList.add('dark-overlay');
      overlay.classList.remove('light-overlay');
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.classList.add('light-overlay');
      overlay.classList.remove('dark-overlay');
    }
});