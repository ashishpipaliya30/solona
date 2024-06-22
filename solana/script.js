document.getElementById('arrow').addEventListener('click', function() {
    var container2 = document.getElementById('container-2');
    if (container2.style.display === 'none' || container2.style.display === '') {
        container2.style.display = 'flex';
        this.textContent = 'close <';
    } else {
        container2.style.display = 'none';
        this.textContent = 'open >';
    }
});
