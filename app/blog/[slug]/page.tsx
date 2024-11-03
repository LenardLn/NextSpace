export const revalidate = 1200; // not necessary, just for ISR demonstration

export interface Post {
  title: string;
  content: string;
  slug: string;
}

export async function generateStaticParams() {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// interface Props {
//   params: { slug: string };
// }

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await params to get the slug value
  const { slug } = await params;

  // Fetch the posts data
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );

  // Find the post that matches the slug
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
