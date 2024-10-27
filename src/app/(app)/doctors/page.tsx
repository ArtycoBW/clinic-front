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
import { doctors, specializations } from './consts'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const doctorSchema = z.object({
  name: z.string().min(1, "Имя не должно быть пустым"),
  surname: z.string().min(1, "Фамилия не должна быть пустой"),
  birthday: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Дата рождения должна быть в формате YYYY-MM-DD"),
  inn: z.string().length(10, "ИНН должен состоять из 10 цифр"),
  specialization: z.string().min(10, "Специальность должна содержать минимум 10 символов"),
});

const specializationSchema = z.object({
  title: z.string().min(1, "Специальность не должна быть пустой"),
  description: z.string().min(1, "Специальность не должна быть пустой")
});

export default function DoctorsPage() {
  const [selectedDoctor, setSelectedDoctor] = useState<z.infer<typeof doctorSchema>>({
    name: 'Artyco',
    surname: 'B',
    birthday: '2003-02-26',
    inn: '1234567890',
    specialization: '123123'
  });

  const [selectedSpecialization, setSelectedSpecialization] = useState<z.infer<typeof specializationSchema>>({
    title: 'Artyco',
    description: 'B',
  });

  const addForm = useForm<z.infer<typeof doctorSchema>>({
    resolver: zodResolver(doctorSchema),
    defaultValues: {
      name: '',
      surname: '',
      birthday: '',
      inn: '',
      specialization: ''
    },
  });

  const editForm = useForm<z.infer<typeof doctorSchema>>({
    resolver: zodResolver(doctorSchema),
    defaultValues: {
      name: '',
      surname: '',
      birthday: '',
      inn: '',
      specialization: ''
    },
  });

  const addSpecializationForm = useForm<z.infer<typeof specializationSchema>>({
    resolver: zodResolver(specializationSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const editSpecializationForm = useForm<z.infer<typeof specializationSchema>>({
    resolver: zodResolver(specializationSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const handleAddSubmit = (values: z.infer<typeof doctorSchema>) => {
    console.log("Добавление доктора:", values);
  }

  const handleEditSubmit = (values: z.infer<typeof doctorSchema>) => {
    console.log("Редактирование доктора:", values);
  }

  const handleSpecializationAddSubmit = (values: z.infer<typeof specializationSchema>) => {
    console.log("Добавление доктора:", values);
  }

  const handleSpecializationEditSubmit = (values: z.infer<typeof specializationSchema>) => {
    console.log("Редактирование доктора:", values);
  }

  const openEditDialog = (doctor: z.infer<typeof doctorSchema>) => {
    setSelectedDoctor(doctor);
    editForm.reset(doctor);
  }

  const openSpecializationEditDialog = (specialization: z.infer<typeof specializationSchema>) => {
    setSelectedSpecialization(specialization);
    editSpecializationForm.reset(specialization);
  }

  return (
    <div className="w-full max-h-[90vh] overflow-hidden">
      <Header path="Главная" />
      <div className="bg-white gap-6 mt-20 mx-12 mb-6 p-4 rounded-xl">
        <Tabs defaultValue="doctors" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="doctors">Доктора</TabsTrigger>
            <TabsTrigger value="specializations">Специальности</TabsTrigger>
          </TabsList>
          <TabsContent value="doctors" className='w-[65vw]'>
            <div className='flex items-center gap-6'>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className='bg-[#77deb5] rounded-3xl py-4 px-5 my-2'>
                    <span className='text-white'>Добавить доктора</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Добавление доктора</DialogTitle>
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
                        <Input {...field} disabled={false} placeholder="Введите имя доктора" type="text" />
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
                        <Input {...field} disabled={false} placeholder="Введите фамилию доктора" type="text" />
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
                  name="specialization"
                  control={addForm.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Специальность</FormLabel>
                      <FormControl>
                        <Input {...field} disabled={false} placeholder="Введите специальность" type="text" />
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
                    <TableHead>Имя</TableHead>
                    <TableHead>Фамилия</TableHead>
                    <TableHead>Дата рождения</TableHead>
                    <TableHead>Инн</TableHead>
                    <TableHead>Номер телефона</TableHead>
                    <TableHead>Страховой полис</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {doctors.map((doctor) => (
                    <TableRow key={doctor.name}>
                      <TableCell>{doctor.name}</TableCell>
                      <TableCell>{doctor.surname}</TableCell>
                      <TableCell>{doctor.birthday}</TableCell>
                      <TableCell>{doctor.inn}</TableCell>
                      <TableCell>{doctor.specialization}</TableCell>
                      <TableCell>
                        <Button className='bg-[#f2f5ff] rounded-3xl py-4 px-5 my-2' variant="secondary">
                          <span className='text-[#6A6E83]'>Удалить</span>
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              className='bg-[#f2f5ff] rounded-3xl py-4 px-5 my-2 border-[#0065FF]'
                              variant='outline'
                              onClick={() => openEditDialog(doctor)}
                            >
                              <span className='text-[#0065FF]'>Изменить</span>
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>Редактирование доктора</DialogTitle>
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
                                      <Input {...field} disabled={false} placeholder="Введите имя доктора" type="text" />
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
                                      <Input {...field} disabled={false} placeholder="Введите фамилию доктора" type="text" />
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
                                name="specialization"
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
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          <TabsContent value="specializations" className='w-[85vw]'><div className='flex items-center gap-6'>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className='bg-[#77deb5] rounded-3xl py-4 px-5 my-2'>
                    <span className='text-white'>Добавить специальность</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Добавление специальности</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
              <Form {...addSpecializationForm}>
              <form onSubmit={addSpecializationForm.handleSubmit(handleSpecializationAddSubmit)} className="flex flex-col gap-4">
                <FormField
                  name="title"
                  control={addSpecializationForm.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Наименование</FormLabel>
                      <FormControl>
                        <Input {...field} disabled={false} placeholder="Введите специальность" type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="description"
                  control={addSpecializationForm.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Описание</FormLabel>
                      <FormControl>
                        <Input {...field} disabled={false} placeholder="Введите описание" type="text" />
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
          <div className="max-h-[70vh] overflow-y-auto w-3/4"> 
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Наименование</TableHead>
                  <TableHead>Описание</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {specializations.map((specialization) => (
                  <TableRow key={specialization.title}>
                    <TableCell>{specialization.title}</TableCell>
                    <TableCell>{specialization.description}</TableCell>
                    <TableCell>
                      <Button className='bg-[#f2f5ff] rounded-3xl py-4 px-5 my-2' variant="secondary">
                        <span className='text-[#6A6E83]'>Удалить</span>
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className='bg-[#f2f5ff] rounded-3xl py-4 px-5 my-2 border-[#0065FF]'
                            variant='outline'
                            onClick={() => openSpecializationEditDialog(specialization)}
                          >
                            <span className='text-[#0065FF]'>Изменить</span>
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Редактирование специальности</DialogTitle>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                          <Form {...editSpecializationForm}>
                          <form onSubmit={editSpecializationForm.handleSubmit(handleSpecializationEditSubmit)} className="flex flex-col gap-4">
                            <FormField
                              name="title"
                              control={editSpecializationForm.control}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Имя</FormLabel>
                                  <FormControl>
                                    <Input {...field} disabled={false} placeholder="Введите наименование" type="text" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              name="description"
                              control={editSpecializationForm.control}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Фамилия</FormLabel>
                                  <FormControl>
                                    <Input {...field} disabled={false} placeholder="Введите описание" type="text" />
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
        </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
