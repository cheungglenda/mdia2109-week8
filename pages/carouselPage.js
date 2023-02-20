import Link from 'next/link'
import { useEffect, useState } from 'react'
import Carousel from "@/components/carousel"
import styles from '@/styles/carouselPage.module.css'


export default function CarouselPage() {
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
            <div className={styles.carousel}>
            <Carousel />
            </div>
        </>
    )

}