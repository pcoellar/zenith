import { ClientReview } from "@/app/lib/data/data.types";

export type ReviewProps = {
    review: ClientReview;
};

export type ReviewRequest = {
    category: string;
    location: string;
}