import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getPosts, getPostDetails } from "../../services";
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, Loader, SocialMedia } from "../../components";

function PostDetails({ post }) {
    const router = useRouter();

    useEffect(() => {
        document.title = `${post.title} | Bloxy`;
    }, [post])

    if (router.isFallback) {
        return <Loader />
    }

    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="col-span-1 lg:col-span-8">
                    <PostDetail post={post} />
                    <Author author={post.author} />
                    <CommentsForm slug={post.slug} />
                    <Comments slug={post.slug} />
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <div className="relative lg:sticky top-8">
                        <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
                        <Categories />
                        <SocialMedia />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostDetails;

// NextJS way of calling apis after the rendering
export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug);

    return {
        props: { post: data }
    }
}

export async function getStaticPaths() {
    const posts = await getPosts();

    return {
        paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: true,
    }
}
