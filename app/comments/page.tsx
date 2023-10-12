import {Metadata} from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Next | Comments',
}

const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json()
}

export default async function Comments() {
    const data = await getData()
    return (
        <>
            <h1>Comments</h1>
            <Link href={'/comments'}>Коментарии</Link>
            {data.map((post) => (
                <div key={post.id}>
                    <p>{post.title}</p>
                    <Link href={`/comments/${post.id}`}>Посмотреть комментарии пользователя</Link>
                </div>
            ))}
        </>
    )
}