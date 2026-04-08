import { create } from "zustand";
import axios, { AxiosError } from "axios";

interface ApplicationForm {
    full_name: string;
    age: string
    email: string;
    message: string;
}
interface ContactUsStore {
    formInput: ApplicationForm;
    loading: boolean;
    error: string | null;
    updateInputField: (field: keyof ApplicationForm, value: string) => void;
    submitForm: () => Promise<Boolean>;
    resetForm: () => void;
}
export const useContactUsForm = create<ContactUsStore>((set, get) => ({
    formInput: {
        full_name: "",
        age: "",
        email: "",
        message: "",
    },
    loading: false,
    error: null,

    updateInputField: (field, value) =>
        set((state) => ({
            formInput: {
                ...state.formInput,
                [field]: value,
            },
        })),

    submitForm: async () => {
        const { formInput } = get();
        set({ loading: true, error: null });
        try {
            const formData = new FormData();
            formData.append("full_name", get().formInput.full_name);
            formData.append("age", String(get().formInput.age));
            formData.append("email", get().formInput.email);
            formData.append("message", get().formInput.message);

            await axios.post("https://site-api.alluvium.net/impact-tech/api/contact/", formInput,
                { headers: { 'Content-Type': 'multipart/form-data' } }
            );

            set({ loading: false });
            return true;
        } catch (err) {
            let errorMessage = "An error occurred";

            if (err instanceof AxiosError) {
                errorMessage = err.message;
            }

            set({
                loading: false,
                error: errorMessage,
            });

            return false;
        }
    },
    resetForm: () => {
        set({
            formInput: {
                full_name: "",
                age: "",
                email: "",
                message: "",
            },
        });
    },
}));
