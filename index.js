//const premiumUsers = ["nino_dev", "giorgi_99", "lasha_j", "teona_art", "mzia_frontend"];
//let userName = prompt("ჩაწერეთ თქვენი სახელი:");
//if (premiumUsers.includes(userName)) {
  //alert("წვდომა დაშვებულია! ისიამოვნეთ პრემიუმ სტატიით.");
  
//}else {
 // alert("ბოდიში, ეს სტატია მხოლოდ პრემიუმ წევრებისთვისაა.");
//}

// ვინ ყიდულობს ლანჩს? (დავალება სახლში)
function whopays(names) {
  let randomindex = Math.floor(Math.random() * names.length);
  let chosenperson = names[randomindex];
  return chosenperson + " is going to buy lunch today";
}
console.log(whopays(["Angela", "Ben", "Jenny", "Michael", "Chloe"]));



// ––––––––––––––––––––––––––––––––––––––

// while loop

function beer() {
  let count = 99;

  while (count > 0) {
    console.log(count + " bottles of beer on the wall, " + count + " bottles of beer.");
    
    count--;

    if (count > 0) {
      console.log("Take one down and pass it around, " + count + " bottles of beer on the wall.");
    } else {
      console.log("Take one down and pass it around, no more bottles of beer on the wall.");
    }
  }

  console.log("No more bottles of beer on the wall, no more bottles of beer.");
  console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
}
beer();
// –––––––––––––––––––––––––––––––~

// https://drive.google.com/file/d/1g8vVtqhSj44vcElfc-HK0nMbecteW8Yg/view
// ამ დავალების იდეაა, რომ შეძლოთ ფიბონაჩის მიმდევრობის რეპლიკაცია.
// ფიბონაჩი იყო იტალიელი მათემატიკოსი, რომელმაც შექმნა ფიბონაჩის მიმდევრობა:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// აქ ყოველი რიცხვი არის წინა ორი რიცხვის ჯამი.
// მაგალითად: 0, 1, 1, 2, 3, 5 მიიღება ასე:

// 0 + 1 = 1

// 1 + 1 = 2

// 1 + 2 = 3

// 2 + 3 = 5
// და ა.შ.

// თქვენი მიზანია შექმნათ ფუნქცია, რომლის გამოძახებასაც შეძლებთ უბრალოდ დაწერით: fibonacciGenerator(n). შიგნით ჩწერთ n-ს, სადაც n იქნება იმ ელემენტების რაოდენობა მიმდევრობაში, რომლის შექმნაც გსურთ. მაგალითად, თუ გსურთ მიიღოთ ფიბონაჩის მიმდევრობის პირველი სამი ელემენტი, მაშინ უნდა შეგეძლოთ გამოიძახოთ fibonacciGenerator(3), გადასცეთ რიცხვი 3 და შედეგად (Output) მიიღოთ მასივი [0, 1, 1].

// მაგალითად, თუ გამოვიძახებ:
// fibonacciGenerator(3)
// შედეგად უნდა მივიღო მასივი:
// [0, 1, 1]

// ... (18 lines left)
function fibonacciGenerator(n) {
  let mimdevroba = [];

  if (n === 1) {
    mimdevroba = [0];
  } else if (n === 2) {
    mimdevroba = [0, 1];
  } else {
    mimdevroba = [0, 1];
    let i = 2;

    while (i < n) {
      mimdevroba.push(mimdevroba[i - 1] + mimdevroba[i - 2]);
      i++;
    }
  }

  return mimdevroba;
}