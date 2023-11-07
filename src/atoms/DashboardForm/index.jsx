import styles from './styles.module.css'

export default function DashboardForm(props) {
  const { children } = props

  return (
    <>
      <form {...props}>{children}</form>
    </>
  )
}
