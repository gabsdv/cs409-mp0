function changeColor(color) {
    document.getElementById('card').style.backgroundColor = color;
}

function closeCard() {
    document.getElementById('inner-card').style.display = 'none';
}

function openCard() {
    document.getElementById('inner-card').style.display = 'flex';
}


document.getElementById('img').addEventListener('click', openCard);
document.getElementById('name').addEventListener('click', closeCard);
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const color = e.target.textContent.toLowerCase();
        changeColor(color);
    })
});