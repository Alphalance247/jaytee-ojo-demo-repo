import { create } from "zustand";
import axios, { AxiosError } from "axios";
import { programInterestedEnum } from "@/types/impact-tech/how-to-apply";

interface ApplicationForm {
    full_name: string;
    age: string;
    parent_guardian_name: string;
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
        age: "",
        parent_guardian_name: "",
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
        const { formInput } = get();

        set({ loading: true, error: null });

        try {
            const formData = new FormData();
            formData.append("full_name", formInput.full_name);
            formData.append("age", String(formInput.age)); // ensure string
            formData.append("parent_guardian_name", formInput.parent_guardian_name);
            formData.append("email", formInput.email);
            formData.append("program_interest", formInput.program_interest);
            formData.append("school_name", formInput.school_name);
            formData.append("message", formInput.message);
            await axios.post("https://site-api.alluvium.net/impact-tech/api/applications/", formData, { headers: { 'Content-Type': 'multipart/form-data' } }
            );

            set({ loading: false });
            return true;
        } catch (err) {
            let errorMessage = "Something went wrong";

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
                age: "",
                parent_guardian_name: "",
                email: "",
                program_interest: "",
                school_name: "",
                message: "",
            },
        }),
}));