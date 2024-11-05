export const revalidate = 1200; // not necessary, just for ISR demonstration

export interface Post {
  title: string;
  content: string;
  slug: string;
}

export async function generateStaticParams() {
  const posts: Post[] = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`).then(
    (res) => res.json()
  );

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await params to get the slug value
  const { slug } = await params;

  // Fetch the posts data
  const posts: Post[] = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`).then(
    (res) => res.json()
  );

  // Find the post that matches the slug
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
