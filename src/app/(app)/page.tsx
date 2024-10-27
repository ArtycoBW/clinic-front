'use client'
import { ChangeEvent, useState } from 'react'
import { useCreateCustomer } from '@/entities/customer/hooks/useCreateCustomer'
import { useSearchClinic } from '@/entities/clinic/hooks/useSearchClinicю'

export default function Home() {
  const [searchStr, setSearchStr] = useState('')
  const { clinics: persons, loading, error } = useSearchClinic(searchStr)
  const {
    executeMutation: mutate,
    error: mutErr,
  } = useCreateCustomer()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchStr(event.target.value)
  }

  const handleSubmit = async () => {
    try {
      await mutate('7429848543427952641', '7429848543427952641')
      alert('Мутация прошла')
    } catch {
      alert('Ошибка при мутации')
    }
  }

  return (
    <div>
      <h1>Поиск врача</h1>
      <input
        type="text"
        placeholder="Введите имя врача"
        value={searchStr}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Submit</button>

      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка: {error.message}</p>}
      {mutErr && <p>Ошибка 2: {mutErr.message}</p>}

      <ul>
        {persons.map((item) => (
          <li key={item.id}>
            <h2>{item.id}</h2>
          </li>
        ))}
      </ul>
    </div>
  )
}
