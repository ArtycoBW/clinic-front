'use client'

import { Header } from '@/components/header'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Table, TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { clients } from './consts'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useState } from 'react'


const clientSchema = z.object({
  name: z.string().min(1,"Имя не должно быть пустым"),
  surname: z.string().min(1,"Фамилия не должна быть пустой"),
  birthday: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Дата рождения должна быть в формате YYYY-MM-DD"),
  inn: z.string().length(10, "ИНН должен состоять из 10 цифр"),
  number: z.string().min(10, "Номер телефона должен содержать минимум 10 символов"),
  insurancePolicy: z.string().min(1,"Номер страхового полиса не должен быть пустым")
});


export default function ClientPage() {
  const [selectedClient, setSelectedClient] = useState<z.infer<typeof clientSchema>>({
    name: 'Artyco',
    surname: 'B',
    birthday: '2003-02-26',
    inn: '1234567890',
    number: '89812381238123',
    insurancePolicy: '123123'
  },);

  const addForm = useForm<z.infer<typeof clientSchema>>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      name: '',
      surname: '',
      birthday: '',
      inn: '',
      number: '',
      insurancePolicy: ''
    },
  });

  const editForm = useForm<z.infer<typeof clientSchema>>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      name: '',
      surname: '',
      birthday: '',
      inn: '',
      number: '',
      insurancePolicy: ''
    },
  });

  const handleAddSubmit = (values: z.infer<typeof clientSchema>) => {
    console.log("Добавление клиента:", values);
  }

  const handleEditSubmit = (values: z.infer<typeof clientSchema>) => {
    console.log("Редактирование клиента:", values);
  }

  const openEditDialog = (client: z.infer<typeof clientSchema>) => {
    setSelectedClient(client);
    editForm.reset(client);
  }

  return (
    <div className="w-full">
      <Header path="Главная" />
      <div className="bg-white gap-6 mt-20 mx-12 mb-6 p-4 rounded-xl">
        <div className='flex items-center gap-6'>
          <h2 className='text-[#7f49f3] font-bold text-xl'>Все клиенты </h2>
          <Dialog>
            <DialogTrigger asChild>
            <Button className='bg-[#77deb5] rounded-3xl py-4 px-5 my-2'><span className='text-white'>Добавить клиента</span>
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
                        <Input {...field} disabled={false} placeholder="Введите дату рождения (YYYY-MM-DD)" type="text" />
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

                <FormField
                  name="insurancePolicy"
                  control={addForm.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Страховой полис</FormLabel>
                      <FormControl>
                        <Input {...field} disabled={false} placeholder="Введите номер страхового полиса" type="text" />
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
      <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Имя</TableHead>
          <TableHead>Фамилия</TableHead>
          <TableHead>Дата рождения</TableHead>
          <TableHead>Инн</TableHead>
          <TableHead>Номер телефона</TableHead>
          <TableHead>Страховой полис</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {clients.map((client) => (
          <TableRow key={client.name}>
            <TableCell>{client.name}</TableCell>
            <TableCell>{client.surname}</TableCell>
            <TableCell>{client.birthday}</TableCell>
            <TableCell>{client.inn}</TableCell>
            <TableCell>{client.number}</TableCell>
            <TableCell>{client.insurancePolicy}</TableCell>
            <TableCell><Button className='bg-[#f2f5ff] rounded-3xl py-4 px-5 my-2' variant="secondary"><span className='text-[#6A6E83]'>Удалить</span></Button></TableCell>
            <TableCell>
            <Dialog>
            <DialogTrigger asChild>
            <Button className='bg-[#f2f5ff] rounded-3xl py-4 px-5 my-2 border-[#0065FF]' variant='outline'><span className='text-[#0065FF]' onClick={() => openEditDialog(client)}>Изменить</span></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Редактирование клиента</DialogTitle>
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
                        <Input {...field} disabled={false} placeholder="Введите имя пациента" type="text" />
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
                        <Input {...field} disabled={false} placeholder="Введите фамилию пациента" type="text" />
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
                        <Input {...field} disabled={false} placeholder="Введите дату рождения (YYYY-MM-DD)" type="text" />
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

                <FormField
                  name="number"
                  control={editForm.control}
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

                <FormField
                  name="insurancePolicy"
                  control={editForm.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Страховой полис</FormLabel>
                      <FormControl>
                        <Input {...field} disabled={false} placeholder="Введите номер страхового полиса" type="text" />
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
        </Dialog></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
      </div>
    </div>
  )
}
