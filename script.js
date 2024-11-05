const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

