import { create } from "zustand";
import axios, { AxiosError } from "axios";
export type programInterestedEnum = | 'In-person volunteering ' | 'Virtual/Remote volunteering' | 'Hybrid(both in-person and remote)' | 'Flexible/Open to any'
export type role_interested_in = | 'Mentor/Instructor' | 'Curriculum Contributor' | 'Program Facilitator' | 'Community Ambassador'
interface ApplicationForm {
    full_name: string;
    location: string;
    skills_experience: string;
    email: string;
    preferred_format: programInterestedEnum | "";
    role_interested_in: role_interested_in | "";
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
        location: "",
        skills_experience: "",
        email: "",
        preferred_format: "",
        role_interested_in: "",
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
            formData.append("location", String(formInput.location)); // ensure string
            formData.append("email", formInput.email);
            formData.append("preferred_format", formInput.preferred_format);
            formData.append("role_interested_in", formInput.role_interested_in);
            formData.append("message", formInput.message);
            await axios.post("https://site-api.alluvium.net/impact-tech/api/volunteers/", formData, { headers: { 'Content-Type': 'multipart/form-data' } }
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
                location: "",
                skills_experience: "",
                email: "",
                role_interested_in: "",
                preferred_format: "",
                message: "",
            },
            loading: false,
            error: null,
        }),
}));