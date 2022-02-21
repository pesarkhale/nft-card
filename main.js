toggleImage();
function toggleImage() {
  const el = document.getElementById('item-img');
  const el2 = document.getElementById('view-icon');
  el.addEventListener('mouseenter', function toggleView(event) {
    event.target.style.filter = 'blur(3px)';
    el2.style.display = 'block';
  });
  el.addEventListener('mouseleave', function unToggle(event) {
    event.target.style.filter = 'none';
    el2.style.display = 'none';
  });
}
