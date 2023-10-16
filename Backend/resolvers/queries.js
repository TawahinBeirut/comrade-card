const {list,nonNull,nullable,queryField, intArg, stringArg, arg} = require("nexus");
const {User, Res} = require('./models');
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
    type: nullable(Res),
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
    type:nullable(Res),
    args:{
        Cookie : nonNull(stringArg())
    },
    resolve: async (root,args) => {
        jwt.verify(args.Cookie,process.env.TOKEN_SECRET_KEY,(err,decoded) => {
            if (err){
                return {Statut : 0,Message : "Token non valable"}
            }
            else{
                return {Statut: 200, Message : "L'opearation a reussi", Cookie: decoded}
            }
        })
    }
})

module.exports = {
    Users,user,Login,verifyUser
}