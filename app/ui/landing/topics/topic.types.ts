import { TopicSummary } from "@/app/lib/data/data.types";

export type TopicProps = {
    topicSummary: TopicSummary;
};

export type TopicRequest = {
    category: string;
    location: string;
}