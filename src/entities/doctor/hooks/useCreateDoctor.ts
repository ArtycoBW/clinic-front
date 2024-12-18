import { useMutation } from '@apollo/client'
import { CreateDoctorResponse, CreateDoctorVariables } from '@/entities/doctor/types'
import { CREATE_DOCTOR } from '@/entities/doctor/gql/mutation'

export const useCreateDoctor = () => {
  const [createDoctor, {
    loading,
    error,
    data,
  }] = useMutation<CreateDoctorResponse, CreateDoctorVariables>(CREATE_DOCTOR)

  // Функция для выполнения мутации
  const executeMutation = async (doctorTypeId: string, personId: string) => {
    try {
      return await createDoctor({
        // personId - id из сущности person
        variables: { doctorTypeId, personId },
      }) // Вернуть результат мутации, если это необходимо
    } catch (err) {
      console.error('Ошибка при создании доктора:', err)
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