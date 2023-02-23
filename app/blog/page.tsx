import { getAllPosts } from "../../lib/cms";
import Link from 'next/link';

export default async function Blog() {
    const posts = await getAllPosts();

    return <div>
        {posts.map(post => <div>
            <Link href={`/blog/${post.slug}`}>
                ${post.title}                
            </Link>
        </div>)}
    </div>
}