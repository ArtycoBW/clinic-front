import { useQuery } from '@apollo/client'
import { SearchCustomerResponse, SearchCustomerVariables } from '@/entities/customer/types'
import { SEARCH_CUSTOMER } from '@/entities/customer/gql/queries'

export const useSearchCustomer = (searchStr: string) => {
  const { data, loading, error, refetch } = useQuery<SearchCustomerResponse, SearchCustomerVariables>(SEARCH_CUSTOMER, {
    variables: { searchStr },
    // skip: !searchStr, // Пропустить запрос, если searchStr пустая строка
  })
  // Функция для рефетча данных
  const invalidateCache = () => {
    refetch()
  }


  return {
    customers: data?.searchCustomer.elems || [], // Возвращаем клиентов из ответа
    loading, // Статус загрузки
    error, // Статус ошибки
    invalidateCache, // Функция для повторного запроса
  }
}