const Header = () => {
  window.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const item = document.querySelector(`.nav_link[href="#${id}"]`)

        if (entry.intersectionRatio > 0) {
          document.querySelectorAll('.nav_link--active')
            .forEach(item => {
              item.classList.remove('nav_link--active');
              item.removeAttribute('aria-current');
            });

          item.classList.add('nav_link--active');
          item.setAttribute('aria-current', 'page');
        } else {
          item.classList.remove('nav_link--active');
          item.removeAttribute('aria-current');
        }
      });
    }, {
      threshold: 0.5
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll('.anchor').forEach((section) => {
      observer.observe(section);
    });
  });
};

export default Header;
