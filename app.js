const fs = require('fs');
const icerik = '[{ "name": "Employee 1 Name", "salary": 2000 }';
const icerik2 = ',{ "name": "Employee 2 Name", "salary": 4000 }]';

// CREATE
fs.writeFile('./employees.json', icerik, 'utf-8', (err) => {
    if (err) console.log(err);
});

// READ
fs.readFile("./employees.json", 'utf-8', (err, data) => {
    if (err) console.log(err);
    console.log(data)
});

//Bu veriyi güncelleyelim
fs.appendFile("./employees.json", icerik2, 'utf-8', (err) => {
    if (err) console.log(err)
});

//Dosyayı silelim.
fs.unlink('./employees.json', (err) => {
    if (err) console.log(err);;
})