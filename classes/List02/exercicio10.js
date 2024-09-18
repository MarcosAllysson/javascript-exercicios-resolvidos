function numprint(n) {
    var counter = 50;
    while (n < counter) {
        console.log(n +=1);
    }
    while (n > counter) {
        console.log(n -=1);
    }
}

let num = numprint(parseInt(process.argv[2]));
