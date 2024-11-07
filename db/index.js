const mongoose = require('mongoose');

main().catch(err => {
    console.log('error while connecting')
    console.log(err)});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
.then(() => {
    console.log('connection successful')
})};

