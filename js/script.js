const iconList = document.querySelectorAll('.icon-list li');
const descriptionList = document.querySelectorAll('.description-list li');
const videoList = document.querySelectorAll('.video-description li');

const videos = document.querySelectorAll('video');

const skinsList = document.querySelectorAll('.skins-list li');
const wallpaperList = document.querySelectorAll('.wallpaper-list li');

const navbar = document.querySelectorAll('.navbar ul li');
const sections = document.querySelectorAll('.sections');

function navigateSections() {

  navbar[0].classList.add('active');
  sections[0].classList.add('active');

  function activeSection(i) {

    navbar.forEach((item) => {
      item.classList.remove('active');
    })

    sections.forEach((item) => {
      item.classList.remove('active');
    })

    navbar[i].classList.add('active');
    sections[i].classList.add('active');
  }

  navbar.forEach((item, i) => {
    item.addEventListener('click', () => {
      activeSection(i);
    })
  })
}

navigateSections();

function abilitiesTab(){
  iconList[0].classList.add('active');

  descriptionList[0].classList.add('active');
  videoList[0].classList.add('active');

  videos[0].setAttribute('autoplay', true);
  videos[0].setAttribute('loop', true);

  function activeAbilitiesTab(i) {

    iconList.forEach((item) => {
          item.classList.remove('active');
      })

      descriptionList.forEach((item) => {
          item.classList.remove('active');
      })

      videoList.forEach((item) => {
        item.classList.remove('active');
      })

      videos.forEach((video) => {
        video.setAttribute('autoplay', false);
        video.setAttribute('loop', false);
      })


      iconList[i].classList.add('active');
      descriptionList[i].classList.add('active');

      videoList[i].classList.add('active');

      videos[i].setAttribute('autoplay', true);
      videos[i].setAttribute('loop', true);

  }

  iconList.forEach((item, i) => {
      item.addEventListener('click', () => {
          activeAbilitiesTab(i);
      });
  })
}

abilitiesTab();

function skinsTab(){

  skinsList[0].classList.add('active');
  wallpaperList[0].classList.add('active');

  function activeSkinsTab(i) {
    skinsList.forEach((item) => {
      item.classList.remove('active');
    });
  
    wallpaperList.forEach((item) => {
      item.classList.remove('active');
    });

    skinsList[i].classList.add('active');
    wallpaperList[i].classList.add('active');
  }

  skinsList.forEach((item, i) => {
    item.addEventListener('click', () => {
      activeSkinsTab(i);
    })
  })

}

skinsTab();

// function scrollInternalLink() {
//   const links = document.querySelectorAll('a[href^="#"]');

//   function getScrollTopByHref(element) {
//     const id = element.getAttribute('href');
//     return document.querySelector(id).offsetTop;
//   }

//   function scrollToPosition(to) {
//     window.scroll({
//       top: to,
//       behavior: 'smooth',
//     });
//   }

//   function scrollToIdOnClick(event) {
//     event.preventDefault();
//     const to = getScrollTopByHref(event.currentTarget) - 0;
//     scrollToPosition(to);
//     navbar.classList.remove('active-menu');
//     btnMenu.classList.remove('active-btn');
//   }

//   links.forEach((links, i) => {
//     links.addEventListener('click', scrollToIdOnClick);
//   });
// }

// scrollInternalLink();

