import LightningIcon from './svg/lightning-icon'
import styles from './tape-card.module.css'

export default function TapeCard({data}) {
    return (
        <div className={styles.tape__card}>
            <LightningIcon/>
            <div>
                <p>{data.description}</p>
                <div className={styles.tape__info}>
                    <p>{data.time}</p>
                    <p className={styles.topic}>
                        {data.topic}
                    </p>
                </div>
            </div>
        </div>
    )
}