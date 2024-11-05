import Link from "next/link";

export default async function Blog() {
  const posts = await fetch(
    `https://${process.env.VERCEL_URL}/api/content`
  ).then((res) => res.json());

  return (
    <div>
      <h1 className="text-3xl font-bold pb-5">Welcome to our Blog</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2>
                👉 <span className="hover:underline">{post.title}</span>
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
