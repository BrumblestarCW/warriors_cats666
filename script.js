const btnsOpen = document.querySelectorAll('.open-modal');
btnsOpen.forEach((btn, i) => {
    btnsOpen.addEventListener('click', function(){
        const modal = document.querySelector('.modal');
        modal.classList.add('active');

        modal.addEventListener('click', (e) => {
            console.log(e.target);
            if (e.target.closest('.btn-close')) {
                closeModal();
            }

            if(e.target.closest('.modal-body')) {
                console.log('пока');
                return;
            }

            closeModal();

        });
    });
});
function closeModal() {
    const modal = document.querySelector('.modal')
    modal.classList.remove('active');
}
