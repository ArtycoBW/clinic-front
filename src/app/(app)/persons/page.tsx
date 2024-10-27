'use client'

import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useState } from 'react'
import { emptyRowField } from '@/applicationConstants'
import { Spinner } from '@/components/spinner'
import { useSearchPerson } from '@/entities/person/hooks/useSearchPerson'
import { useUpdatePerson } from '@/entities/person/hooks/useUpdatePerson'
import { useCreatePerson } from '@/entities/person/hooks/useCreatePerson'
import { toast } from '@/hooks/use-toast'
import { useDeletePerson } from '@/entities/person/hooks/useDeletePerson'

const clientSchema = z.object({
  name: z.string().min(1, 'Имя не должно быть пустым'),
  surname: z.string().min(1, 'Фамилия не должна быть пустой'),
  birthday: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Дата рождения должна быть в формате YYYY-MM-DD'),
  inn: z.string().length(10, 'ИНН должен состоять из 10 цифр'),
  id: z.string().optional(),
})

export default function ClientPage() {
  const [selectedClient, setSelectedClient] = useState<z.infer<typeof clientSchema>>()

  const { persons, loading, invalidateCache } = useSearchPerson('')
  const { executeMutation: createPerson, loading: createLoading, error: createError } = useCreatePerson()
  const { executeMutation: updatePerson, loading: updateLoading, error: updateError } = useUpdatePerson()
  const { executeMutation: deletePerson, loading: deleteLoading, error: deleteError } = useDeletePerson()

  console.log(persons)

  const addForm = useForm<z.infer<typeof clientSchema>>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      name: '',
      surname: '',
      birthday: '',
      inn: '',
    },
  })

  const editForm = useForm<z.infer<typeof clientSchema>>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      name: '',
      surname: '',
      birthday: '',
      inn: '',
    },
  })

  const handleAddSubmit = async (values: z.infer<typeof clientSchema>) => {
    try {
      await createPerson({
        inn: values.inn,
        firstName: values.name,
        lastName: values.surname,
        birthDate: values.birthday,
      })

      toast({
        title: `Пользователь ${values.name} ${values.surname} успешно добавлен`,
      })

      invalidateCache()
    } catch (error) {
      toast({
        title: createError?.message,
        variant: 'destructive',
      })
    }
  }

  const handleEditSubmit = async (values: z.infer<typeof clientSchema>) => {
    if (selectedClient?.id === undefined) return

    try {
      await updatePerson({
        birthDate: values.birthday,
        firstName: values.name,
        inn: values.inn,
        lastName: values.surname,
        id: selectedClient.id,
      })

      toast({
        title: `Пользователь ${values.name} ${values.surname} успешно обновлен`,
      })

      invalidateCache()
    } catch (error) {
      toast({
        title: updateError?.message,
        variant: 'destructive',
      })
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await deletePerson(id)

      toast({
        title: `Пользователь ${id} успешно удален`,
      })

      invalidateCache()
    } catch (error) {
      toast({
        title: deleteError?.message,
        variant: 'destructive',
      })
    }
  }

  const openEditDialog = (client: z.infer<typeof clientSchema>) => {
    setSelectedClient(client)
    editForm.reset(client)
  }

  return (
    <div className="w-full">
      <Header path="Главная" />
      <div className="bg-white gap-6 mt-20 mx-12 mb-6 p-4 rounded-xl">
        <div className="flex items-center gap-6">
          <h2 className="text-[#7f49f3] font-bold text-xl">Все пользователи</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-[#77deb5] rounded-3xl py-4 px-5 my-2">
                <span className="text-white">Добавить пользователя</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Добавление пользователя</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Form {...addForm}>
                  <form onSubmit={addForm.handleSubmit(handleAddSubmit)} className="flex flex-col gap-4">
                    <FormField
                      name="name"
                      control={addForm.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Имя</FormLabel>
                          <FormControl>
                            <Input {...field} disabled={false} placeholder="Введите имя пациента" type="text" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      name="surname"
                      control={addForm.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Фамилия</FormLabel>
                          <FormControl>
                            <Input {...field} disabled={false} placeholder="Введите фамилию пациента" type="text" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      name="birthday"
                      control={addForm.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Дата рождения</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              disabled={false}
                              placeholder="Введите дату рождения (YYYY-MM-DD)"
                              type="date"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      name="inn"
                      control={addForm.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ИНН</FormLabel>
                          <FormControl>
                            <Input {...field} disabled={false} placeholder="Введите ИНН" type="text" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button disabled={createLoading} size="lg" className="w-full bg-[#51dca4] text-white">
                      Добавить
                    </Button>
                  </form>
                </Form>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        {!persons || (loading && <Spinner />)}
        {persons && (
          <Table className="max-h-[100px]">
            <TableHeader>
              <TableRow>
                <TableHead>Имя</TableHead>
                <TableHead>Фамилия</TableHead>
                <TableHead>Дата рождения</TableHead>
                <TableHead>Инн</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {persons.map((person) => (
                <TableRow key={person.id}>
                  <TableCell>{person.firstName}</TableCell>
                  <TableCell>{person.lastName}</TableCell>
                  <TableCell>{person.birthDate ?? emptyRowField}</TableCell>
                  <TableCell>{person.inn ?? emptyRowField}</TableCell>
                  <TableCell>
                    <Button
                      disabled={deleteLoading}
                      onClick={() => {
                        return handleDelete(person.id)
                      }}
                      className="bg-[#f2f5ff] rounded-3xl py-4 px-5 my-2"
                      variant="secondary">
                      <span className="text-[#6A6E83]">Удалить</span>
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-[#f2f5ff] rounded-3xl py-4 px-5 my-2 border-[#0065FF]" variant="outline">
                          <span
                            className="text-[#0065FF]"
                            onClick={() =>
                              openEditDialog({
                                id: person.id,
                                surname: person.lastName,
                                name: person.firstName,
                                birthday: person.birthDate,
                                inn: person.inn,
                              })
                            }>
                            Изменить
                          </span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Редактирование пользователя</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <Form {...editForm}>
                            <form onSubmit={editForm.handleSubmit(handleEditSubmit)} className="flex flex-col gap-4">
                              <FormField
                                name="name"
                                control={editForm.control}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Имя</FormLabel>
                                    <FormControl>
                                      <Input
                                        {...field}
                                        disabled={false}
                                        placeholder="Введите имя пациента"
                                        type="text"
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              <FormField
                                name="surname"
                                control={editForm.control}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Фамилия</FormLabel>
                                    <FormControl>
                                      <Input
                                        {...field}
                                        disabled={false}
                                        placeholder="Введите фамилию пациента"
                                        type="text"
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              <FormField
                                name="birthday"
                                control={editForm.control}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Дата рождения</FormLabel>
                                    <FormControl>
                                      <Input
                                        {...field}
                                        disabled={false}
                                        placeholder="Введите дату рождения (YYYY-MM-DD)"
                                        type="date"
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              <FormField
                                name="inn"
                                control={editForm.control}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>ИНН</FormLabel>
                                    <FormControl>
                                      <Input {...field} disabled={false} placeholder="Введите ИНН" type="text" />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              <Button disabled={updateLoading} size="lg" className="w-full bg-[#51dca4] text-white">
                                Изменить
                              </Button>
                            </form>
                          </Form>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  )
}
