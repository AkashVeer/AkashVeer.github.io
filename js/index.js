

const navToggle = document.querySelector('.nav-toggle');
const navLinks =document.querySelectorAll('.nav__link');
const experienceContainer = document.querySelector('#experience');

const startDate = moment([2018, 07, 01]);
const date = new Date();
const currentDate = moment([date.getFullYear(), date.getMonth(), date.getDate()]);
const yearDiff = currentDate.diff(startDate, 'years', true);
const monthDiff = currentDate.diff(startDate, 'months',true);

experienceContainer.innerHTML = Math.floor(yearDiff) + '.' + Math.floor(monthDiff%12);

// experienceContainer.innerHTML = getTest();

navToggle.addEventListener('click', () =>{
    document.body.classList.toggle('nav-open');
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});
