// Мутация для создания офиса клиники
import { CLINIC_OFFICE_ATTRIBUTES_FRAGMENT } from '@/entities/clinicOffice/gql/fragments'
import { gql } from '@apollo/client'

export const CREATE_CLINIC_OFFICE = gql`
    mutation createClinicOffice($clinicId: ID!, $officeNumber: String!) {
        packet {
            createClinicOffice(input: {
                clinic: $clinicId
                officeNumber: $officeNumber
            }) {
                ...ClinicOfficeAttributes
            }
        }
    }
    ${CLINIC_OFFICE_ATTRIBUTES_FRAGMENT}
`


// Мутация для удаления офиса клиники
export const DELETE_CLINIC_OFFICE = gql`
    mutation deleteClinicOffice($id: ID!) {
        packet {
            deleteClinicOffice(id: $id)
        }
    }
`