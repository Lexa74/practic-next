import {Metadata} from "next";

interface CommentByIdProps {
    params: {
        id: string
    }
}

const getCommentsUserById = async (id: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
    return res.json()
}

export async function generateMetadata({params: {id}}: CommentByIdProps): Promise<Metadata> {
    const commentsId = await getCommentsUserById(id);
    return {
        title: `Next | UserID: ${commentsId[0].id} Comments`
    }
}

export default async function CommentById({params: {id}}: CommentByIdProps) {
    const commentsUser = await getCommentsUserById(id);
    return (
        <>
            <h1>Comments</h1>
            {commentsUser.map((comment) => (
                <div key={comment.id}>
                    <b>{comment.name}</b>
                    <p>{comment.body}</p>
                </div>
            ))}
        </>
    )
}