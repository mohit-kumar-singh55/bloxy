import Head from 'next/head';
import { PostCard, PostWidget, Categories, SocialMedia } from '../components';
import { getPosts } from "../services";
import FeaturedPosts from "../sections/FeaturedPosts";

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Bloxy | A personalized blog with different categories</title>
        <meta name="description" content="A personalized blog with different categories like Travel, Development, etc." />
        <meta httpEquiv='content-language' content='en-gb'></meta>
        <meta name="google-site-verification" content="lh7ARYc9HW3MOvB_7blCI7eh2-cs3EuVbHrH6N3B5Q4" />
        <meta name="msvalidate.01" content="DFDFB514A2B89406795311540E50E883" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FeaturedPosts />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <main className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </main>
        <aside className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
            <SocialMedia />
          </div>
        </aside>
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