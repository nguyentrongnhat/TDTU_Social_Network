const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;

async function connect() {

    try {
        await mongoose.connect(uri, {
            useNameUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect successfully!!!')
    } catch (error){
        console.log('Connect failure!!!')
    }
}

module.exports = { connect };