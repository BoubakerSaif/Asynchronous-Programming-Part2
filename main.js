/*
Callback Hell */

// function makeitRed(e) {
//   e.target.style.color = "red";
// }

// let text = document.querySelector("h1");

// text.addEventListener("click", makeitRed);

// function imACallback() {
//   console.log("Callback function");
// }

// setTimeout(imACallback, 2000);

// setTimeout(() => {
//   console.log("Download Photo");
//   setTimeout(() => {
//     console.log("Resize Photo");
//     setTimeout(() => {
//       console.log("Change Color");
//       setTimeout(() => {
//         console.log("Add Photo to our website");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// setTimeout(() => {
//   console.log("Download Photo");
// }, 1000);
// setTimeout(() => {
//   console.log("Resize Photo");
// }, 2000);
// setTimeout(() => {
//   console.log("Change Color");
// }, 3000);

// const myPromise = new Promise((resolveFun, rejectFun) => {
//   let connect = true;
//   if (connect) {
//     resolveFun("Connection Established");
//   } else {
//     rejectFun(Error("Connection Failed"));
//   }
// }).then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log(rejectedValue)
// );

// const myPromise = new Promise((res, rej) => {
//   let employees = ["First", "Second", "Third", "Fourth"];
//   if (employees.length === 4) {
//     res(employees);
//   } else {
//     rej(Error("Number of employees is not 4"));
//   }
// })
//   .then((resolveValue) => {
//     resolveValue.length = 2;
//     return resolveValue;
//   })
//   .then((resolveValue2) => {
//     resolveValue2.length = 1;
//     return resolveValue2;
//   })
//   .then((resolveValue3) => {
//     console.log("The chosen one is" + " " + resolveValue3);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(console.log("The operation is done"));

// const getData = (apiLink) => {
//   return new Promise((resolved, rejected) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolved(JSON.parse(this.responseText));
//       } else {
//         rejected(Error("No data found"));
//       }
//     };
//     myRequest.open("GET", apiLink);
//     myRequest.send();
//   });
// };

// getData("https://api.github.com/users/BoubakerSaif")
//   .then((result) => {
//     return result;
//   })
//   .then((result) => {
//     console.log(result.login);
//   });

//------------------------------------------------------------------------
// Fetch

// fetch("https://api.github.com/users/BoubakerSaif")
//   .then((result) => {
//     let myData = result.json();
//     return myData;
//   })
//   .then((myData) => {
//     return myData;
//   })
//   .then((myData) => {
//     return name;
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//////////////////////////////////////////////////////////////
// All
// All Settled
// Race

// const FirstPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("First Promise");
//   }, 5000);
// });
// const SecondPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Second Promise");
//   }, 1000);
// });
// const ThirdPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Third Promise");
//   }, 2000);
// });

// Promise.all([FirstPromise, SecondPromise, ThirdPromise]).then(
//   (res) => {
//     console.log(res);
//   },
//   (rej) => {
//     console.log(`Error from ${rej}`);
//   }
// );

// Promise.allSettled([FirstPromise, SecondPromise, ThirdPromise]).then(
//   (res) => {
//     console.log(res);
//   },
//   (rej) => {
//     console.log(`Error from ${rej}`);
//   }
// );

// Promise.race([FirstPromise, SecondPromise, ThirdPromise]).then(
//   (res) => {
//     console.log(res);
//   },
//   (rej) => {
//     console.log(`Error from ${rej}`);
//   }
// );

////////////////////////////////////////////////////////

/* Async
-Async before the function , this function return a promise
-Async and await help in creatin asynchronous promise bhavior
*/

// function getData() {
//   return new Promise((res, rej) => {
//     let users = [];
//     if (users.length > 0) {
//       res("Users found");
//     } else {
//       rej("No users found");
//     }
//   });
// }

// function getData() {
//   let users = [];
//   if (users.length > 0) {
//     return Promise.resolve("Users Found");
//   } else {
//     return Promise.reject("No Users Found");
//   }
// }

// getData().then(
//   (res) => {
//     console.log(res);
//   },
//   (rej) => {
//     console.log(rej);
//   }
// );

// async function getData() {
//   let users = [1];
//   if (users.length > 0) {
//     return "Users Found";
//   } else {
//     throw new Error("No users Found");
//   }
// }

// getData().then((res) => {
//   console.log(res);
// });

// const myPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Good Promise");
//   }, 3000);
// });

// async function readData() {
//   console.log("Before Promise");
//   console.log(await myPromise);
//   console.log("After Promise");
// }

// readData();
////////////////////////////////////////////////////////////////
// const myPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(" Promise Done");
//   }, 3000);
// });

// async function readData() {
//   console.log("Before Promise");
//   try {
//     console.log(await myPromise);
//   } catch (error) {
//     console.log(`Reason:${error}`);
//   } finally {
//     console.log("After Promise");
//   }
// }

// readData();

// async function fetchData() {
//   console.log("Before Fetching Data");
//   try {
//     let myData = await fetch("https://api.github.com/users/BoubakerSaif");
//     console.log(await myData.json());
//   } catch (error) {
//     console.log(`Reason:${error}`);
//   } finally {
//     console.log("After Fetching");
//   }
// }

// fetchData();

// fetch("https://api.github.com/users/BoubakerSaif")
//   .then((result) => {
//     console.log(result);
//     let myData = result.json();
//     return myData;
//   })
//   .then((myData) => {
//     console.log(myData);
//     return myData;
//   })

//   .catch((err) => {
//     console.log(err);
//   });
