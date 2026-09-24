import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.header}>
      <h2>This is Header</h2>
      <button className='btn'> this is also button</button>
    </div>
  )
}

export default Header
