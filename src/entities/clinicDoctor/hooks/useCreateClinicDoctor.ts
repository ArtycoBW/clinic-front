import { useMutation } from '@apollo/client'
import { CreateClinicDoctorResponse, CreateClinicDoctorVariables } from '@/entities/clinicDoctor/types'
import { CREATE_CLINIC_DOCTOR } from '@/entities/clinicDoctor/gql/mutation'

export const useCreateClinicDoctor = () => {
  const [executeMutation, {
    data,
    loading,
    error,
  }] = useMutation<CreateClinicDoctorResponse, CreateClinicDoctorVariables>(CREATE_CLINIC_DOCTOR)

  const createClinicDoctor = async (clinicId: string, doctorId: string) => {
    try {
      const response = await executeMutation({ variables: { clinicId, doctorId } })
      return response.data?.packet.createClinicDoctor
    } catch (err) {
      console.error('Error creating clinic doctor:', err)
      throw err
    }
  }

  return {
    createClinicDoctor,
    data,
    loading,
    error,
  }
}