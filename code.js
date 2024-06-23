let character_card = document.querySelectorAll('[character-card]');

for (let i = 0 ; i < character_card.length; i++) {
    character_card[i].addEventListener('click', function() {
        for (let j = 0; j < character_card.length; j++) {
            character_card[j].classList.remove('active'); /*удаляем у всех class active*/
        }
        this.classList.add('active');
    });
}


