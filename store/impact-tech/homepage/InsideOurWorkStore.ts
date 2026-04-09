import { create } from "zustand";
import axios, { AxiosError } from "axios";
interface Attachment {
    id: string,
    filename: string,
    mimeType: string,
    size: string,
    content: string,
    proxyUrl: string
}
interface Image {
    id: string,
    key: string,
    title: string,
    attachments: Attachment[]
}
interface OurWorkImages {
    images: Image[],
    loading: boolean,
    error: string | null,
    fetchImages: () => void
}
export const useInsideOurWork = create<OurWorkImages>((set) => ({
    images: [], loading: false, error: null, fetchImages: async () => {
        set({ loading: true })
        try {
            const res = await axios.get('https://site-api.alluvium.net/impact-tech/api/work-images/')
            if (res.status === 200 || res.status === 201) {
                set({ images: res.data.results, loading: false, error: null })
                console.log(res.data.results)
            }
        } catch (err) {
            if (err instanceof AxiosError) {
                set({ error: err.message || 'There is an error fetching images' })
            }
        }
    }
}))