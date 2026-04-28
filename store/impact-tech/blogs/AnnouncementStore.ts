import { create } from "zustand";
import axios, { AxiosError } from "axios";
import { DocBody } from "../case-study/CaseStudyStore";


interface Content {
    type: string,
    text: string
}
interface ButtonLink {
    type: string,
    version: number,
    content: [
        { type: string, content: Content[] }
    ]
}
interface Announcement {
    id: string;
    title: string;
    body: string;
    key: string;
    attachments: [
        {
            id: string,
            filename: string,
            mimeType: string,
            size: number,
            content: string,
            proxyUrl: string,
        }
    ],
    date: string,
    button_link: ButtonLink
}

interface AnnouncementStore {
    announcements: Announcement[];
    loading: boolean;
    error: string | null;
    fetchAnnouncements: () => Promise<void>;
}
export const useAnnouncementStore = create<AnnouncementStore>((set) => ({
    announcements: [],
    loading: false,
    error: null,
    fetchAnnouncements: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get("https://site-api.alluvium.net/impact-tech/api/announcements/");
            set({ announcements: response.data.results, loading: false });
        } catch (err) {
            const errorMessage = err instanceof AxiosError ? err.message : "An error occurred";
            set({ error: errorMessage, loading: false });
        }
    },
}));