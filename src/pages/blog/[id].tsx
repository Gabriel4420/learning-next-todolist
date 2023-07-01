import Layout from "@/components/template/layout"
import { GetStaticProps } from "next"
import { ParsedUrlQuery } from "querystring"
import { Post } from "types/posts"

type Props = {
    post: Post
}

const BlogItem = ({post}:Props) => {
    return (
        <Layout>
            <h1>Blog</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </Layout>
    )
}

export default BlogItem

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts: Post[] = await res.json()
    const paths = posts.map((post:Post) => ({ params:{ id: post.id.toString() } }))
    return {
        paths,
        fallback: 'blocking'
    }
}
interface IParams extends ParsedUrlQuery {
    id: string
}
export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
    const {id} = params as IParams
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()
    return {
        props: {
            post
        }
    }
}