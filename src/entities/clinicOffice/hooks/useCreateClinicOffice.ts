import { useMutation } from '@apollo/client'
import { CreateClinicOfficeResponse, CreateClinicOfficeVariables } from '@/entities/clinicOffice/types'
import { CREATE_CLINIC_OFFICE } from '@/entities/clinicOffice/gql/mutation'

export const useCreateClinicOffice = () => {
  const [createClinicOfficeMutation, {
    loading,
    error,
    data,
  }] = useMutation<CreateClinicOfficeResponse, CreateClinicOfficeVariables>(CREATE_CLINIC_OFFICE)

  // Функция для выполнения мутации
  const executeMutation = async (clinicId: string, officeNumber: string) => {
    try {
      const result = await createClinicOfficeMutation({
        variables: { clinicId, officeNumber },
      })
      return result.data?.packet.createClinicOffice // Возвращаем созданный офис
    } catch (err) {
      console.error('Ошибка при создании офиса клиники:', err)
      throw err // Передаем ошибку для обработки в компоненте
    }
  }

  return {
    executeMutation, // Функция для вызова мутации
    loading, // Статус загрузки
    error, // Статус ошибки
    data, // Данные ответа
  }
}