'use client'
import { Header } from '@/components/header'
import { Calendar } from '@/components/ui/calendar'
import { Wrapper } from '@/components/wrapper'
import { useState } from 'react'

export default function ClientPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="w-full max-h-[90vh] overflow-hidden">
      <Header path="Главная" />
      <div className='minh-[90vh] w-full'>
          <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow minh-[90vh] w-full"
          />
      </div>
    </div>
  )
}
