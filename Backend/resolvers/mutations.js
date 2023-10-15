const {mutationField,resolve,nullable} = require("nexus");
const {User} = require("./models");


const createUser = mutationField(("createUser"),{
    type : nullable(User),
    resolve: async (root,args,ctx) => {
        return null;
    }
})

module.exports = {
    createUser
}