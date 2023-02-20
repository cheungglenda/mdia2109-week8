import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '@/styles/useEffectOne.module.css'

export default function useEffectOne() {

    const[number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 1);
    }) 
    // use effect will keep running unless there's something to stop it and will always increment by 1 over and over again, like an infinite loop

    return (
        <>
            <div className={styles.links}>
                <Link href="/" className={styles.home}>Home</Link>
                <Link href="/useEffectTwo" className={styles.home}>useEffectTwo</Link>
                <Link href="/useEffectThree" className={styles.home}>useEffectThree</Link>
                <Link href="/carouselPage" className={styles.home}>Carousel</Link>
            </div>
            <div className={styles.title}>
                useEffectOne
            </div>
            <div className={styles.number}>
                {number}
            </div>
        </>
    )
}