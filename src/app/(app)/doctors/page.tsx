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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useSearchDoctor } from '@/entities/doctor/hooks/useSearchDoctor'
import { Spinner } from '@/components/spinner'
import { toast } from '@/hooks/use-toast'
import { useCreateDoctor } from '@/entities/doctor/hooks/useCreateDoctor'
import { useSearchDoctorType } from '@/entities/doctorType/hooks/useSearchDoctorType'
import { useUpdateDoctor } from '@/entities/doctor/hooks/useUpdateDoctor'
import { useDeleteDoctor } from '@/entities/doctor/hooks/useDeleteDoctor'
import { useDeleteDoctorType } from '@/entities/doctorType/hooks/useDeleteDoctorType'
import { useUpdateOrCreateDocType } from '@/entities/doctorType/hooks/useUpdateOrCreateDocType'
import { useSearchPerson } from '@/entities/person/hooks/useSearchPerson'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { emptyRowField } from '@/applicationConstants'

const doctorSchema = z.object({
  id: z.string().optional(),
  specialization: z.string(),
})

const specializationSchema = z.object({
  name: z.string().min(1, 'Название не должно быть пустым'),
  description: z.string().min(1, 'Специальность не должна быть пустой'),
  id: z.string().min(1, 'Заполните идентификатор специальности'),
})

export default function DoctorsPage() {
  const [_, setSelectedDoctor] = useState<z.infer<typeof doctorSchema>>()
  const [_selectedSpecialization, setSelectedSpecialization] = useState<z.infer<typeof specializationSchema>>()

  const { persons, loading, error } = useSearchPerson('')

  const { doctors, loading: doctorsLoading, error: doctorsError, invalidateCache } = useSearchDoctor('')
  const { executeMutation: createDoctor, loading: createLoading, error: createError } = useCreateDoctor()
  const { executeMutation: updateDoctor, loading: updateLoading, error: updateError } = useUpdateDoctor()
  const { executeMutation: deleteDoctor, loading: deleteLoading, error: deleteError } = useDeleteDoctor()

  const {
    doctors: types,
    loading: typesLoading,
    error: typesError,
    invalidateCache: invalidateCacheType,
  } = useSearchDoctorType('')
  const {
    executeMutation: updateDoctorType,
    loading: updateTypeLoading,
    error: updateTypeError,
  } = useUpdateOrCreateDocType()
  const {
    executeMutation: deleteDoctorType,
    loading: deleteLoadingType,
    error: deleteErrorType,
  } = useDeleteDoctorType()

  const addForm = useForm<z.infer<typeof doctorSchema>>({
    resolver: zodResolver(doctorSchema),
    defaultValues: {
      id: '',
      specialization: '',
    },
  })

  const editForm = useForm<z.infer<typeof doctorSchema>>({
    resolver: zodResolver(doctorSchema),
    defaultValues: {
      specialization: '',
    },
  })

  const addSpecializationForm = useForm<z.infer<typeof specializationSchema>>({
    resolver: zodResolver(specializationSchema),
    defaultValues: {
      name: '',
      description: '',
      id: '',
    },
  })

  const handleAddSubmit = async (values: z.infer<typeof doctorSchema>) => {
    if (values.id === undefined) return

    try {
      const { data } = await createDoctor(values.specialization, values.id)

      toast({
        title: `Специалист ${data?.packet.createDoctor.person.entity.firstName} ${data?.packet.createDoctor.person.entity.lastName} добавлен`,
      })

      invalidateCache()
    } catch {
      toast({
        title: createError?.message,
        variant: 'destructive',
      })
    }
  }

  const handleEditSubmit = async (values: z.infer<typeof doctorSchema>, id: string, personId: string) => {
    try {
      const { data } = await updateDoctor(id, values.specialization, personId)

      toast({
        title: `Специалист ${data?.packet.updateDoctor.person.entity.firstName} ${data?.packet.updateDoctor.person.entity.lastName} обновлен успешно`,
      })

      invalidateCache()
    } catch {
      toast({
        title: updateError?.message,
        variant: 'destructive',
      })
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteDoctor(id)

      toast({
        title: `Специалист успешно удален`,
      })

      invalidateCache()
    } catch {
      toast({
        title: deleteError?.message,
        variant: 'destructive',
      })
    }
  }

  const handleSpecializationAddUpdateSubmit = async (values: z.infer<typeof specializationSchema>) => {
    const { name, description, id } = values

    try {
      const { data } = await updateDoctorType(name, description, id)

      toast({
        title: `Специализация ${data?.dictionaryPacket?.updateOrCreateDoctorType?.returning?.name} добавлена/обновлена`,
      })

      invalidateCacheType()
    } catch {
      toast({
        title: updateTypeError?.message,
        variant: 'destructive',
      })
    }
  }

  const handleDeleteType = async (id: string) => {
    try {
      await deleteDoctorType(id)

      toast({
        title: `Специальность успешно удалена`,
      })

      invalidateCacheType()
    } catch {
      toast({
        title: deleteErrorType?.message,
        variant: 'destructive',
      })
    }
  }

  const openEditDialog = (doctor: z.infer<typeof doctorSchema>) => {
    setSelectedDoctor(doctor)
    editForm.reset(doctor)
  }

  const openSpecializationEditDialog = (specialization: z.infer<typeof specializationSchema>) => {
    setSelectedSpecialization(specialization)
    addSpecializationForm.reset(specialization)
  }

  if (doctorsError || typesError) {
    toast({
      title: (doctorsError || typesError)?.message,
      description: 'Произошла ошибка при загрузке данных',
      variant: 'destructive',
    })
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
          <TabsContent value="doctors" className="w-[65vw]">
            <div className="flex items-center gap-6">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-[#77deb5] rounded-3xl py-4 px-5 my-2">
                    <span className="text-white">Добавить доктора</span>
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
                          name="specialization"
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
                                  {types.map((el) => (
                                    <SelectItem value={el.id}>{el.name}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button
                          disabled={createLoading || loading || typesLoading || !!error}
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
            {!doctors || (doctorsLoading && <Spinner />)}
            {!!doctors.length && (
              <div className="max-h-[70vh] overflow-y-auto w-full">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Имя</TableHead>
                      <TableHead>Фамилия</TableHead>
                      <TableHead>Специальность</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {doctors.map((doctor) => (
                      <TableRow key={doctor.id}>
                        <TableCell>{doctor.person.entity.firstName}</TableCell>
                        <TableCell>{doctor.person.entity.lastName}</TableCell>
                        <TableCell>{doctor.doctorType.name}</TableCell>
                        <TableCell>
                          <Button
                            disabled={deleteLoading}
                            onClick={() => {
                              return handleDelete(doctor.id)
                            }}
                            className="bg-[#f2f5ff] rounded-3xl py-4 px-5 my-2"
                            variant="secondary">
                            <span className="text-[#6A6E83]">Удалить</span>
                          </Button>
                        </TableCell>
                        <TableCell>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                className="bg-[#f2f5ff] rounded-3xl py-4 px-5 my-2 border-[#0065FF]"
                                variant="outline"
                                onClick={() => openEditDialog({ specialization: doctor.doctorType.name })}>
                                <span className="text-[#0065FF]">Изменить</span>
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                              <DialogHeader>
                                <DialogTitle>Редактирование доктора</DialogTitle>
                              </DialogHeader>
                              <div className="grid gap-4 py-4">
                                <Form {...editForm}>
                                  <form
                                    onSubmit={editForm.handleSubmit((val) => {
                                      return handleEditSubmit(val, doctor.id, doctor.person.entityId)
                                    })}
                                    className="flex flex-col gap-4">
                                    <FormField
                                      name="specialization"
                                      control={editForm.control}
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
                                              {types.map((el) => (
                                                <SelectItem value={el.id}>{el.name}</SelectItem>
                                              ))}
                                            </SelectContent>
                                          </Select>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                    <Button
                                      disabled={updateLoading || typesLoading}
                                      type="submit"
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
          </TabsContent>
          <TabsContent value="specializations" className="w-[85vw]">
            <div className="flex items-center gap-6">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-[#77deb5] rounded-3xl py-4 px-5 my-2">
                    <span className="text-white">Добавить специальность</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Добавление специальности</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <Form {...addSpecializationForm}>
                      <form
                        onSubmit={addSpecializationForm.handleSubmit(handleSpecializationAddUpdateSubmit)}
                        className="flex flex-col gap-4">
                        <FormField
                          name="id"
                          control={addSpecializationForm.control}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>ID</FormLabel>
                              <FormControl>
                                <Input {...field} disabled={false} placeholder="Введите ID" type="text" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          name="name"
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

                        <Button
                          type="submit"
                          disabled={updateTypeLoading}
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
            <div className="max-h-[70vh] overflow-y-auto w-3/4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Наименование</TableHead>
                    <TableHead>Описание</TableHead>
                  </TableRow>
                </TableHeader>
                {!types || (typesLoading && <Spinner />)}
                {!!types.length && (
                  <TableBody>
                    {types.map((specialization) => (
                      <TableRow key={specialization.id}>
                        <TableCell>{specialization.name}</TableCell>
                        <TableCell>{specialization.description ?? emptyRowField}</TableCell>
                        <TableCell>
                          <Button
                            disabled={deleteLoadingType}
                            onClick={() => {
                              return handleDeleteType(specialization.id)
                            }}
                            className="bg-[#f2f5ff] rounded-3xl py-4 px-5 my-2"
                            variant="secondary">
                            <span className="text-[#6A6E83]">Удалить</span>
                          </Button>
                        </TableCell>
                        <TableCell>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                className="bg-[#f2f5ff] rounded-3xl py-4 px-5 my-2 border-[#0065FF]"
                                variant="outline"
                                onClick={() => openSpecializationEditDialog(specialization)}>
                                <span className="text-[#0065FF]">Изменить</span>
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                              <DialogHeader>
                                <DialogTitle>Редактирование специальности</DialogTitle>
                              </DialogHeader>
                              <div className="grid gap-4 py-4">
                                <Form {...addSpecializationForm}>
                                  <form
                                    onSubmit={addSpecializationForm.handleSubmit(handleSpecializationAddUpdateSubmit)}
                                    className="flex flex-col gap-4">
                                    <FormField
                                      name="id"
                                      control={addSpecializationForm.control}
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>ID</FormLabel>
                                          <FormControl>
                                            <Input {...field} disabled={false} placeholder="Введите ID" type="text" />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />

                                    <FormField
                                      name="name"
                                      control={addSpecializationForm.control}
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>Наименование</FormLabel>
                                          <FormControl>
                                            <Input
                                              {...field}
                                              disabled={false}
                                              placeholder="Введите специальность"
                                              type="text"
                                            />
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
                                            <Input
                                              {...field}
                                              disabled={false}
                                              placeholder="Введите описание"
                                              type="text"
                                            />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />

                                    <Button
                                      type="submit"
                                      disabled={updateTypeLoading}
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
                )}
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
