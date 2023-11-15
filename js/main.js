/*Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/
for (let i = 1; i < 101; i++) {  //i numeri da 1 a 100//
    if (i % 5 == 0 && i % 3 == 0 ) {  //multipli per 5 e 3//
        console.log(i + " - FizzBuzz");
    } else if (i % 5 == 0) {           //multipli per 5//
        console.log(i + " - Buzz");
    } else if (i % 3 == 0) {           //multipli per 3//
        console.log(i + " - Fizz");
    }
}