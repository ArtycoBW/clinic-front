import { gql, useQuery } from "@apollo/client";
import { useCallback } from "react";
import searchDoctorType from "../gql/queries.graphql";
import { SearchDoctorTypeResponse } from "../types";

// Кастомный хук для поиска врачей
export const useSearchDoctorType = (searchStr: string) => {
  const { data, loading, error, refetch } = useQuery<SearchDoctorTypeResponse>(gql`${searchDoctorType}`, {
    variables: { searchStr },
    skip: !searchStr, // Пропуск запроса, если searchStr пустой
  });

  // Функция для инвалидации кэша
  const invalidateCache = useCallback(() => {
    refetch();
  }, [refetch]);

  return {
    doctors: data?.searchDoctorType?.elems || [],
    loading,
    error,
    invalidateCache,
  };
};
