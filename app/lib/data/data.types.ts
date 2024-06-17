export type TopicSummary = {
    id: string;
    name: 'Restaurants' | 'Hotels' | 'Destinations' | 'Healthcaree' | 'Automotions';
    iconClass: 'flaticon-restaurant' | 'flaticon-travel' | 'flaticon-building' | 'flaticon-pills' | 'flaticon-transport';
    listingsCount: number;
};

export type Location = {
    id: string;
    name: string;
    stars: number;
    ratings: number;
    minRate: number;
    maxRate: number;
    category: 'Restaurant' | 'Hotel' | 'Destination' | 'Real State' | 'Automotion';
    stateNow: 'Open' | 'Close';
    converImage: string;
    managerImage: string;
    description: string;
};
  
export type ClientReview = {
    id: string;
    name: string;
    city: string;
    country: string;
    stars: number;
    comment: string;
    clientPicture: string;
};
  
export type Statistic = {
    indicator: 'Listings' | 'Listing Categories' | 'Visitors' | 'Happy Clients';
    count: number;
};

export type Blog = {
    id: string;
    title: string;
    author: string;
    createdAt: Date;
    text: string;
    coverImage: string;
};
