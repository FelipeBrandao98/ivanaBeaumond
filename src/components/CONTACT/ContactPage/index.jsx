import ContactContainer from '@/atoms/Contact/ContactContainer'
import AppointmentForm from '../AppointmentForm'

export default function ContactPage({ lang }) {
  return (
    <>
      <ContactContainer>
        <AppointmentForm lang={lang} />
      </ContactContainer>
    </>
  )
}
