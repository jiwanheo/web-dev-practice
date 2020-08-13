const primaryItem = document.querySelector('.primary-item-title');
const secondaryCategory = document.querySelector('.secondary-category');

primaryItem.addEventListener('hover', () => {
	secondaryCategory.classList.toggle('unhide')
})