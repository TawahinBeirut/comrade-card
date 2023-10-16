const {mutationField,resolve,nullable, stringArg, nonNull, intArg, arg, idArg} = require("nexus");
const {ResUser,User, ResBasket} = require("./models");
const prisma = require("../contexts");
const bcrypt = require('bcrypt');
const saltRounds = 10


// Créer un nouvel Utilisateur
const createUser = mutationField("Register",{
    type : nullable(ResUser),
    args: {
        Name : nonNull(stringArg()),
        Email : nonNull(stringArg()),
        Password : nonNull(stringArg())
    },
    resolve: async (root,args) => {
        const result = 
        bcrypt
        .genSalt(saltRounds)
        .then(salt => {
            return bcrypt.hash(args.Password,salt);
        })
        .then(async hash => {
            const result = await prisma.user.create({
                data:{
                    Name : args.Name,
                    Email : args.Email,
                    Password : hash
                }
            })
            // On ajoute un panier 
            await prisma.basket.create({
                data: {
                    id: result.id
                }
            })
            
            return {Statut: 200, Message : "Insertion des données réussi", data: [result]}
        })
        .catch(err => {
            return {Statut : 0, Message : err}
        })
        .finally(mess => {return mess})
        return result
    }
        
})

//Update un User 
const updateUser = mutationField("UpdateUser",{
    type: nullable(ResUser),
    args: {
        id : nonNull(intArg()),
        Name: nonNull(stringArg()),
        Password : nonNull(stringArg()),
        Score : nonNull(intArg())
    },  
    resolve: async (root,args) => {
        const result = await prisma.user.update({
            where:{
                id : args.id
            },
            data:{
                ...args
            }
        })
        return {Statut : 200, Message : "Modification des données réussie",data : [result]};
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

// Delete tous les Users
const deleteAllUsers = mutationField("DeleteAllUsers",{
    type: nullable(ResUser),
    resolve: async(root,args) => {  
        const result = await prisma.user.deleteMany({})
        return {Statut : 200,Message : "Tous les Users sont supprimés"}
    }
})

// Fonction pour delete un Basket
const deleteBasket = mutationField('DeleteAllBaskets',{
    type:  nullable(ResBasket),
    resolve: async (root,args) => {
        try{
            const result = await prisma.basket.deleteMany({})
            return {Statut : 200,Message : "La supression des données a fonctionné",data: result}
        }
        catch(err){return {Statut : 0 ,Message : err}}
    }
})

// Fonctions pour les produits

// Fonction pour poster un produit
const postProduct = mutationField("PostProduct",{
    type: nullable(ResUser),
    args: {
        name: nonNull(stringArg()),
        description : nonNull(stringArg()),
        sellerid : nonNull(idArg())
    },
    resolve: async(root,args) => {
        // On récuperer le nombre de 
    }
})


// Get
module.exports = {
    createUser,deleteUser,updateUser,deleteAllUsers,deleteBasket

}