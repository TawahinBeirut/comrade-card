import { gql } from "@apollo/client"

const VerifyUser = gql`query($cookie: String!){
    VerifyUser(Cookie: $cookie) {
      Statut,data {
        Email
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

export {VerifyUser,Register,Login}