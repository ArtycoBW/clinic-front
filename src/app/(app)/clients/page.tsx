'use client'

import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { clients } from './consts'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const clientSchema = z.object({
  id: z.array(z.string()),
  name: z.string().min(1, 'Имя не должно быть пустым'),
  surname: z.string().min(1, 'Фамилия не должна быть пустой'),
  number: z.string().min(10, 'Номер телефона должен содержать минимум 10 символов'),
  insurancePolicy: z.string().min(1, 'Номер страхового полиса не должен быть пустым'),
})

export default function ClientPage() {
  const [_, setSelectedClient] = useState<z.infer<typeof clientSchema>>({
    id: ['1', '2'],
    name: 'Artyco',
    surname: 'B',
    number: '89812381238123',
    insurancePolicy: '123123',
  })

  const addForm = useForm<z.infer<typeof clientSchema>>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      id: [],
      number: '',
      insurancePolicy: '',
    },
  })

  const editForm = useForm<z.infer<typeof clientSchema>>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      id: [],
      number: '',
    },
  })

  const handleAddSubmit = (values: z.infer<typeof clientSchema>) => {
    console.log('Добавление клиента:', values)
  }

  const handleEditSubmit = (values: z.infer<typeof clientSchema>) => {
    console.log('Редактирование клиента:', values)
  }

  const openEditDialog = (client: z.infer<typeof clientSchema>) => {
    setSelectedClient(client)
    editForm.reset(client)
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
                          <FormControl>
                            <Select>
                            <SelectTrigger>
                            <SelectValue placeholder="Theme" />
                          </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">Light</SelectItem>
                              <SelectItem value="dark">Dark</SelectItem>
                              <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                            </Select>
                          </FormControl>
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

                    <Button disabled={false} size="lg" className="w-full bg-[#51dca4] text-white">
                      Добавить
                    </Button>
                  </form>
                </Form>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="max-h-[70vh] overflow-y-auto w-full">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Номер телефона</TableHead>
              <TableHead>Страховой полис</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.name}>
                <TableCell>{client.id}</TableCell>
                <TableCell>{client.number}</TableCell>
                <TableCell>{client.insurancePolicy}</TableCell>
                <TableCell>
                  <Button className="bg-[#f2f5ff] rounded-3xl py-4 px-5 my-2" variant="secondary">
                    <span className="text-[#6A6E83]">Удалить</span>
                  </Button>
                </TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-[#f2f5ff] rounded-3xl py-4 px-5 my-2 border-[#0065FF]" variant="outline">
                        <span className="text-[#0065FF]" onClick={() => openEditDialog(client)}>
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
                          <form onSubmit={editForm.handleSubmit(handleEditSubmit)} className="flex flex-col gap-4">
                            <FormField
                              name="id"
                              control={editForm.control}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>ID</FormLabel>
                                  <FormControl>
                                  <Select>
                                  <SelectTrigger>
                                  <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                  </SelectContent>
                                  </Select>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

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


                            <Button disabled={false} size="lg" className="w-full bg-[#51dca4] text-white">
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
      </div>
    </div>
  )
}