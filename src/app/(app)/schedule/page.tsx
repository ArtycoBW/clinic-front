'use client'
import { DatePicker } from '@/components/datePicker'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Wrapper } from '@/components/wrapper'
import { useSearchClinic } from '@/entities/clinic/hooks/useSearchClinicю'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { z } from 'zod'

const clientSchema = z.object({
  clinicId: z.string(),
  clinicDoctorId: z.string(),
  beginDate: z.string(),
  endDate: z.string(),
  clinicOfficeId: z.string(),
  customerId: z.string(),
})

export default function ClientPage() {
  const addForm = useForm<z.infer<typeof clientSchema>>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      clinicId: '',
      clinicDoctorId: '',
      beginDate: '',
      endDate: '',
      clinicOfficeId: '',
      customerId: '',
    },
  })

  const { clinics } = useSearchClinic('')
  console.log(clinics, 'clinics')

  const handleAddSubmit = async (values: z.infer<typeof clientSchema>) => {
    // try {
    //   await createPerson({
    //     inn: values.inn,
    //     firstName: values.name,
    //     lastName: values.surname,
    //     birthDate: values.birthday,
    //   })

    //   toast({
    //     title: `Пользователь ${values.name} ${values.surname} успешно добавлен`,
    //   })

    //   invalidateCache()
    // } catch (error) {
    //   toast({
    //     title: createError?.message,
    //     variant: 'destructive',
    //   })
    // }
  }

  return (
    <div>
    <Header path="Главная" />
      <div className="bg-white gap-6 mt-20 mx-12 mb-6 p-4 rounded-xl">
        <Form {...addForm}>
          <form onSubmit={addForm.handleSubmit(handleAddSubmit)} className="flex flex-col gap-4">
            <FormField
              name="clinicId"
              control={addForm.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Клиника</FormLabel>
                  <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите клинику" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {clinics.map((el) => (
                      <SelectItem value={el.id}>{el.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="clinicDoctorId"
              control={addForm.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Доктор</FormLabel>
                  <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите доктора" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {/* {types.map((el) => (
                      <SelectItem value={el.id}>{el.name}</SelectItem>
                    ))} */}
                    <SelectItem value={'qwe'}>qwe</SelectItem>
                  </SelectContent>
                </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="beginDate"
              control={addForm.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Время начала визита</FormLabel>
                  <FormControl>
                  <Input type="datetime-local" {...field} disabled={false} placeholder="Введите время начала визита" className='border-2 text-lg h-12' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="endDate"
              control={addForm.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Время конца визита</FormLabel>
                  <FormControl>
                  <Input type='datetime-local' {...field} disabled={false} placeholder="Введите время конца визита" className='border-2 text-lg h-12' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="clinicOfficeId"
              control={addForm.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Кабинет</FormLabel>
                  <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите кабинет" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {/* {types.map((el) => (
                      <SelectItem value={el.id}>{el.name}</SelectItem>
                    ))} */}
                    <SelectItem value={'qwe'}>qwe</SelectItem>
                  </SelectContent>
                </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={false} size="lg" className="w-full bg-[#51dca4] text-white">
              Записаться
            </Button>
          </form>
        </Form>
    </div>
  </div>
  )
}
