import styles from './page.module.css'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import { inicedents, readmore, tape } from '@/constant'
import ReadmoreCard from '@/components/readmore-card'
import IncidentsCard from '@/components/incidents-card'
import TapeCard from '@/components/tape-card'
import FireIcon from '@/components/svg/fire-icon'
import ArrowIcon from '@/components/svg/arrow-icon'
import Advertisement from '@/components/advertisement'

import svgTape from "@/assets/icons.svg"
import svgIncidents from "@/assets/icons-1.svg"
import svgAuto from "@/assets/icons-2.svg"
import svgBusiness from "@/assets/icons-3.svg"
import svgHealth from "@/assets/icons-4.svg"
import svgСrypto from "@/assets/icons-5.svg"
import svgRealty from "@/assets/icons-6.svg"
import svgEducation from "@/assets/icons-7.svg"
import svgPolitics from "@/assets/icons-8.svg"
import svgTourism from "@/assets/icons-9.svg"
import svgShowbusiness from "@/assets/icons-10.svg"
import svgSport from "@/assets/icons-11.svg"
import svgStyle from "@/assets/icons-12.svg"
import svgSciaTech from "@/assets/icons-13.svg"
import svgEconomy from "@/assets/icons-14.svg"

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <main>
        <aside>
          <ul>
            <li className={styles.active}><img src={svgTape.src} alt="Лента" /> Лента</li>
            <li><img src={svgIncidents.src} alt="Проишествия" /> Проишествия</li>
            <li><img src={svgAuto.src} alt="Авто" /> Авто</li>
            <li><img src={svgBusiness.src} alt="Бизнес" /> Бизнес</li>
            <li><img src={svgHealth.src} alt="Здоровье" /> Здоровье</li>
            <li><img src={svgСrypto.src} alt="Крипто" /> Крипто</li>
            <li><img src={svgRealty.src} alt="Недвижимость" /> Недвижимость</li>
            <li><img src={svgEducation.src} alt="Образование" /> Образование</li>
            <li><img src={svgPolitics.src} alt="Политика" /> Политика</li>
            <li><img src={svgTourism.src} alt="Туризм" /> Туризм</li>
            <li><img src={svgShowbusiness.src} alt="Шоу-бизнес" /> Шоу-бизнес</li>
            <li><img src={svgSport.src} alt="Спорт" /> Спорт</li>
            <li><img src={svgStyle.src} alt="Стиль" /> Стиль</li>
            <li><img src={svgSciaTech.src} alt="Наука и технологии" /> Наука и технологии</li>
            <li><img src={svgEconomy.src} alt="Экономика" /> Экономика</li>
          </ul>
        </aside>
        <section>

          <div className={styles.preview}>

            <div className={styles.tape}>
              <div className={styles.tape__section}>
                <div className={styles.heading}>
                  <p>Лента</p>
                </div>
                <div className={styles.tape__block}>
                  {tape.map(e =>
                    <TapeCard key={e.id} data={e} />
                  )}
                </div>
              </div>
              <div className={styles.runline}>
                <div className={styles.runline__block}>
                  <div>
                    <FireIcon />
                    <p>ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</p>
                  </div>
                  <div >
                    <FireIcon />
                    <p>ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</p>
                  </div>
                  <div >
                    <FireIcon />
                    <p>ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</p>
                  </div>
                  <div >
                    <FireIcon />
                    <p>ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</p>
                  </div>
                  <div >
                    <FireIcon />
                    <p>ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</p>
                  </div>
                  <div >
                    <FireIcon />
                    <p>ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</p>
                  </div>
                </div>
              </div>
            </div>

            <Advertisement/>
          </div>

          <div className={styles.readmore}>
            <div className={styles.heading}>
              <p>Читайте также </p>
              <ArrowIcon />
            </div>
            <div className={styles.readmore__block}>
              {readmore.map((e) =>
                <ReadmoreCard key={e.id} data={e} />
              )}
            </div>
          </div>

          <div className={styles.incidents}>
            <div className={styles.heading}>
              <p>Происшествия </p>
              <ArrowIcon />
            </div>
            <div className={styles.incidents__block}>
              {inicedents.map((e) =>
                <IncidentsCard key={e.id} data={e} />
              )}
            </div>
          </div>

        </section>
      </main>
      <Footer />
    </main>
  )
}
