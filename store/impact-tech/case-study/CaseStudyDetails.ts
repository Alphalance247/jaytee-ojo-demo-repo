import { create } from "zustand";
import axios, { AxiosError } from "axios";
import { DocBody } from "./CaseStudyStore";
interface ProgramHighlights {
    id: string;
    filename: string,
    mimeType: string,
    size: string,
    proxyUrl: string

}
export interface CaseStudyStore {
    id: string;
    key: string;
    title: string;
    body: string | null;
    partners: string;
    year: string;
    image: string;
    program_overview: string;
    our_approach: string;
    the_challenge: string;
    impact_outcomes: string;
    // program_overview: DocBody;
    // our_approach: DocBody;
    // the_challenge: DocBody;
    // impact_outcomes: DocBody;

    program_testimonials: any[];   // update later when backend structure is known
    program_highlights: any[];

}
interface CaseStudyDetails { results: CaseStudyStore }
interface CaseStudyDetailsStore {
    caseStudyDetails: CaseStudyDetails | null;
    loading: boolean;
    error: string | null;
    fetchCaseStudyDetails: (params: string) => Promise<void>;
}
export const useCaseStudyDetailsStore = create<CaseStudyDetailsStore>((set) => ({
    caseStudyDetails: null,
    loading: false,
    error: null,
    fetchCaseStudyDetails: async (params: string) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(`https://site-api.alluvium.net/impact-tech/api/case-studies/${params}`);
            set({ caseStudyDetails: response.data, loading: false });
        } catch (err) {
            const errorMessage = err instanceof AxiosError ? err.message : "An error occurred";
            set({ error: errorMessage, loading: false });
        }
    },
}));
