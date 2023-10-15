
const {PrismaClient} = require('prisma');

const prisma = new PrismaClient();

module.exports =  createContext = () =>{
    return { prisma };
}