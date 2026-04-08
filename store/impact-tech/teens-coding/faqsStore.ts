import { create } from "zustand";
import axios from "axios";
import { AxiosError } from "axios";

interface FaqsResults {
    id: number,
    question: string,
    answer: string,
    program: string
}
interface Faqs {
    faqs: FaqsResults[],
    loading: boolean,
    error: string | null,
    hasFetched: boolean;
    fetchFaqs: (program: string) => Promise<void>
}
export const useFaqsStore = create<Faqs>((set) => ({
    faqs: [], loading: false, error: null, hasFetched: false, fetchFaqs: async (program?: string) => {
        set({ loading: true, hasFetched: false })
        try {
            const res = await axios.get('https://site-api.alluvium.net/impact-tech/api/faqs/', {
                params: program ? { program } : {},
            })
            if (res.status === 200 || res.status === 201) {
                set({ faqs: res.data.results, error: null, loading: false, hasFetched: true })
                console.log(res.data)
            }

        } catch (err) {
            if (err instanceof AxiosError) {
                set({ error: err.message || 'there is an error fetching FAQs', hasFetched: true, loading: false })
            }
        }
    }
}))