import { useCallback } from 'react'
import { useMutation } from '@apollo/client'
import { CreateClinicResponse, CreateClinicVariables } from '@/entities/clinic/types'
import { CREATE_CLINIC } from '@/entities/clinic/gql/mutation'

export const useCreateClinic = () => {
  const [createClinic, {
    data,
    loading,
    error,
  }] = useMutation<CreateClinicResponse, CreateClinicVariables>(CREATE_CLINIC)

  // Функция для выполнения мутации
  const executeMutation = useCallback(
    async (name: string) => {
      try {
        const result = await createClinic({ variables: { name } })
        console.log('Клиника создана:', result.data?.packet.createClinic)
        return result.data?.packet.createClinic
      } catch (err) {
        console.error('Ошибка при создании клиники:', err)
        throw err
      }
    },
    [createClinic],
  )

  return {
    executeMutation, // Функция для вызова мутации
    data,
    loading,
    error,
  }
}