import { create } from "zustand";
import axios, { AxiosError } from "axios";
type programInterestedEnum = | 'Train-the Trainer' | 'Coding For Kids' | 'Teens Coding' | 'School Coding Club'

interface ApplicationForm {
    full_name: string;
    role: string;
    email: string;
    program_interest: programInterestedEnum | "";
    school_organization_name: string;
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
        role: "",
        email: "",
        program_interest: "",
        school_organization_name: "",
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
            formData.append("full_name", formInput.full_name);
            formData.append("role", String(formInput.role)); // ensure string
            formData.append("email", formInput.email);
            formData.append("program_interest", formInput.program_interest);
            formData.append("school_organization_name", formInput.school_organization_name);
            formData.append("message", formInput.message);
            await axios.post("https://site-api.alluvium.net/impact-tech/api/train-the-trainer/",
                formData, { headers: { 'Content-Type': 'multipart/form-data' } }
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
    resetForm: () =>
        set({
            formInput: {
                full_name: "",
                role: "",
                email: "",
                program_interest: "",
                school_organization_name: "",
                message: "",
            },
            loading: false,
            error: null,
        }),
}));