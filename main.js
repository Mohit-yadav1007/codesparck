import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  initCategoryTabs();
  initProductSlider();
  initTestimonialSlider();
  initSmoothScroll();
});

function initCategoryTabs() {
  const tabs = document.querySelectorAll('.tab-btn');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

function initProductSlider() {
  const slider = document.querySelector('.products-slider');
  if (!slider) return;

  const prevBtn = slider.querySelector('.slider-arrow.prev');
  const nextBtn = slider.querySelector('.slider-arrow.next');
  const grid = slider.querySelector('.products-grid');

  let scrollAmount = 0;
  const slideWidth = 300;

  nextBtn?.addEventListener('click', () => {
    if (grid) {
      scrollAmount += slideWidth;
      grid.style.transform = `translateX(-${scrollAmount}px)`;
      grid.style.transition = 'transform 0.5s ease';
    }
  });

  prevBtn?.addEventListener('click', () => {
    if (grid && scrollAmount > 0) {
      scrollAmount -= slideWidth;
      grid.style.transform = `translateX(-${scrollAmount}px)`;
      grid.style.transition = 'transform 0.5s ease';
    }
  });
}

function initTestimonialSlider() {
  const slider = document.querySelector('.testimonials-slider');
  if (!slider) return;

  const prevBtn = slider.querySelector('.slider-arrow.prev');
  const nextBtn = slider.querySelector('.slider-arrow.next');
  const grid = slider.querySelector('.testimonials-grid');

  let scrollAmount = 0;
  const slideWidth = 350;

  nextBtn?.addEventListener('click', () => {
    if (grid) {
      scrollAmount += slideWidth;
      grid.style.transform = `translateX(-${scrollAmount}px)`;
      grid.style.transition = 'transform 0.5s ease';
    }
  });

  prevBtn?.addEventListener('click', () => {
    if (grid && scrollAmount > 0) {
      scrollAmount -= slideWidth;
      grid.style.transform = `translateX(-${scrollAmount}px)`;
      grid.style.transition = 'transform 0.5s ease';
    }
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

const searchBtn = document.querySelector('.search-btn');
if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    alert('Search functionality coming soon!');
  });
}

const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const productCard = btn.closest('.product-card');
    const productName = productCard?.querySelector('.product-name')?.textContent;
    alert(`${productName} added to cart!`);

    btn.style.transform = 'scale(1.2)';
    setTimeout(() => {
      btn.style.transform = 'scale(1)';
    }, 200);
  });
});
