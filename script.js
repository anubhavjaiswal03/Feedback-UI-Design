const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');

let selectedRating = 'Neutral';

ratingsContainer.addEventListener('click', (e) => {
	if (e.target.parentNode.classList.contains('rating')) {
		removeActive();
		e.target.parentNode.classList.add('active');

		selectedRating = e.target.parentNode.children[1].innerText;
	}
	// else if (e.target.classList.contains('rating')) {
	// 	removeActive();
	// 	e.target.classList.add(`active`);
	// }
});

sendBtn.addEventListener('click', () => {
	panel.innerHTML = `
  <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
  <strong>Feedback: ${selectedRating}</strong>
  <p>We'll use your feedback to inprove our customer support</p>
  `;
});

function removeActive() {
	ratings.forEach((rating) => rating.classList.remove('active'));
}
