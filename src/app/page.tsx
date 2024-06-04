import Link from 'next/link'
import Image from 'next/image'

import styles from "./page.module.scss";

export default function Home() {
    return (
        <main className={styles.hero}>
            <Image
                alt='hand'
                width={288}
                height={192}
                src='/hand.svg'
                className={styles.img}
            />
            <div className={styles.text}>
                <p className={styles.title}>
                    Who wants to be a millionaire?
                </p>
            </div>
            <Link href='/game' className={styles.link}>
                Start
            </Link>
        </main>
);
}