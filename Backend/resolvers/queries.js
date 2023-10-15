
const {list,nonNull,nullable,queryField} = require("nexus");
const {User} = require('./models');

const Users = queryField("Users",{
    type : nullable(list(nonNull(User))),
    resolve: async (root,args,ctx) => {
        return [];
    }
})

const user = queryField("User",{
    type : nullable(User),
    resolve: async (root,args,ctx) => {
        return null;
    }
})

module.exports = {
    Users,user
}