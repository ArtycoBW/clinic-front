import { useMutation } from '@apollo/client'
import { UPDATE_OR_CREATE_DOCTOR_TYPE } from '@/entities/doctorType/gql/mutations'
import { UpdateOrCreateDoctorTypeResponse, UpdateOrCreateDoctorTypeVariables } from '@/entities/doctorType/types'


export const useUpdateOrCreateDocType = () => {
  const [mut, {
    loading,
    error,
    data,
  }] = useMutation<UpdateOrCreateDoctorTypeResponse, UpdateOrCreateDoctorTypeVariables>(UPDATE_OR_CREATE_DOCTOR_TYPE)

  const executeMutation = async (id: string, name: string, description?: string) => {
    try {
      return await mut({
        variables: { id, name, description },
      })
    } catch (err) {
      console.error('Ошибка при выполнении мутации:', err)
      throw err
    }
  }

  return {
    executeMutation,
    loading,
    error,
    data,
  }
}