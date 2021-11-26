// function debounce() {
//   let a;

//   return function() {
//     clearTimeout(a);

//     a = setTimeout(() => {
//       console.log("Hiiii");
//     }, 1000);
//   };
// }
// debounce();
// arr = [1, 2, 3];
// arr.reduce((val1, val2) => {
//   if (val1 instanceof Array) {
//     val1 = 0;
//   }
//   [val1 + val1, val2 + val2];
// });
let arr = [
  {
    id: 1,
    name: "Suresh",
    details: [
      {
        id: 5,
        name: "dhanush",
        details: [
          {
            id: 9,
            name: "Manish"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "rohit",
    details: [
      {
        id: 6,
        name: "ramesh"
      }
    ]
  },
  {
    id: 3,
    name: "shiva",
    details: [
      {
        id: 7,
        name: "vinay"
      }
    ]
  },
  {
    id: 4,
    name: "mohit",
    details: [
      {
        id: 8,
        name: "sravan"
      }
    ]
  }
];

function fetchId(obj,parnt){
for(let i in obj){
if(typeof obj[i]===Object){
    fetchId(obj[i],)
}
}
}

// function fetchId(val) {
//   arr.forEach(obj => {
//     if (obj.id === val) {
//       console.log(obj);
//     } else if (obj.details[0].id === val) {
//       console.log(obj.details[0]);
//     }
//   });
// }
// // a = prompt("Enter id")
// // b = Number(a);
// fetchId(1);
