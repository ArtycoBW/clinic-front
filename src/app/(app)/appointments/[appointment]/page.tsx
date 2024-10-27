'use client'
import { useRouter } from 'next/router'

type Props = {
  params: { appointment: string }
}

const translations: { [key: string]: string } = {
  pathologist: 'Патологоанатом',
  manager: 'Ген.дир',
  smoker: 'Покурист',
  venereologist: 'Венеролог',
  superintendent: 'Заведующий Отделением Терапии',
  psychotherapist: 'Психотерапевт',
  therapist: 'Терапевт',
  surgeon: 'Хирург',
  topDoctor: 'Топ врач',
}

export default function Page({ params }: Props) {
  const { appointment } = params;
  const translatedAppointment = translations[appointment] || 'Неизвестная специальность';

  return <p>Специальность: {translatedAppointment}</p>;
}
