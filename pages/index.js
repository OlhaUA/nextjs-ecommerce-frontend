import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { fromImageToUrl, API_URL } from '../utils/urls';
import { twoDecimals } from '../utils/format';

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Build an Ecommerce with NextJS, Magic, Strapi and Stripe</title>
        <meta name='description' content='a FullStack Ecommerce' />
      </Head>

      {products.map((product) => (
        <div key={product.name} className={styles.product}>
          <Link href={`/products/${product.slug}`}>
            <a>
              <div className={styles.product__Row}>
                <div className={styles.product__ColImg}>
                  <Image
                    src={product.image.formats.medium.url}
                    width={600}
                    height={900}
                  />
                </div>
                <div className={styles.product__Col}>
                  {product.name} ${twoDecimals(product.price)}
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const products_res = await fetch(`${API_URL}/products/`);
  const products = await products_res.json();

  return {
    props: {
      products,
    },
  };
}
