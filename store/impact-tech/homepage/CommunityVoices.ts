import { create } from "zustand";
import axios, { AxiosError } from "axios";
interface Voices {
    id: string,
    key: string,
    name: string,
    role: string | null,
    quote: string,
    rating: number
    photo: string
}
interface OurWorkImages {
    voices: Voices[],
    loading: boolean,
    error: string | null,
    fetchCommunityVoices: () => void
}
export const useCommunityVoices = create<OurWorkImages>((set) => ({
    voices: [], loading: false, error: null, fetchCommunityVoices: async () => {
        set({ loading: true })
        try {
            const res = await axios.get('https://site-api.alluvium.net/impact-tech/api/community-voices/')
            if (res.status === 200 || res.status === 201) {
                set({ voices: res.data.results, loading: false, error: null })
            }
        } catch (err) {
            if (err instanceof AxiosError) {
                set({ error: err.message || 'There is an error fetching images' })
            }
        }
    }
}))