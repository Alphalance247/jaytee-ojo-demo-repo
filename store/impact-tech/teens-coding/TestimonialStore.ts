import { create } from "zustand";
import axios, { AxiosError } from "axios";
interface Testimonial {
    id: string;
    name: string;
    key: string
    testimonial: string;
    photo: string;
    role: string;
    rating: number | null;
}

interface TestimonialStore {
    testimonials: Testimonial[];
    loading: boolean;
    error: string | null;
    fetchTestimonials: () => Promise<void>;
}
export const useTestimonialStore = create<TestimonialStore>((set) => ({
    testimonials: [],
    loading: false,
    error: null,
    fetchTestimonials: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get("https://site-api.alluvium.net/impact-tech/api/program-testimonials/");
            set({ testimonials: response.data.results, loading: false });
        } catch (err) {
            const errorMessage = err instanceof AxiosError ? err.message : "An error occurred";
            set({ error: errorMessage, loading: false });
        }
    },
}));