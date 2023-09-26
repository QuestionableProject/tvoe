import Reaction from './reaction'
import styles from './readmore-card.module.css'


export default function ReadmoreCard({ data }) {
    return (
        <div className={styles.readmore__card}>
            <div className={styles.head}>
                <p className={styles.topic}>{data.topic}</p>
                <p>{data.date}, {data.time}</p>
            </div>
            <p className={styles.description}>{data.description}</p>
            <Reaction data={data.usersCommunicate}/>
        </div>
    )
}