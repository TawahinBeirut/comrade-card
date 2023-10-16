const {list,nonNull,nullable,queryField, intArg, stringArg} = require("nexus");
const {User, Res} = require('./models');
const prisma = require('../contexts');
const bcrypt = require('bcrypt');

// Get All 
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
        id : nonNull(intArg())
    },
    resolve: async (root,args) => {

        const result = await prisma.user.findUnique({
            where:{
                id : args.id
            }
        })
        return result
    }
})
// Fonction Login
const Login = queryField("Login",{
    type: nullable(Res),
    args: {
        id: nonNull(intArg()),
        Email : nonNull(stringArg()),
        Password: nonNull(stringArg())
    },
    resolve: async(root,args) => {
        const result = await prisma.user.findUnique({
            where: {
                id: args.id
            }
        })
        if (result instanceof null){
            return {Statut : 0, Message : "Erreur lors de la recherche de mail"}
        }
        else{
            bcrypt.compare(args.Password,result.Password,(err,response) => {
                if (err) return {Statut : 0,Message : "Erreur à la recherche de mot de passe"}
                if(response){
                    // Envoyer le cookie
                    res.cookie
                }
                else{
                    return {Statut : 0,Message : "Mot de passe non valide"}
                }
            })
        }
    }
})

module.exports = {
    Users,user
}