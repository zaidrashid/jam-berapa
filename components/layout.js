import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'

const name = 'Zaid Rashid'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div>
      <nav id="tailwind-header" className="my-4">
        <div className="flex justify-between max-w-5xl mx-auto my-4">
          <div className="space-x-6 text-black-600 hover:no-underline hover:text-black">
              Zaid Rashid
          </div>
          <div className="space-x-6">
            <Link href="/">
              <a className="text-gray-600 hover:no-underline hover:text-black">Blog</a>
            </Link>
            <Link href="/about">
              <a className="text-gray-600 hover:no-underline hover:text-black">About</a>
            </Link>
          </div>
        </div>
      </nav>


      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}