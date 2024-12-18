import { gql } from '@apollo/client'
import { PERSON_ATTRIBUTES } from '@/entities/person/gql/fragments'

export const CREATE_PERSON = gql`
    mutation createPerson($input: _CreatePersonInput!) {
        packet {
            createPerson(input: $input) {
                ...PersonAttributes
            }
        }
    }
    ${PERSON_ATTRIBUTES}
`

export const UPDATE_PERSON = gql`
    mutation updatePerson($input: _UpdatePersonInput!) {
        packet {
            updatePerson(input: $input) {
                ...PersonAttributes
            }
        }
    }
    ${PERSON_ATTRIBUTES}
`

// Мутация для удаления персоны
export const DELETE_PERSON = gql`
    mutation deletePerson($id: ID!) {
        packet {
            deletePerson(id: $id)
        }
    }
`