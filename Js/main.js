const sqlite3 = require('sqlite3').verbose();
let sql;

// let time = new Date(); // for now

// if (time.getHours() > 12) {
//     let hours = time.getHours() % 12 + " P.M";
//     let minutes = time.getMinutes();
// } else {
//     console.log(time.getHours() % 12 + ":" + d.getMinutes() + " A.M");
// }

// const db = new sqlite3.Database('.\\chat.db', sqlite3.OPEN_READWRITE, (err) => {
//     if (err) return console.log(err.message);
// });

// sql = "SELECT * from chat";

// function search(ele) {
//     if (event.key === 'Enter') {
//         alert(ele.value);
//         db.all(sql, (err, rows) => {
//             if (err) return console.log(err.message);
//             rows.forEach(row => {
//                 console.log(row);
//             });
//         });
//     }
// }