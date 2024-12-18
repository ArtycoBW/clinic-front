import { useMutation } from '@apollo/client'
import { CreateCustomerResponse, CreateCustomerVariables } from '@/entities/customer/types'
import { CREATE_CUSTOMER } from '@/entities/customer/gql/mutation'

export const useCreateCustomer = () => {
  const [createCustomer, { loading, error, data }] = useMutation<CreateCustomerResponse, CreateCustomerVariables>(
    CREATE_CUSTOMER,
  )

  // Функция для выполнения мутации
  const executeMutation = async (personId: string, insurancePolicyNumber: string, phoneNumber?: string) => {
    try {
      return await createCustomer({
        variables: { personId, insurancePolicyNumber, phoneNumber },
      }) // Вернуть результат мутации, если это необходимо
    } catch (err) {
      console.error('Ошибка при выполнении мутации:', err)
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