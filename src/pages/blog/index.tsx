import Layout from "@/components/template/layout"
import Link from "next/link"
import { Post } from "types/posts"

type Props = {
    posts: Post[]
}

const Blog = ({ posts }: Props) => {

    return (
        <Layout>
            <h1>Blog</h1>
            <ul style={{ listStyle: 'none' }}>
                {posts?.map((post) => (
                    <li key={post.id} style={{ color: 'red', fontSize: '20px', paddingBottom: '5px' }}>
                        <Link href={`/blog/${post.id}`}  rel="noreferrer">
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts: Post[] = await res.json()

    return {
        props: {
            posts
        },
        revalidate: 7200
    }
}

export default Blog