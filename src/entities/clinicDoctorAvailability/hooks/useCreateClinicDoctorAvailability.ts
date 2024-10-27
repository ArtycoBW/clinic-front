import {
  CreateClinicDoctorAvailabilityInput,
  CreateClinicDoctorAvailabilityResponse,
} from '@/entities/clinicDoctorAvailability/types'
import { useMutation } from '@apollo/client'
import { CREATE_CLINIC_DOCTOR_AVAILABILITY } from '@/entities/clinicDoctorAvailability/gql/mutation'

export const useCreateClinicDoctorAvailability = () => {
  const [executeMutation, {
    loading,
    error,
  }] = useMutation<CreateClinicDoctorAvailabilityResponse, CreateClinicDoctorAvailabilityInput>(CREATE_CLINIC_DOCTOR_AVAILABILITY)

  const createAvailability = async (input: CreateClinicDoctorAvailabilityInput) => {
    try {
      const { data } = await executeMutation({ variables: input })
      return data?.createClinicDoctorAvailability // Return created availability
    } catch (err) {
      console.error('Error creating clinic doctor availability:', err)
      throw err // Rethrow to handle it outside if needed
    }
  }

  return {
    executeMutation: createAvailability,
    loading,
    error,
  }
}