const {makeSchema, objectType, queryField, arg, mutationField, nullable, nonNull, intArg} = require("nexus")

// const Models = require("./resolvers/models");
// const Mutations = require("./resolvers/mutations");
// const Queries = require("./resolvers/queries");


// console.log(types)

// Modele
const User = objectType({
    name: 'User',
    definition(t){
        t.int('id');
        t.string('Email')
    }
})

// Query
const usersGet = queryField('users',{
    type: User,
    resolve: async(root,args) => {
        return {
            id: 1,
            Email :"oe"
        }
    }
})

// Mutation
const userMutate = mutationField("createUser",{
    type: nullable(User),
    args:{
        argid: nonNull(intArg())
    },
    resolve: async(root,args) => {
        return {
            id:2,
            Email : "nan"
        }
    }
})

const schema = makeSchema({
    types : [User,usersGet,userMutate]
})

module.exports = schema;