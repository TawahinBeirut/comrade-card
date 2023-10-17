const {list,nonNull,nullable,queryField, intArg, stringArg, arg} = require("nexus");
const {User, ResUser,ResBasket} = require('./models');
const prisma = require('../contexts');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

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
    type: nullable(ResUser),
    args: {
        Email : nonNull(stringArg()),
        Password: nonNull(stringArg())
    },
    resolve: async(root,args,) => {
        const result = await prisma.user.findUnique({
            where: {
                Email: args.Email
            }
        })
        if (result == null){
            return {Statut : 0, Message : "Erreur lors de la recherche de mail"}
        }
        else{
            const result2 = bcrypt.compare(args.Password,result.Password)
            .then(res => {
                if(res){
                    const token = jwt.sign({name: result.Name},process.env.TOKEN_SECRET_KEY,{expiresIn : '1d'})
                    return {Statut: 200, Message : "L'operation a reussi",Cookie: token,data : [result]}
                }
                else return {Statut : 0,Message : "Mot de passe non valide"}
            })
            .catch(err => {return {Statut: 0, Message: err}})
            .finally(mess => {
                return mess
            })
            return result2;
        }
    }
})

const verifyUser = queryField('VerifyUser',{
    type:nullable(ResUser),
    args:{
        Cookie : nonNull(stringArg())
    },
    resolve: async (root,args) => {
        try{
        jwt.verify(args.Cookie,process.env.TOKEN_SECRET_KEY)
        }
        catch(err){return {Statut : 0}}
        return {Statut : 200}
    }
})
// Fonction pour avoir tous les Paniers de la db
const getBaskets = queryField('GetBaskets',{
    type:nullable(ResBasket),
    resolve: async (root,args) => {
        try{
            const result = await prisma.basket.findMany({})
            return {Statut: 200, Message: "Recuperation des donnés ",data: result}
        }
        catch(err){return {Statut : 0 , Message : "Echec de la récuperation de données"}}
    }
})
// Fonctions pour les Produits 

// Fonction pour récuperer un produit en particulier

// Fonction pour récuperer des produits en fonction de leur catégorrie

module.exports = {
    Users,user,Login,verifyUser,getBaskets
}