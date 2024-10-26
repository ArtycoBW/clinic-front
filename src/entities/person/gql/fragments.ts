import { gql } from '@apollo/client'

export const PERSON_ATTRIBUTES = gql`
    fragment PersonAttributes on _E_Person {
        id
        __typename
        firstName
        lastName
        inn
        birthDate
    }
`