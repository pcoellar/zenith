import { Statistic } from "@/app/lib/data/data.types";

export type StatisticProps = {
    statistic: Statistic;
};

export type StatisticRequest = {
    category: string;
    location: string;
}