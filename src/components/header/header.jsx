import { day } from '@/constant';
import styles from './header.module.css'
import SearchIcon from '../svg/search-icon';
import UserIcon from '../svg/user-icon';
import DollarIcon from '../svg/dollar-icon';
import EuroIcon from '../svg/euro-icon';
import BitcoinIcon from '../svg/bitcoin-icon';
import CalendarIcon from '../svg/calendar-icon';

export default function Header() {
    const date = new Date();

    return (
        <header className={styles.header}>
            <div >
                <div className={styles.logo}>
                    <h1>ЛОГО</h1>
                </div>
                <ul>
                    <li>
                        <CalendarIcon /> {`${day[date.getDay()]}, ${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}`}
                    </li>
                    <li>
                        <DollarIcon /> 96.34
                    </li>
                    <li>
                        <EuroIcon /> 104.61
                    </li>
                    <li>
                        <BitcoinIcon /> 25.725
                    </li>
                </ul>
            </div>
            <div>
                <SearchIcon />
                <UserIcon />
            </div>
        </header>
    )
}