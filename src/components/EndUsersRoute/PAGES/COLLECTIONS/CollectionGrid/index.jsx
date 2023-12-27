// Components imports
import ItemCollection from '../ItemCollection'

// Styles imports
import styles from './styles.module.css'

// Component Declaration
export default function CollectionGrid({ products }) {
  // Return components, with functions to call API and language
  return (
    <section className={styles.container}>
      {products.map((product) => {
        return <ItemCollection key={product.id} product={product} />
      })}
    </section>
  )
  //
}
