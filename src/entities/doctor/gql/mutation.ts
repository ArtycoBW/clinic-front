// Мутация для создания доктора
import { DOCTOR_ATTRIBUTES } from '@/entities/doctor/gql/fragments'
import { gql } from '@apollo/client'

export const CREATE_DOCTOR = gql`
    ${DOCTOR_ATTRIBUTES}
    mutation createDoctor($doctorTypeId: ID!, $personId: String!) {
        packet {
            createDoctor(input: {
                doctorType: $doctorTypeId
                person: { entityId: $personId }
            }) {
                ...DoctorAttributes
            }
        }
    }
`

export const UPDATE_DOCTOR = gql`
    ${DOCTOR_ATTRIBUTES}
    mutation updateDoctor($id: ID!, $doctorTypeId: ID!, $personId: String!) {
        packet {
            updateDoctor(input: {
                id: $id
                doctorType: $doctorTypeId
                person: { entityId: $personId }
            }) {
                ...DoctorAttributes
            }
        }
    }
`

// Мутация для удаления доктора
export const DELETE_DOCTOR = gql`
    mutation deleteDoctor($id: ID!) {
        packet {
            deleteDoctor(id: $id)
        }
    }
`