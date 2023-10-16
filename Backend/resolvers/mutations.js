const {mutationField,resolve,nullable, stringArg, nonNull, intArg} = require("nexus");
const {User} = require("./models");
const prisma = require("../contexts");


// Créer un utilisateur
const createUser = mutationField(("CreateUser"),{
    type : nullable(User),
    args: {
        Name : nonNull(stringArg()),
        Email : nonNull(stringArg()),
        Password : nonNull(stringArg()),
        Score : nonNull(intArg())
    },
    resolve: async (root,args) => {
        const result = prisma.user.create({
            data: {
                ...args
            }
    })  
        return result
    }
})
// Delete un User
const deleteUser = mutationField(("DeleteUser"),{
    type: nullable(User),
    args: {
        id: nonNull(intArg())
    },
    resolve: async(root,args) => {
        const result = prisma.user.delete({
            where : {
                id: args.id
            }
        })
        return result
    }
})

module.exports = {
    createUser,deleteUser
}