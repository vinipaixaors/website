import styles from './HeaderSection.module.scss'

export default function HeaderSection(props) {
  return (
    <header className={props.classTemplate}>
      <div className={styles.colStyky}>
        <h3>{props.title}</h3>
        <small>{props.desc}</small>
      </div>
    </header>
  )
}