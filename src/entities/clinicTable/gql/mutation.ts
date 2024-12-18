import { CLINIC_TABLE_ATTRIBUTES_FRAGMENT } from '@/entities/clinicTable/gql/fragments'
import { gql } from '@apollo/client'

export const CREATE_CLINIC_TABLE = gql`
  mutation createClinicTable(
    $clinicId: ID!
    $clinicDoctorId: ID!
    $beginDate: _DateTime!
    $endDate: _DateTime!
    $clinicOfficeId: ID!
    $customerId: String!
  ) {
    packet {
      getClinicDoctor(
        id: "find: it.id == $clinicDoctorId && $beginDate < $endDate && it.clinicDoctorAvailabilityList{cond = it.clinicOffice.id = $clinicOfficeId && it.beginDate <= $beginDate && it.endDate >= $endDate}.$exists"
        failOnEmpty: true
        lock: WAIT
      ) {
        id
      }
      getClinic(
        id: "find: it.id == $clinicId && $beginDate < $endDate && !it.clinicTableList{cond = it.endDate >= $beginDate && it.beginDate <= $endDate && (it.clinicDoctor.id == $clinicDoctorId || it.clinicOffice.id == $clinicOfficeId || it.customer.entityId == $customerId})}.$exists"
        failOnEmpty: true
        lock: WAIT
      ) {
        id
      }
      createClinicTable(
        input: {
          clinic: $clinicId
          clinicDoctor: $clinicDoctorId
          clinicOffice: $clinicOfficeId
          customer: { entityId: $customerId }
          beginDate: $beginDate
          endDate: $endDate
        }
      ) {
        ...ClinicTableAttributes
      }
    }
  }
  ${CLINIC_TABLE_ATTRIBUTES_FRAGMENT}
`

// GraphQL mutation for deleting a clinic table
export const DELETE_CLINIC_TABLE = gql`
  mutation deleteClinicTable($id: ID!) {
    packet {
      deleteClinicTable(id: $id)
    }
  }
`
