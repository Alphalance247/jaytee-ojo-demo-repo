import { create } from "zustand";
import axios, { AxiosError } from "axios";
type programInterestedEnum = | 'Partnership ' | 'Volunteer'

interface ApplicationForm {
    full_name: string;
    email: string;
    program_interest: programInterestedEnum | "";
    school_name: string;
    message: string;
}
interface ApplicationStore {
    formInput: ApplicationForm;
    loading: boolean;
    error: string | null;
    updateInputField: (field: keyof ApplicationForm, value: string) => void;
    submitForm: () => Promise<Boolean>;
    resetForm: () => void;
}
export const useApplicationForm = create<ApplicationStore>((set, get) => ({
    formInput: {
        full_name: "",
        email: "",
        program_interest: "",
        school_name: "",
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

        set({ loading: true, error: null });

        try {
            const formInput = new FormData()
            formInput.append("full_name", get().formInput.full_name);
            formInput.append("email", get().formInput.email);
            formInput.append("program_interest", get().formInput.program_interest);
            formInput.append("school_name", get().formInput.school_name);
            formInput.append("message", get().formInput.message);
            // Add your API call here
            let res = await axios.post("https://site-api.alluvium.net/impact-tech/api/partnerships/", formInput,
                { headers: { 'Content-Type': 'multipart/form-data' } });
            set({ loading: false });
            return true;
        } catch (err) {
            const errorMessage = err instanceof AxiosError ? err.message : "An error occurred";
            set({ error: errorMessage, loading: false });
            return false;
        }
    },

    resetForm: () => {
        set({
            formInput: {
                full_name: "",
                email: "",
                program_interest: "",
                school_name: "",
                message: "",
            },
            error: null,
        });
    },
}));