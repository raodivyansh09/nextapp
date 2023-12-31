import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Div App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
        
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/image2.jpg"
            alt="Next.js Logo"
            width={1000}
            height={500}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://www.scnsoft.com/services/software-development/custom"
            
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
            Custom Software Development <span>-&gt;</span>
            </h2>
          </a>

          <a
            href="https://www.ibm.com/topics/mobile-application-development"
            
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
            Mobile App Development <span>-&gt;</span>
            </h2>
          </a>

          <a
            href="https://www.ibm.com/topics/software-testing#:~:text=Software%20testing%20is%20the%20process,Test%20management%20plan"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
            Software Testing <span>-&gt;</span>
            </h2>
          </a>

          <a
            href="https://www.appnovation.com/development/website-development-firm?creative=675438312180&keyword=web%20development%20service&matchtype=e&network=g&device=c&gad=1&gclid=CjwKCAjw7oeqBhBwEiwALyHLM1YWnnxOYfJJmP9FWdLOPy6a8dyMolLsQf2x59o1FYnW-Ntbk-2cGRoCJz0QAvD_BwE"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
            Website Development <span>-&gt;</span>
            </h2>
          </a>
          <a
            href="https://careerfoundry.com/en/blog/ux-design/the-difference-between-ux-and-ui-design-a-laymans-guide/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
            UI/UX Design <span>-&gt;</span>
            </h2>
          </a>
          <a
            href="https://www.bigcommerce.com/articles/ecommerce-website-development/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
            E-commerce Development <span>-&gt;</span>
            </h2>
          </a>
        </div>
      </main>
    </>
  )
}
