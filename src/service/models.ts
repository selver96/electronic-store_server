export type PostType = {
    post_id: number;
    title: string;
    content: string;
    create_date: number;
} 

export type CommentType = {
    comment_id: number;
    content: string;
    post_id: string;
} 