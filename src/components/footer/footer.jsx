import TelegramIcon from '../svg/telegram-icon'
import styles from './footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__logo}>
                <div>ЛОГО</div>
                <p>© НАЗВАНИЕ 2023. Все права защищены</p>
            </div>
            <ul>
                <li>Контакты</li>
                <li>Редакция</li>
            </ul>
            <ul>
                <li>Политика конфиденциальности</li>
                <li>Условия использования</li>
                <li>Реклама</li>
            </ul>
            <div className={styles.contact}>
                <p>По любым вопросам<br/> пишите на  <a href="email:privet@yandex.com">privet@yandex.com</a></p>
                <div>
                    <TelegramIcon/>
                    <p>Подписаться</p>
                </div>
            </div>
            <button>Предложить новость</button>
        </footer>
    )
}