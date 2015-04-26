var readline = require('readline');

var min = 0; // Орел
var max = 1; // Решка
var winsInRow = 0; // Угадано чисел подряд 

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

initGame(); 

function initGame() {
    var randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    
    playGame(randomInt);
}

function playGame(randomInt) {
    
    rl.question("\nОрел или решка? (0 или 1 [выход - stop]): ", function(answer) {

        if (answer == '0' || answer == '1') {
            
            printResult(answer, randomInt);
            initGame();

        } else if (answer === 'stop') {
            
            exitGame();

        } else {

            console.log("\n", "Введена неверная команда");
            playGame(randomInt);
        }
    });    
} 

function printResult(userNumber, systemNumber) {

    if (userNumber == systemNumber) {
        winsInRow++;
        console.log('\nПобеда! Число угаданных подряд значений: ', winsInRow);
    } else {
        winsInRow = 0;
        console.log('\nПоражение...');
        
    }

    console.log("\nВыпало:", userNumber);
    console.log("Ваше число:", systemNumber);
}

function exitGame() {
    console.log('Exit game');
    process.exit(0); 
}





