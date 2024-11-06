export const revalidate = 1200;

export interface Post {
  title: string;
  content: string;
  slug: string;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const posts: Post[] = await fetch(
    `https://${process.env.VERCEL_URL}/blog.json`
  ).then((res) => res.json());

  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold pb-5">{post.title}</h1>
      <p>
        <span className="pr-8"></span>
        {post.content}
      </p>
    </div>
  );
}
