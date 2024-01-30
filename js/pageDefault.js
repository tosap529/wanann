// header滑動變化
document.addEventListener('DOMContentLoaded', function () {
    let header = document.querySelector('header');
    let scrollTopButton = document.querySelector('.fa-angle-up');
    let header_text = document.querySelector('.header_text');
    let wrapper = document.querySelector('.wrapper');


    window.addEventListener('scroll', function () {
        let scrollDistance = window.scrollY || document.documentElement.scrollTop;

        if (scrollDistance > 50) {
            header.classList.add('fixed');
            scrollTopButton.style.display = 'block';
            header_text.style.display = 'none';
            wrapper.style.marginTop = '280px';

        } else {
            header.classList.remove('fixed');
            scrollTopButton.style.display = 'none';
            header_text.style.display = 'block';
            wrapper.style.marginTop = '80px';
        }
    });
});

// 回到頁首
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

}
// 機器人點選顯示/消失
document.addEventListener('DOMContentLoaded', function () {
    var robotLayout = document.querySelector('.robot_layout');
    var robotLogo = document.querySelector('.robot_logo');

    robotLogo.addEventListener('click', function () {
        robotLayout.classList.toggle('visible');
    });
});
