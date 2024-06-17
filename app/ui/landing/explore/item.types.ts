import { Location } from "@/app/lib/data/data.types";

export type ItemProps = {
    location: Location;
};

export type ExploreRequest = {
    category: string;
    location: string;
}