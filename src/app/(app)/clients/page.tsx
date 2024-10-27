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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useSearchCustomer } from '@/entities/customer/hooks/useSearchCustomer'
import { emptyRowField } from '@/applicationConstants'
import { Spinner } from '@/components/spinner'
import { toast } from '@/hooks/use-toast'
import { useCreateCustomer } from '@/entities/customer/hooks/useCreateCustomer'
import { useSearchPerson } from '@/entities/person/hooks/useSearchPerson'
import { useUpdateCustomer } from '@/entities/customer/hooks/useUpdateCustomer'
import { useDeleteCustomer } from '@/entities/customer/hooks/useDeleteCustomer'

const clientSchema = z.object({
  id: z.string().optional(),
  number: z.string().min(10, 'Номер телефона должен содержать минимум 10 символов'),
  insurancePolicy: z.string().min(1, 'Номер страхового полиса не должен быть пустым').optional(),
})

export default function ClientPage() {
  const { persons, loading: personsLoading, error: personsError } = useSearchPerson('')

  const { customers, loading: customersLoading, error: customersError, invalidateCache } = useSearchCustomer('')
  const {
    executeMutation: createCustomer,
    loading: createCustomerLoading,
    error: createCustomerError,
  } = useCreateCustomer()
  const {
    executeMutation: updateCustomer,
    loading: updateCustomerLoading,
    error: updateCustomerError,
  } = useUpdateCustomer()
  const {
    executeMutation: deleteCustomer,
    error: deleteCustomerError,
    loading: deleteCustomerLoading,
  } = useDeleteCustomer()

  const addForm = useForm<z.infer<typeof clientSchema>>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      id: '',
      number: '',
      insurancePolicy: '',
    },
  })

  const editForm = useForm<z.infer<typeof clientSchema>>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      id: '',
      number: '',
    },
  })

  const handleAddSubmit = async (values: z.infer<typeof clientSchema>) => {
    if (values.id === undefined || values.insurancePolicy === undefined) return

    try {
      const { data } = await createCustomer(values.id, values.insurancePolicy, values.number)

      toast({
        title: `Клиент ${data?.packet.createCustomer.person.entity.firstName} ${data?.packet.createCustomer.person.entity.lastName} добавлен`,
      })

      invalidateCache()
    } catch {
      toast({
        title: createCustomerError?.message,
        variant: 'destructive',
      })
    }
  }

  const handleEditSubmit = async (values: z.infer<typeof clientSchema>, id: string) => {
    try {
      const { data } = await updateCustomer(id, values.number)

      toast({
        title: `Клиент ${data?.packet.updateCustomer.person.entity.firstName} ${data?.packet.updateCustomer.person.entity.lastName} обновлен успешно`,
      })

      invalidateCache()
    } catch {
      toast({
        title: updateCustomerError?.message,
        variant: 'destructive',
      })
    }
  }

  const handleDeleteCustomer = async (id: string) => {
    try {
      await deleteCustomer(id)

      toast({
        title: `Клиент удален успешно`,
      })

      invalidateCache()
    } catch {
      toast({
        title: deleteCustomerError?.message,
        variant: 'destructive',
      })
    }
  }

  const openEditDialog = (client: z.infer<typeof clientSchema>) => {
    editForm.reset(client)
  }

  if (customersError) {
    toast({
      variant: 'destructive',
      title: 'Произошла ошибка',
    })
  }

  return (
    <div className="w-full h-full overflow-hidden">
      <Header path="Главная" />
      <div className="bg-white gap-6 mt-20 mx-12 mb-6 p-4 rounded-xl">
        <div className="flex items-center gap-6 max-h-[85vh] overflow-y-auto">
          <h2 className="text-[#7f49f3] font-bold text-xl">Все клиенты </h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-[#77deb5] rounded-3xl py-4 px-5 my-2">
                <span className="text-white">Добавить клиента</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Добавление клиента</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Form {...addForm}>
                  <form onSubmit={addForm.handleSubmit(handleAddSubmit)} className="flex flex-col gap-4">
                    <FormField
                      name="id"
                      control={addForm.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ID</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Выберите" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {persons.map((el) => (
                                <SelectItem value={el.id}>{el.firstName + ' ' + el.lastName}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      name="insurancePolicy"
                      control={addForm.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cтраховой полис</FormLabel>
                          <FormControl>
                            <Input {...field} disabled={false} placeholder="Введите страховой полис" type="text" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      name="number"
                      control={addForm.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Номер телефона</FormLabel>
                          <FormControl>
                            <Input {...field} disabled={false} placeholder="Введите номер телефона" type="text" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={personsLoading || !!personsError || createCustomerLoading}
                      size="lg"
                      className="w-full bg-[#51dca4] text-white">
                      Добавить
                    </Button>
                  </form>
                </Form>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        {!customers || (customersLoading && <Spinner />)}
        {!!customers?.length && (
          <div className="max-h-[70vh] overflow-y-auto w-full">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Имя</TableHead>
                  <TableHead>Фамилия</TableHead>
                  <TableHead>Номер телефона</TableHead>
                  <TableHead>Страховой полис</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customers.map((client) => (
                  <TableRow key={client.id}>
                    <TableCell>{client.person.entity.firstName}</TableCell>
                    <TableCell>{client.person.entity.lastName}</TableCell>
                    <TableCell>{client.phoneNumber ?? emptyRowField}</TableCell>
                    <TableCell>{client.insurancePolicyNumber ?? emptyRowField}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => {
                          return handleDeleteCustomer(client.id)
                        }}
                        className="bg-[#f2f5ff] rounded-3xl py-4 px-5 my-2"
                        variant="secondary"
                        disabled={deleteCustomerLoading}>
                        <span className="text-[#6A6E83]">Удалить</span>
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className="bg-[#f2f5ff] rounded-3xl py-4 px-5 my-2 border-[#0065FF]"
                            variant="outline">
                            <span
                              className="text-[#0065FF]"
                              onClick={() => openEditDialog({ id: client.id, number: client.phoneNumber })}>
                              Изменить
                            </span>
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Редактирование клиента</DialogTitle>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <Form {...editForm}>
                              <form
                                onSubmit={editForm.handleSubmit((val) => {
                                  return handleEditSubmit(val, client.id)
                                })}
                                className="flex flex-col gap-4">
                                <FormField
                                  name="number"
                                  control={editForm.control}
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Номер телефона</FormLabel>
                                      <FormControl>
                                        <Input
                                          {...field}
                                          disabled={false}
                                          placeholder="Введите номер телефона"
                                          type="text"
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />

                                <Button
                                  disabled={updateCustomerLoading}
                                  size="lg"
                                  className="w-full bg-[#51dca4] text-white">
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
          </div>
        )}
      </div>
    </div>
  )
}
