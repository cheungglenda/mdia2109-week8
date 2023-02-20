import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '@/styles/useEffectThree.module.css'

export default function useEffectThree() {

    const [number, setNumber] = useState(0);
    const [value, setValue] = useState(-10);

    useEffect(() => {
        setValue(value + 10);
    }, [number]) // only to run when first usestate number changes. use comma and square bracketes and put number in between to let the useEffect know to run only when number is triggered

    return (
        <>
            <div className={styles.links}>
                <Link href="/" className={styles.home}>Home</Link>
                <Link href="/useEffectTwo" className={styles.home}>useEffectTwo</Link>
                <Link href="/useEffectThree" className={styles.home}>useEffectThree</Link>
                <Link href="/carouselPage" className={styles.home}>Carousel</Link>
            </div>
            <div className={styles.title}>
                useEffectThree
            </div>
            <div className={styles.number}>
                {value}
            </div>
            <div className={styles.buttonArea}>
                <button onClick={() => setNumber(number + 1)} className={styles.button}>Click Me</button>
            </div>
        </>
    )
}

//button onClick will change number by 1 and because number changes it will trigger useEffect to run and will then set value and will then change value to 0 because (usestate-10) but then will go back to default of 0 and will increment by 10 each time
//page will initially start number at 0 and will increment by 10 each click