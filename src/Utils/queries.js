import { gql } from "@apollo/client"

const VerifyUser = gql`query($cookie: String!){
    VerifyUser(Cookie: $cookie) {
      Statut,data {
        Email,id
      }
    }
  }`
// Faires les Queries Login et Register
const Register = gql`mutation($name: String!, $email: String!, $password: String!){
  Register(Name: $name, Email: $email, Password: $password) {
    Statut,Message
  }
}`
const Login = gql`query($email: String!, $password: String!){Login(Email: $email, Password: $password) {
  Statut,Cookie,Message,data {
    id
  }
}}`
const Profile = gql`query($userId: Int!){
  User(id: $userId) {
    Statut,Message,data {
      Email,Name,Score
    }
  }
}`

const ProductsCat = gql`query{
  Products {
    Statut,data {
    id,idCategorie,Name,Description,Statut,NbBaskets
    }
  }
}`

export {VerifyUser,Register,Login,Profile,ProductsCat}