const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querrySelector('admitted');

const refused = document.querrySelector('refused');

admitted.textContent = 'Admit: ';
admitted.textContent = 'Refuse: ';

for(i=0; i < people.length; i++){
    if (people === 'Phil' || people === 'Lola'){
        refused.textContent +=', ';

    }
    else {
        admitted.textContent += ', ';
    }

}