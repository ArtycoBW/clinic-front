import { CLINIC_ATTRIBUTES_FRAGMENT } from '@/entities/clinic/gql/fragments'
import { gql } from '@apollo/client'

export const CREATE_CLINIC = gql`
    mutation createClinic($name: String!) {
        packet {
            createClinic(input: { name: $name }) {
                ...ClinicAttributes
            }
        }
    }
    ${CLINIC_ATTRIBUTES_FRAGMENT}
`

export const UPDATE_CLINIC = gql`
    ${CLINIC_ATTRIBUTES_FRAGMENT}
    mutation updateClinic($id: ID!, $name: String!) {
        packet {
            updateClinic(input: { id: $id, name: $name }) {
                ...ClinicAttributes
            }
        }
    }
`

export const DELETE_CLINIC = gql`
    mutation deleteClinic($id: ID!) {
        packet {
            deleteClinic(id: $id)
        }
    }
`