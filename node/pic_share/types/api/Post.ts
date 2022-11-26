export type Post = {
    id?: number;
    users_id: number | null;
    content: string;
    post_image: string;
    created_at: Date;
    updated_at?: Date;
    deleted_at?: Date;
}