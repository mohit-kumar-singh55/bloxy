import Head from 'next/head';
import { PostCard, PostWidget, Categories } from '../components';
import { getPosts } from "../services"

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Bloxy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="google-site-verification" content="fMX_CED-QBbv8G4wInRzwJP1pnV-gNroYS4lpUHYdCk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

// NextJS way of calling apis after the rendering
export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}