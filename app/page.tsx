import styles from '../styles/home.module.css'

import Link from 'next/link'

export default async function Home() {
  return <div className={styles.home}>
            <div>
              <div><h1>Hi, my name is Vyacheslav!</h1></div>
              <div>
                <Link href="/blog">My Blog</Link>
              </div>
              <div>
                <Link href="/contact">Contact me</Link>
              </div>
              <div>contact</div>
            </div>  
        </div>
}
