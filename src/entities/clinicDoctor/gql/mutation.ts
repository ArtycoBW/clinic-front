// Мутация для создания врача в клинике
import { gql } from '@apollo/client'
import { CLINIC_DOCTOR_ATTRIBUTES } from '@/entities/clinicDoctor/gql/fragments'

export const CREATE_CLINIC_DOCTOR = gql`
    mutation createClinicDoctor($clinicId: ID!, $doctorId: String!) {
        packet {
            createClinicDoctor(input: {
                clinic: $clinicId
                doctor: { entityId: $doctorId }
            }) {
                ...ClinicDoctorAttributes
            }
        }
    }
    ${CLINIC_DOCTOR_ATTRIBUTES}
`

// Мутация для удаления врача из клиники
export const DELETE_CLINIC_DOCTOR = gql`
    mutation deleteClinicDoctor($id: ID!) {
        packet {
            deleteClinicDoctor(id: $id)
        }
    }
`
