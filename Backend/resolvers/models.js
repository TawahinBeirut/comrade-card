const {objectType} = require("nexus");

// User 
const User = objectType({
    name: 'User',  
    definition(t) {
        t.id("id")
        t.string("Name")
        t.string("Email")
        t.string("Password")
        t.int("Score")
    }
})

// Product
const Product = objectType({
    name : 'Product',
    definition(t){
        t.id("id")
        t.string("Name")
        t.int("Statut")
        t.string("Description")
        t.id("SellerId")
        t.int("NbBaskets")
    }
})

// Basket
const Basket = objectType({
    name : 'Basket',
    definition(t){
        t.id("id")
        t.list.field('products',{type: Product})
    }
})

// Command

const Command = objectType({
    name : 'Command',
    definition(t){
        t.id("id")
        t.id("UserId")
        t.list.field("products",{type: Product})
    }
})

// Categorie
const Categorie = objectType({
    name : 'Categorie',
    definition(t){
        t.id("id")
        t.int("Score")
        t.list.field("products",{type: Product})
        t.int("Stock")
    }
})

const Res = objectType({
    name : 'Res',
    definition(t){
        t.int("Statut")
        t.string("Message")
        t.string("Cookie")
        t.list.field("data",{type: User})
    }
})
module.exports = {
    User,Product,Basket,Command,Categorie,Res
}