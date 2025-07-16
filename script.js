const menuBtn = document.querySelector(".icon-menu");

menuBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("open-menu");
    insertMenuBar();
})

const mobile = 767.98;
const header = document.querySelector(".header");
function insertMenuBar() {
    const existingBar = document.querySelector(".menu-bar");
    if (existingBar) {
        existingBar.remove();
    }

    if (window.innerWidth <= mobile && document.documentElement.classList.contains("open-menu")) {
        const menuBar = document.createElement("div");
        menuBar.classList.add("menu-bar");
        header.insertAdjacentElement("afterbegin", menuBar)
    }
}


window.addEventListener("load", insertMenuBar);
window.addEventListener("resize", insertMenuBar);

const swiper = new Swiper('.swiper-container.testimonials-swiper-container', {
    loop: false,
    slidesPerView: "auto",
    pagination: {
      el: '.swiper-pagination.testimonials-swiper-pagination',
    },
    watchOverflow: true,
    slidesOffsetAfter: 0,
    breakpoints: {
        320: {
            spaceBetween: 10,
            slidesPerGroup: 1,
          }, 
          480: {
            slidesPerGroup: 1,
            spaceBetween: 15,
          },
          1267: {
            spaceBetween: 23,
          }
    }
  });



const elementsToAnim = document.querySelectorAll(".animate-in");

const fadeInObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      fadeInObserver.unobserve(entry.target);
    }
  })
}, {
  threshold: 0.2,
})

elementsToAnim.forEach(item => fadeInObserver.observe(item));



const slideInItems = document.querySelectorAll(".item-info__body.init-slide-in, .item-info__image.init-slide-in");
console.log(slideInItems)
const slideInObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      console.log(entry.target)
      entry.target.classList.add("slide-in");
      slideInObserver.unobserve(entry.target);
    }
  })
}, {
  threshold: 0.2,
})

slideInItems.forEach(item => slideInObserver.observe(item));

const featuresItems = document.querySelectorAll(".item-features");

const featuresItemsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
         entry.target.style.transitionDelay = `${i * 0.3}s`;
         entry.target.classList.add("show-up");
         featuresItemsObserver.unobserve(entry.target);
      } else {
         entry.target.classList.remove("show-up");
         entry.target.style.transitionDelay = "0s";
      }
    });
  }, {
    threshold: 0.5 
});
featuresItems.forEach(item => featuresItemsObserver.observe(item));

const valueDisplays = document.querySelectorAll(".list-achivements__number");
const numberSpan = document.querySelectorAll(".list-achivements__number span");
function initCountingAnimation() {

  if (!valueDisplays.length) return;

  function countingAnimation() {
      valueDisplays.forEach((valueDisplay) => {
          let start = 0;
          let end = parseInt(valueDisplay.getAttribute("data-val"));
          let interval = 4500;
          if (isNaN(end) || end <= 0) return;

          let duration = Math.floor(interval / end);
          let counter = setInterval(() => {
              start++;
              valueDisplay.innerHTML = start + `<span>+</span>`;
              for (let i = 0; i < numberSpan.length; i++) {
                if ((i + 1) % 2 !== 0) {
                  numberSpan[i].style.color = "#D68240";
                }
              }
              if (start === end) {
                  clearInterval(counter);
              }
          }, duration);
      });
  }

  const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
          countingAnimation();
          observer.disconnect();
      }
  }, {
      threshold: 0.3
  });

  observer.observe(valueDisplays[0]);
}

initCountingAnimation();

const menuItems = document.querySelectorAll(".item-section-menu");


const menuItemsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
         entry.target.style.transitionDelay = `${i * 0.3}s`;
         entry.target.classList.add("show-up");
         menuItemsObserver.unobserve(entry.target);
      } else {
         entry.target.classList.remove("show-up");
         entry.target.style.transitionDelay = "0s";
      }
    });
  }, {
    threshold: 0.5 
});
menuItems.forEach(item => menuItemsObserver.observe(item));