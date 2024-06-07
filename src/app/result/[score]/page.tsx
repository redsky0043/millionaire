import { type FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { ROUTES } from '@/common/routes'
import styles from "@/app/page.module.scss";
import { prizes } from '../../../../public/questions.json'

type ResultPropsType = {
    params: {
        score: number,
    },
}

const Result: FC<ResultPropsType> = ({ params }) => {
    const finalScore = prizes[params.score]
        
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
                    {finalScore} earned
                </p>
            </div>
            <Link href={ROUTES.HOME} className={styles.link}>
                Try again
            </Link>
        </main>
    );
}

export default Result
