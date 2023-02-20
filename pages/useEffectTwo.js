import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '@/styles/useEffectTwo.module.css'

export default function useEffectTwo() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 50);
    }, []) // only want it to run once, so you add comma and square brackets here. usestate will run super fast so you won't even see 0 initially and you'll add 50 right away 

    return (
        <>
            <div className={styles.links}>
                <Link href="/" className={styles.home}>Home</Link>
                <Link href="/useEffectTwo" className={styles.home}>useEffectTwo</Link>
                <Link href="/useEffectThree" className={styles.home}>useEffectThree</Link>
                <Link href="/carouselPage" className={styles.home}>Carousel</Link>
            </div>
            <div className={styles.title}>
                useEffectTwo
            </div>
            <div className={styles.number}>
                {number}
            </div>
        </>
    )
}