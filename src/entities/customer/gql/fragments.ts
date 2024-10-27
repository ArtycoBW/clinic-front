import { gql } from '@apollo/client'

export const CUSTOMER_ATTRIBUTES = gql`
    fragment CustomerAttributes on _E_Customer {
        id
        __typename
        insurancePolicyNumber
        phoneNumber
        person {
            entityId
            entity{
                firstName
                lastName
            }
        }
    }
`