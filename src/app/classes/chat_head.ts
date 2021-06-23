export interface ChatHead {
    chat_head_id: string
    last_message: string;
    created_at: string;
    users: string[];
    user_info: userInfo
}

export interface userInfo {
    user_id: string;
    user_image: string;
    user_name: string
}