// mobile nav JS part ###########################

const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav-close-btn');
const closeBtnIcn = document.querySelector('.mnav-close-btn-icon');

const navOpendClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'fa-angles-left';
const arrowRightClass = 'fa-angles-right';

closeBtn.addEventListener('click', () => {
  // console.log('btn clicked check');
  if (mobileNav.classList.contains(navClosedClass)) {
    mobileNav.classList.toggle(navOpendClass);

    closeBtnIcn.classList.toggle(arrowLeftClass);
    closeBtnIcn.classList.toggle(arrowRightClass);
  }
});
//end mobile nav JS part ###########################