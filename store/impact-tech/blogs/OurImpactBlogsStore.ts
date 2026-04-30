import { create } from "zustand";
import axios, { AxiosError } from "axios";

interface Attachment {
    id: string,
    filename: string,
    mimeType: string,
    size: number,
    proxyUrl: string
}
interface Blog {
    id: string,
    key: string,
    title: string,
    body: string,
    attachments: Attachment[],
    detailUrl: string,
    minute_read: string,
    tech_program: string,
    bringing_coding_to_the_classroom: string,
    real_impact_real_stories: string,
    beyond_technical_skills: string,
    looking_ahead: string
    date: string,
}
interface BlogsStore {
    blogs: Blog[];
    loading: boolean;
    error: string | null;
    fetchBlogs: () => Promise<void>;
}
export const useBlogsStore = create<BlogsStore>((set) => ({
    blogs: [],
    loading: false,
    error: null,
    fetchBlogs: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get("https://site-api.alluvium.net/impact-tech/api/blogs/");
            set({ blogs: response.data.results, loading: false });
            console.log(response.data.results)
        } catch (err) {
            const errorMessage = err instanceof AxiosError ? err.message : "An error occurred";
            set({ error: errorMessage, loading: false });
        }
    },
}));