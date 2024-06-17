import { Blog } from "@/app/lib/data/data.types";

export type BlogProps = {
    blog: Blog;
};

export type BlogRequest = {
    category: string;
    location: string;
}