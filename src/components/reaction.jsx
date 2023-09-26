import styles from './reaction.module.css'
import CommentIcon from './svg/comment-icon'
import FavoriteIcon from './svg/favoorite-icon'
import LoveEmoji from '@/assets/love.svg'
import AngryEmoji from '@/assets/angry.svg'
import PoopEmoji from '@/assets/poop.svg'

export default function Reaction({data}) {
    return (
        <div className={styles.reactions}>
            <div><img src={LoveEmoji.src} alt="love" /> {data.love}</div>
            <div><img src={AngryEmoji.src} alt="angry" /> {data.angry}</div>
            <div><img src={PoopEmoji.src} alt="poop" /> {data.poop}</div>
            <div><CommentIcon /> {data.comment}</div>
            <div><FavoriteIcon /> {data.favorite}</div>
        </div>
    )
}