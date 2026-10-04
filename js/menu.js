/* CY CAFÉ — menu.js */

document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const categories = document.querySelectorAll('.menu-category');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      categories.forEach(cat => {
        cat.classList.toggle('hidden', filter !== 'all' && cat.dataset.cat !== filter);
      });
    });
  });
});
