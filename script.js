const btnsOpen = document.querySelectorAll('.open-modal');
btnsOpen.forEach((btn, i) => {
    btnsOpen[i].addEventListener('click', function(){
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


let links = document.querySelectorAll('.scroll');
let targetID;
links.forEach(function(element){
    element.addEventListener('click', function(e) {
        e.preventDefault();
        targetID = element.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
})

