import { useMutation } from '@apollo/client'
import { CreatePersonResponse, CreatePersonVariables } from '@/entities/person/types'
import { CREATE_PERSON } from '@/entities/person/gql/mutations'
import dayjs from 'dayjs'

export const useCreatePerson = () => {
  const [createPerson, { loading, error, data }] = useMutation<CreatePersonResponse, CreatePersonVariables>(
    CREATE_PERSON,
  )

  // Функция для выполнения мутации
  const executeMutation = async (input: CreatePersonVariables['input']) => {
    const formattedInput = {
      ...input,
      birthDate: dayjs(input.birthDate).format('YYYY-MM-DD'), // Преобразуем в строку ISO
    }

    try {
      const result = await createPerson({ variables: { input: formattedInput } })
      return result.data?.packet.createPerson // Вернуть созданную персону
    } catch (err) {
      console.error('Ошибка при создании персоны:', err)
      throw err // Передать ошибку для обработки в компоненте
    }
  }

  return {
    executeMutation, // Функция для вызова мутации
    loading,         // Статус загрузки
    error,           // Статус ошибки
    data,            // Данные ответа
  }
}