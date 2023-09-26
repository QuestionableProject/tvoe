import styles from './incidents-card.module.css'
import Reaction from './reaction'

export default function IncidentsCard({ data }) {
    return (
        <div className={styles.incidents__card}>
            <div className={styles.img}>
                <img src={data.photo.src} alt={data.description} />
            </div>
            <div className={styles.incidents__info}>
                <p>{data.date}, {data.time}</p>
                <p className={styles.description}>{data.description}</p>
                <Reaction data={data.usersCommunicate}/>
            </div>
        </div>
    )
}