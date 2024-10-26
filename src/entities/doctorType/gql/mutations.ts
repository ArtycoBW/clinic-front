import { gql } from '@apollo/client'
import { DOCTOR_TYPE_ATTRIBUTES } from '@/entities/doctorType/gql/fragments'


export const UPDATE_OR_CREATE_DOCTOR_TYPE = gql`
    mutation updateOrCreateDoctorType(
        $id: ID!
        $name: String!
        $description: String
    ) {
        dictionaryPacket {
            updateOrCreateDoctorType(input: {
                id: $id
                name: $name
                description: $description
                isDel: false
            }) {
                returning {
                    ...DoctorTypeAttributes
                }
            }
        }
    }
    ${DOCTOR_TYPE_ATTRIBUTES}
`

export const DELETE_DOCTOR_TYPE = gql`
    ${DOCTOR_TYPE_ATTRIBUTES}
    mutation deleteDoctorType($id: ID!) {
        dictionaryPacket {
            # было: getDoctorType(id:"find: it.id == $id", failOnEmpty:true){
            getDoctorType(id: $id, failOnEmpty: true) {
                id
            }
            updateOrCreateDoctorType(
                input: { id: $id, name: "", isDel: false }
                exist: {
                    update: {
                        isDel: true
                    }
                }
            ) {
                returning {
                    ...DoctorTypeAttributes
                }
            }
        }
    }
`