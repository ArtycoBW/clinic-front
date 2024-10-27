import { useQuery } from '@apollo/client'
import { SearchPersonResponse, SearchPersonVariables } from '@/entities/person/types'
import { SEARCH_PERSON } from '@/entities/person/gql/queries'
import { useCallback, useEffect } from 'react'

export const useSearchPerson = (searchStr: string) => {
  const { data, loading, error, refetch } = useQuery<SearchPersonResponse, SearchPersonVariables>(SEARCH_PERSON, {
    variables: { searchStr },
    // skip: !searchStr, // Пропустить запрос, если searchStr пустая строка
  })

  useEffect(() => {
    console.log('Loading status:', loading)
    console.log('Error if any:', error)
    console.log('Full data received from GraphQL:', JSON.stringify(data, null, 2))
    console.log('Persons:', data?.searchPerson.elems)
    console.log('searchStr:', searchStr)
  }, [data, loading, error, searchStr])

  const invalidateCache = useCallback(() => {
    refetch()
  }, [refetch])

  return {
    persons: data?.searchPerson.elems || [],
    loading,
    error,
    invalidateCache,
  }
}