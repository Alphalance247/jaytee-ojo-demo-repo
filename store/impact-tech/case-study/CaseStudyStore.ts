import { create } from "zustand";
import axios, { AxiosError } from "axios";

export interface CaseStudiesResponse {
    results: CaseStudy[];
}

export interface CaseStudy {
    id: string;
    key: string;
    title: string;
    body: DocBody;
    attachments: Attachment[];
    detailUrl: string;
    partners: string;
    year: string;
    program_overview: DocBody;
    our_approach: DocBody;
    the_challenge: DocBody;
    impact_outcomes: DocBody;
}

export interface DocBody {
    type: string;
    version: number;
    content: ContentBlock[];
}

export interface ContentBlock {
    type: string;
    content?: TextContent[];
}

export interface TextContent {
    type: string;
    text: string;
}

export interface Attachment {
    id: string;
    filename: string;
    mimeType: string;
    size: number;
    proxyUrl: string;
}
interface CaseStudyStore {
    caseStudies: CaseStudy[];
    loading: boolean;
    error: string | null;
    fetchCaseStudies: () => Promise<void>;
}


export const useCaseStudyStore = create<CaseStudyStore>((set) => ({
    caseStudies: [],
    loading: false,
    error: null,
    fetchCaseStudies: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get("https://site-api.alluvium.net/impact-tech/api/case-studies/");
            set({ caseStudies: response.data.results, loading: false });
        } catch (err) {
            const errorMessage = err instanceof AxiosError ? err.message : "An error occurred";
            set({ error: errorMessage, loading: false });
        }
    },
}));