// Components imports
import ItemCollection from '../ItemCollection'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function CollectionGrid() {
  // Return components, with functions to call API and language
  return (
    <section className={styles.container}>
      <ItemCollection />
      <ItemCollection />
      <ItemCollection />
      <ItemCollection />
      <ItemCollection />
      <ItemCollection />
      <ItemCollection />
      <ItemCollection />
      <ItemCollection />
      <ItemCollection />
      <ItemCollection />
      <ItemCollection />
    </section>
  )
  //
}
