const mongoose = require("mongoose");
require('dotenv').config()

function connectDBs() {
    try {
        const economyDb = mongoose.createConnection(process.env.MONGOURLECONOMY, {})
        const birthdayDb = mongoose.createConnection(process.env.MONGOURLBIRTHDAY, {})
        const usersDb = mongoose.createConnection(process.env.MONGOURLUSERS, {})
        const ticketingDb = mongoose.createConnection(process.env.MONGOURLTICKET, {})
        const configDb = mongoose.createConnection(process.env.MONGOURLCONFIG, {})
        return { economyDb, birthdayDb, usersDb, ticketingDb, configDb }
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}
module.exports = { connectDBs }

try {
    console.log("Connected to the cluster, all connections to the databases have been established!");
} catch(err) {
    console.error(err);
}