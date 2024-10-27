import { useQuery } from '@apollo/client'
// import { useCallback } from 'react'

import { SearchDoctorTypeResponse } from '../types'
import { SEARCH_DOCTOR_TYPE } from '../gql/queries'
import { useCallback, useEffect } from 'react'

export const useSearchDoctorType = (searchStr: string) => {
  const { data, loading, error, refetch } = useQuery<SearchDoctorTypeResponse>(SEARCH_DOCTOR_TYPE, {
    variables: { searchStr: 'THERAPIST' },
    skip: !searchStr, // Пропустить запрос, если searchStr пустая строка
  })

  useEffect(() => {
    console.log('Loading status:', loading)
    console.log('Error if any:', error)
    console.log('Full data received from GraphQL:', JSON.stringify(data, null, 2))
    console.log('Запрос выполнен, данные:', data)
    console.log('searchStr:', searchStr)
  }, [data, error, loading, searchStr])
  // Логи для отладки

  const invalidateCache = useCallback(() => {
    refetch()
  }, [refetch])

  return {
    doctors: data?.searchDoctorType?.elems || [],
    loading,
    error,
    invalidateCache,
  }
}
