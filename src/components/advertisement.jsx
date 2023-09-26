import styles from './advertisement.module.css'
import Link from 'next/link'

export default function Advertisement() {
    return (
        <div className={styles.advertisement}>
            <Link href={"/"}>
                <p>Ссылка на сайт</p>
                <p>РЕКЛАМА</p>
            </Link>
            <div>
                <p>Реклама</p>
            </div>
            <p className={styles.advertisement__text}>Увеличить IQ всего за считанные минуты? Легко, переходи на источник и будь самым умным...  </p>
        </div>
    )
}