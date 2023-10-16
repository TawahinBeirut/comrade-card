const {list,nonNull,nullable,queryField, intArg} = require("nexus");
const {User} = require('./models');
const prisma = require('../contexts');

// Avoir tous les Users de la DB
const Users = queryField("Users",{
    type : nullable(list(nonNull(User))),
    resolve: async (root,args) => {
        const result = await prisma.user.findMany()
        return result;
    }
})
// Avoir un User en particulier
const user = queryField("User",{
    type : nullable(User),
    args: {
        argid : nonNull(intArg())
    },
    resolve: async (root,args) => {
        const result = await prisma.user.findUnique({
            where:{
                id : args.argid
            }
        })
        return result
    }
})

module.exports = {
    Users,user
}