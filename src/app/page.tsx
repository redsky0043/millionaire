import Link from 'next/link'
import Image from 'next/image'

import { ROUTES } from '@/common/routes'
import styles from "./page.module.scss";
import classNames from "classnames";

export default function Home() {
    const mainClass = classNames(styles.hero, styles.bg);
    return (
        <main className={mainClass}>
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
            <Link href={ROUTES.GAME} className={styles.link}>
                Start
            </Link>
        </main>
    );
}
