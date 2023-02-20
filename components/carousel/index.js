import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './carousel.module.css'

export default function Carousel() {

    const [img, setImg] = useState(0);
    // to make it more dynamic so the 0.jpg changes
    // start at 0 image, and at background image instead of putting 0.jpg put " + img + ".jpg so it's taking the url of the  0.jpg image from the carousel-images folder

    const changeImage = (change) => {
        if (change == "backward") {
            setImg(img - 1);

            if (img == 0) {
                setImg(5);
            }
            console.log(img);
        } else if (change == "forward") {
            setImg(img + 1);
            if (img == 5) {
                setImg(0)
            }
            console.log(img)
        }
    }
    // on change, if anyone clicks on either buttons, it will change the image and pass the image -1 or +1 

    return (
        <>
            <div className={styles.carousel} style={{
                backgroundImage: "url(/carousel-images/" + img + ".jpg)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: 500,
                height: 300
            }}>
                <Image className={styles.arrowLeft}
                    src={"/icons/leftArrow.png"}
                    alt={"/icons/leftArrow.png"}
                    width={50}
                    height={50}
                    onClick={() => changeImage("backward")}
                />

                <Image className={styles.arrowRight}
                    src={"/icons/rightArrow.png"}
                    alt={"/icons/rightArrow.png"}
                    width={50}
                    height={50}
                    onClick={() => changeImage("forward")}
                />
            </div>
        </>
    )
}