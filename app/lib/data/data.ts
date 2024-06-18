import { Location, ClientReview, Blog, TopicSummary, Statistic } from './data.types';
import { locations, blogs, clientReviews, topicsSummary, statistics } from './mokeddata';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchTopicsSummary(category: string, location: string) {
    noStore();
    const data: TopicSummary[] = await new Promise<TopicSummary[]>(resolve => {
        setTimeout(() => {
            resolve(topicsSummary);
        }, 1500);
    });
    return data;
}

export async function fetchLocations(category: string, location: string) {
    noStore();
    const data: Location[] = await new Promise<Location[]>(resolve => {
        setTimeout(() => {
            resolve(locations);
        }, 800);
    });
    return data;
}

export async function fetchClientReviews(category: string, location: string) {
    const data: ClientReview[] = await new Promise<ClientReview[]>(resolve => {
        setTimeout(() => {
            resolve(clientReviews);
        }, 500);
    });
    return data;
}

export async function fetchStatistics(category: string, location: string) {
    noStore();
    const data: Statistic[] = await new Promise<Statistic[]>(resolve => {
        setTimeout(() => {
            resolve(statistics);
        }, 1500);
    });
    return data;
}

export async function fetchBlogs(category: string, location: string) {
    noStore();
    const data: Blog[] = await new Promise<Blog[]>(resolve => {
        setTimeout(() => {
            resolve(blogs);
        }, 800);
    });
    return data;
}
