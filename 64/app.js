function getRandomNumber(min, max) {
    return Math.floor((Math.random() * (max - min)) + min)
    }
    let names = ['Саша', 'Лера', 'Даша', 'Омлет', 'Настя']
    let todos = ['Сидит', 'Играет в Pony Town', 'Нюхает тортик', 'Пошла(ел)']
    // Вывод в консоль ответа
    function generate() {
    console.log(`${names[getRandomNumber(0, names.length)]} что? ${todos[getRandomNumber(0, todos.length)]}`)
    }
    