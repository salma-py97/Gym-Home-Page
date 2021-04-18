const headerNav = document.querySelector("header nav");
const hamburgerMenu = document.getElementById('hamburger-menu');
const search = document.getElementById("search");
const searchContainerHide = document.getElementById("search-container-hide");
const searchContainer = document.getElementById("search-container");
const youtubeButton = document.querySelector(".youtube-button");
const videoFrame = document.getElementById('video-frame');
const videoFrameHide = document.getElementById('video-frame-hide');
const embedVideo = document.getElementById('embed-video');

hamburgerMenu.addEventListener('click', () => {
  // alert('clicked!');
  headerNav.classList.toggle("show");
})
search.addEventListener('click', () => {
  searchContainer.style.opacity = 1;
  searchContainer.style.visibility = 'visible';
  searchContainer.style.zIndex = 100;
})
searchContainerHide.addEventListener('click', () => {
  searchContainer.style.opacity = 0;
  searchContainer.style.visibility = 'hidden';
  searchContainer.style.zIndex = 0;
})
youtubeButton.addEventListener('click', () => {
  videoFrame.style.opacity = 1;
  videoFrame.style.visibility = 'visible';
  videoFrame.style.zIndex = 100;
})
videoFrameHide.addEventListener('click', () => {
  videoFrame.style.opacity = 0;
  videoFrame.style.visibility = 'hidden';
  videoFrame.style.zIndex = 0;

})



// initialize hero slider
$('#hero-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnFocus: false,
  pauseOnHover: false,
  fade: true,
  speed: 1000,
  cssEase: 'linear'
});

$('#trainers-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<a href="#" class="slick-arrow slick-prev">previous</a>',
  nextArrow: '<a href="#" class="slick-arrow slick-next">next</a>',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        arrows: false
      }
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }
  ]
});
