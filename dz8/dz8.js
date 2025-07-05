const arr = ['apple', 'banana', 'cherry', 'date'];

let resultFor = '';
for (let i = 0; i < arr.length; i++) {
    resultFor += arr[i];
    if (i < arr.length - 1) {
        resultFor += ',';
    }
}
console.log('Через for:', resultFor);

const resultJoin = arr.join(',');
console.log('Через join:', resultJoin);

let cards = [
    { id: 1, text: 'Learn JS' },
    { id: 2, text: 'Practice coding' },
    { id: 3, text: 'Read docs' }
];

const indexToDelete = cards.findIndex(card => card.id === 2);
if (indexToDelete !== -1) {
    cards.splice(indexToDelete, 1);
}
console.log('Після видалення:', cards);

const newCard = { id: 4, text: 'Write code' };
cards.push(newCard);
console.log('Після додавання:', cards);

const indexToUpdate = cards.findIndex(card => card.id === 3);
if (indexToUpdate !== -1) {
    cards[indexToUpdate].text = 'Read documentation';
}
console.log('Після оновлення:', cards);
