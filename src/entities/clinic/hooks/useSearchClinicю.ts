import { useCallback, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { SearchClinicResponse, SearchClinicVariables } from '@/entities/clinic/types'
import { SEARCH_CLINIC } from '@/entities/clinic/gql/queries'

export const useSearchClinic = (searchStr: string) => {
  const { data, loading, error, refetch } = useQuery<SearchClinicResponse, SearchClinicVariables>(SEARCH_CLINIC, {
    variables: { searchStr },
    // skip: !searchStr, // Пропустить запрос, если searchStr пустая строка
  })

  // Функция для ручного обновления данных
  const invalidateCache = useCallback(() => {
    refetch()
  }, [refetch])

  // Используем useEffect для логирования данных и ошибок
  useEffect(() => {
    if (data) {
      console.log('Получены данные клиник:', data.searchClinic.elems)
    }
    if (error) {
      console.error('Ошибка при запросе клиник:', error.message)
    }
  }, [data, error])

  return {
    clinics: data?.searchClinic.elems || [],
    loading,
    error,
    invalidateCache,
  }
}