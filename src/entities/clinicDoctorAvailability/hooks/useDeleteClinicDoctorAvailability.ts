import { DeleteClinicDoctorAvailabilityInput } from '@/entities/clinicDoctorAvailability/types'
import { useMutation } from '@apollo/client'
import { DELETE_CLINIC_DOCTOR_AVAILABILITY } from '@/entities/clinicDoctorAvailability/gql/mutation'

export const useDeleteClinicDoctorAvailability = () => {
  const [executeMutation, {
    loading,
    error,
  }] = useMutation<void, DeleteClinicDoctorAvailabilityInput>(DELETE_CLINIC_DOCTOR_AVAILABILITY)

  const deleteAvailability = async (input: DeleteClinicDoctorAvailabilityInput) => {
    try {
      await executeMutation({ variables: input })
      return true // Indicate successful deletion
    } catch (err) {
      console.error('Error deleting clinic doctor availability:', err)
      throw err // Rethrow to handle it outside if needed
    }
  }

  return {
    executeMutation: deleteAvailability,
    loading,
    error,
  }
}