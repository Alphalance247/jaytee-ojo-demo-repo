import { create } from "zustand";
import axios, { AxiosError } from "axios";
interface Testimonial {
    id: string;
    name: string;
    testimonial: string;
    role: string;
    photo: string;
    key: string;
    quote: string
}

interface TestimonialState {
    testimonials: Testimonial[];
    loading: boolean;
    error: string | null;
    fetchTestimonials: () => Promise<void>;
}

export const useTestimonialStore = create<TestimonialState>((set) => ({
    testimonials: [],
    loading: false,
    error: null,
    fetchTestimonials: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get("https://site-api.alluvium.net/impact-tech/api/train-the-trainer-testimonials/");
            set({ testimonials: response.data.results, loading: false });
        } catch (error) {
            const err = error as AxiosError;
            set({ error: err.message, loading: false });
        }
    },
}));