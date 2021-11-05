import Layout from '../components/layout';
import Image from 'next/image'

const name = 'Zaid Rashid'
export default function About() {
  return (
    <Layout>
      <head>About Me</head>
      <article>
        <Image
          priority
          src="/images/profile.jpg"
          className="rounded-full"
          height={144}
          width={144}
          alt={name}
        />
        <h1 className="text-4xl">{name}</h1>
        This page is about me
      </article>
    </Layout>
  )
}
