import { gql } from '@apollo/client'

export const CREATE_CLINIC_DOCTOR_AVAILABILITY = gql`
    mutation createClinicDoctorAvailability(
        $clinicDoctorId: ID!
        $beginDate: _DateTime!
        $endDate: _DateTime!
        $clinicOfficeId: ID!
    ) {
        packet {
            getClinicDoctor(
                id: "find: it.id == $clinicDoctorId && $beginDate < $endDate && !it.clinicDoctorAvailabilityList{cond = it.endDate >= $beginDate && it.beginDate <= $endDate}.$exists"
                failOnEmpty: true
                lock: WAIT
            ) {
                id
            }

            getClinicOffice(
                id: "find: it.id == $clinicOfficeId && !entities{type = ClinicDoctorAvailability, cond = it.clinicOffice.id == $clinicOfficeId && it.endDate >= $beginDate && it.beginDate <= $endDate}.$exists"
                failOnEmpty: true
                lock: WAIT
            ) {
                id
            }

            createClinicDoctorAvailability(input: {
                clinicDoctor: $clinicDoctorId
                clinicOffice: $clinicOfficeId
                beginDate: $beginDate
                endDate: $endDate
            }) {
                ...ClinicDoctorAvailabilityAttributes
            }
        }
    }
`


export const DELETE_CLINIC_DOCTOR_AVAILABILITY = gql`
    mutation deleteClinicDoctorAvailability($id: ID!) {
        packet {
            deleteClinicDoctorAvailability(id: $id)
        }
    }
`