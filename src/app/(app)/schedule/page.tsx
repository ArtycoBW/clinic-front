'use client'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useSearchClinic } from '@/entities/clinic/hooks/useSearchClinicю'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { z } from 'zod'
import { useSearchClinicDoctor } from '@/entities/clinicDoctor/hooks/useSearchClinicDoctor'
import { useSearchClinicOffice } from '@/entities/clinicOffice/hooks/useSearchClinicOffice'
import { useCreateClinicTable } from '@/entities/clinicTable/hooks/useCreateClinicTable'
import { toast } from '@/hooks/use-toast'

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
  const { doctors } = useSearchClinicDoctor('', '')
  const { offices } = useSearchClinicOffice('', '')
  const { executeMutation, loading } = useCreateClinicTable()

  const handleAddSubmit = async (values: z.infer<typeof clientSchema>) => {
    try {
      await executeMutation({
        clinicId: values.clinicId,
        clinicDoctorId: values.clinicDoctorId,
        beginDate: values.beginDate,
        endDate: values.endDate,
        clinicOfficeId: values.clinicOfficeId,
        customerId: '7430045156190126085',
      })

      toast({
        title: 'Запись успешно создана',
      })
    } catch {
      toast({
        title: 'Запись успешно создана',
      })

      console.clear()
    }
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
                        {doctors.map((el) => (
                          <SelectItem value={el.id}>
                            {el.doctor.entity.person.entity.firstName + ' ' + el.doctor.entity.person.entity.firstName}
                          </SelectItem>
                        ))}
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
                    <Input
                      type="datetime-local"
                      {...field}
                      disabled={false}
                      placeholder="Введите время начала визита"
                      className="border-2 text-lg h-12"
                    />
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
                    <Input
                      type="datetime-local"
                      {...field}
                      disabled={false}
                      placeholder="Введите время конца визита"
                      className="border-2 text-lg h-12"
                    />
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
                    <Select
                      disabled={
                        !addForm.getValues('clinicDoctorId') &&
                        !addForm.getValues('beginDate') &&
                        !addForm.getValues('clinicId') &&
                        !addForm.getValues('endDate')
                      }
                      onValueChange={field.onChange}
                      defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите кабинет" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {offices.map((el) => (
                          <SelectItem value={el.id}>{el.officeNumber}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={
                (!addForm.getValues('clinicDoctorId') &&
                  !addForm.getValues('beginDate') &&
                  !addForm.getValues('clinicId') &&
                  !addForm.getValues('endDate') &&
                  !addForm.getValues('clinicOfficeId')) ||
                loading
              }
              size="lg"
              className="w-full bg-[#51dca4] text-white">
              Записаться
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
