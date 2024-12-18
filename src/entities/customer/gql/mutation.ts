// Мутация для создания клиента
import { gql } from '@apollo/client'
import { CUSTOMER_ATTRIBUTES } from '@/entities/customer/gql/fragments'

export const CREATE_CUSTOMER = gql`
    mutation createCustomer(
        $personId: String!
        $insurancePolicyNumber: String!
        $phoneNumber: String
    ) {
        packet {
            createCustomer(input: {
                person: { entityId: $personId }
                insurancePolicyNumber: $insurancePolicyNumber
                phoneNumber: $phoneNumber
            }) {
                ...CustomerAttributes
            }
        }
    }
    ${CUSTOMER_ATTRIBUTES}
`

// Мутация для обновления клиента
export const UPDATE_CUSTOMER = gql`
    mutation updateCustomer(
        $id: ID!
        $phoneNumber: String
    ) {
        packet {
            updateCustomer(input: {
                id: $id
                phoneNumber: $phoneNumber
            }) {
                ...CustomerAttributes
            }
        }
    }
    ${CUSTOMER_ATTRIBUTES}

`

export const DELETE_CUSTOMER = gql`
    mutation deleteCustomer($id: ID!) {
        packet {
            deleteCustomer(id: $id)
        }
    }
`