import { SearchClinicTableResponse } from '@/entities/clinicTable/types'
import { useQuery } from '@apollo/client'
import { SEARCH_CLINIC_TABLE } from '@/entities/clinicTable/gql/queries'

export interface SearchClinicTableVariables {
  clinicId: string;
  dateFrom: string; // Adjust to the correct type
  dateTo: string; // Adjust to the correct type
}

export const useSearchClinicTable = (clinicId: string, dateFrom: string, dateTo: string) => {
  const {
    data,
    loading,
    error,
    refetch,
  } = useQuery<SearchClinicTableResponse, SearchClinicTableVariables>(SEARCH_CLINIC_TABLE, {
    variables: { clinicId, dateFrom, dateTo },
    // skip: !clinicId || !dateFrom || !dateTo, // Skip if any variable is not provided
  })

  // Функция для рефетча данных
  const invalidateCache = () => {
    refetch()
  }
  return {
    clinicTables: data?.searchClinicTable.elems || [],
    loading,
    error,
    invalidateCache,
  }
}