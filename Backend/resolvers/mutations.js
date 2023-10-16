const {mutationField,resolve,nullable, stringArg, nonNull, intArg} = require("nexus");
const {Res,User} = require("./models");
const prisma = require("../contexts");
const bcrypt = require('bcrypt');
const salt = 10;

// Users Routes
// Créer un User
const createUser = mutationField(("Register"),{
    type : nullable(Res),
    args: {
        Name : nonNull(stringArg()),
        Email : nonNull(stringArg()),
        Password : nonNull(stringArg()),
        Score : nonNull(intArg())
    },
    resolve: async (root,args) => {
        bcrypt.hash(args.Password,salt,(err,hash) => {
            if (err) return {Statut : 0 , Message : "Erreur au hachage du mot de passe"}
            const result = prisma.user.create({
                data: {
                    ...args
                }
        })
        if(result instanceof null){
            return {Statut : 0,Message : "Erreur lors de l'insertion des données"}
        }
        else {
            return {Statut : 200, Message : "Succés, Utilisateur creé", data: result}
        }
    })}
})

//Update un User 
const updateUser = mutationField("UpdateUser",{
    type: nullable(User),
    args: {
        id : nonNull(intArg()),
        Name: nonNull(stringArg()),
        Password : nonNull(stringArg()),
        Score : nonNull(intArg())
    },  
    resolve: async (root,args) => {
        const result = prisma.user.update({
            where:{
                id : args.id
            },
            data:{
                ...args
            }
        })
        return result;
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



// Get
module.exports = {
    createUser,deleteUser,updateUser,

}