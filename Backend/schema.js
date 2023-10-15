const {makeSchema} = require("nexus")

const Models = require("./resolvers/models");
const Mutations = require("./resolvers/mutations");
const Queries = require("./resolvers/queries");

const types = {...Models,...Mutations,...Queries}
// console.log(types)
const schema = makeSchema({
    types
})

module.exports = schema;