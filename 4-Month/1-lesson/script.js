// const p1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1 bajarildi"), 3000));
// const p2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2 bajarildi"), 2000));
// const p3 = new Promise((resolve) => setTimeout(() => resolve("Promise 3 bajarildi"), 1000));

// Promise.race([p1, p2, p3]).then(result => {
//     console.log("Birinchi bajarilgan:", result);
// });


// class Animal {
//     constructor(name) {
//         if (new.target === Animal) {
//             throw new Error("Animal abstract classdan obyekt yaratilmaydi!");
//         }
//         this.name = name;
//     }

//     speak() {
//         throw new Error("speak() metodi subclassda yozilishi kerak!");
//     }
// }

// class Dog extends Animal {
//     speak() {
//         console.log(this.name + " vovulladi 🐶");
//     }
// }

// class Cat extends Animal {
//     speak() {
//         console.log(this.name + " miyovladi 🐱");
//     }
// }

// class Cow extends Animal {
//     speak() {
//         console.log(this.name + " mo‘ridi 🐮");
//     }
// }

// const dog = new Dog("Rex");
// const cat = new Cat("Murka");
// const cow = new Cow("Zebu");

// dog.speak();
// cat.speak();
// cow.speak();


// class MathUtils {
//     static kvadrat(n) {
//         return n * n;
//     }

//     static kub(n) {
//         return n * n * n;
//     }

//     static tasodifiy(min, max) {
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     }
// }

// console.log(MathUtils.kvadrat(5)); 
// console.log(MathUtils.kub(3));    
// console.log(MathUtils.tasodifiy(1, 100)); 
