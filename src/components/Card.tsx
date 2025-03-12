import styles from './card.module.css'
import Image from 'next/image'

export default function ProductCard () {
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
            <Image src={'/img/hall1.jpg'}
                alt='Hall Picture'
                fill={true}
                objectFit='cover' 
            />
            </div>
            <div className={styles.cardtext}>Hall 1</div>
        </div>
    );
}