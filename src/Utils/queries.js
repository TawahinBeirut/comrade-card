import { gql } from "@apollo/client"

const VerifyUser = gql`query($cookie: String!){
    VerifyUser(Cookie: $cookie) {
      Statut,data {
        Email
      }
    }
  }`

export {VerifyUser}