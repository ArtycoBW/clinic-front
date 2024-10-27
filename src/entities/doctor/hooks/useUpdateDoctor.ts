import { useMutation } from '@apollo/client'
import { UpdateDoctorResponse, UpdateDoctorVariables } from '@/entities/doctor/types'
import { UPDATE_DOCTOR } from '@/entities/doctor/gql/mutation'

export const useUpdateDoctor = () => {
  const [updateDoctor, {
    loading,
    error,
    data,
  }] = useMutation<UpdateDoctorResponse, UpdateDoctorVariables>(UPDATE_DOCTOR)

  // Функция для выполнения мутации
  const executeMutation = async (id: string, doctorTypeId: string, personId: string) => {
    try {
      return await updateDoctor({
        variables: { id, doctorTypeId, personId },
      }) // Вернуть результат мутации, если это необходимо
    } catch (err) {
      console.error('Ошибка при обновлении доктора:', err)
      throw err // Передать ошибку для обработки в компоненте
    }
  }

  return {
    executeMutation, // Это функция для вызова мутации
    loading, // Статус загрузки
    error, // Статус ошибки
    data, // Данные ответа
  }
}