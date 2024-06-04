import Link from 'next/link'
import Image from 'next/image'

import styles from "../page.module.scss";

type ResultPropsType = {
    score: string,
}

const Result = () => {
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
                <p className={styles.subtitle}>
                    Total score:
                </p>
                <p className={styles.title}>
                    score earned
                </p>
            </div>
            <Link href='/game' className={styles.link}>
                Try again
            </Link>
        </main>
    );
}

export default Result
