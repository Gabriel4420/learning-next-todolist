import Layout from "@/components/Template/layout";
import { GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { Post } from "types/posts";

type Props = {
  post: Post;
};

const BlogItem = ({ post }: Props) => {
  const { query, route } = useRouter();
  console.log(route);
  return (
    <Layout>
      <span>/blog/{query.id}</span>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link href="/blog" className="btn btn-primary">
        Voltar
      </Link>
    </Layout>
  );
};

export default BlogItem;

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();
  const paths = posts.map((post: Post) => ({
    params: { id: post.id.toString() },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};
interface IParams extends ParsedUrlQuery {
  id: string;
}
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const { id } = params as IParams;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
};
