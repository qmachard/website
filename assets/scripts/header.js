const Header = () => {
  window.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (entry.intersectionRatio > 0) {
          document.querySelectorAll('.nav_link--active').forEach(item => item.classList.remove('nav_link--active'));
          document.querySelector(`.nav_link[href="#${id}"]`).classList.add('nav_link--active');
        } else {
          document.querySelector(`.nav_link[href="#${id}"]`).classList.remove('nav_link--active');
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
