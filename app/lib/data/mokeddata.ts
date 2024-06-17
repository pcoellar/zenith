import { Location, ClientReview, Blog, TopicSummary, Statistic } from './data.types';

export const topicsSummary: TopicSummary[] = [
    {
        id: 'fab4f20e-6824-4d41-a2a2-f112cb09e57b',
        name: 'Restaurants',
        iconClass: 'flaticon-restaurant',
        listingsCount: 150
    },
    {
        id: '3f75a856-85c9-4cfb-8115-4702495cf951',
        name: 'Hotels',
        iconClass: 'flaticon-restaurant',
        listingsCount: 214
    },
    {
        id: '38a94765-2843-4b69-b8f9-297208db9bb2',
        name: 'Destinations',
        iconClass: 'flaticon-building',
        listingsCount: 185
    },
    {
        id: 'fab4f20e-6824-4d41-a2a2-f112cb09e571',
        name: 'Healthcaree',
        iconClass: 'flaticon-pills',
        listingsCount: 200
    },
    {
        id: 'fab4f20e-6824-4d41-a2a2-f112cb09e572',
        name: 'Automotions',
        iconClass: 'flaticon-transport',
        listingsCount: 120
    }
]

export const locations: Location[] = [
    {
        id: 'fab4f20e-6824-4d41-a2a2-f112cb09e57b',
        name: 'Tommy Helfinger Bar',
        stars: 5,
        ratings: 10,
        minRate: 5,
        maxRate: 300,
        category: 'Restaurant',
        stateNow: 'Close',
        converImage: '/images/explore/e1.jpg',
        managerImage : '/images/explore/person.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua...' 
    },
    {
        id: 'ee37571a-ba4c-4bd3-a528-38cbba7755c9',
        name: 'Swim And Dine Resort',
        stars: 4.5,
        ratings: 8,
        minRate: 50,
        maxRate: 500,
        category: 'Hotel',
        stateNow: 'Open',
        converImage: '/images/explore/e2.jpg',   
        managerImage : '/images/explore/person.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua...' 
    },
    {
        id: '38a94765-2843-4b69-b8f9-297208db9bb2',
        name: 'Europe Tour',
        stars: 5,
        ratings: 15,
        minRate: 5,
        maxRate: 10,
        category: 'Destination',
        stateNow: 'Close',
        converImage: '/images/explore/e3.jpg',
        managerImage : '/images/explore/person.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua...' 
    },
    {
        id: '3f75a856-85c9-4cfb-8115-4702495cf951',
        name: 'Banglow With Swiming Pool',
        stars: 5,
        ratings: 10,
        minRate: 10,
        maxRate: 15,
        category: 'Real State',
        stateNow: 'Close',
        converImage: '/images/explore/e4.jpg',
        managerImage : '/images/explore/person.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua...'   
    },
    {
        id: '9a88093d-1d32-4ed9-a442-3ad65bdc4805',
        name: 'Vintage Car Expo',
        stars: 4.2,
        ratings: 8,
        minRate: 500,
        maxRate: 1200,
        category: 'Automotion',
        stateNow: 'Open',
        converImage: '/images/explore/e5.jpg',
        managerImage : '/images/explore/person.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua...' 
    },
    {
        id: 'f211f2af-85b1-4215-88ac-06634c9be9af',
        name: 'Thailand Tour',
        stars: 5,
        ratings: 5,
        minRate: 5,
        maxRate: 10,
        category: 'Destination',
        stateNow: 'Close',
        converImage: '/images/explore/e6.jpg',
        managerImage : '/images/explore/person.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua...'
    }
]

export const clientReviews: ClientReview[] = [
    {
        id: 'fab4f20e-6824-4d41-a2a2-f112cb09e57b',
        name: 'Albert Lan',
        stars: 5,
        city: 'London',
        country: 'UK',
        comment: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.',
        clientPicture: '/images/clients/c3.png'    
    },
    {
        id: '3f75a856-85c9-4cfb-8115-4702495cf951',
        name: 'Tom Leakar',
        stars: 1,
        city: 'Mexico',
        country: 'MX',
        comment: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.',
        clientPicture: '/images/clients/c3.png'    
    },
    {
        id: '38a94765-2843-4b69-b8f9-297208db9bb2',
        name: 'John Smith',
        stars: 3,
        city: 'Valencia',
        country: 'ES',
        comment: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.',
        clientPicture: '/images/clients/c3.png'    
    },
    {
        id: 'ee37571a-ba4c-4bd3-a528-38cbba7755c9',
        name: 'Pedro Coellar',
        stars: 1.5,
        city: 'Cuenca',
        country: 'EC',
        comment: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.',
        clientPicture: '/images/clients/c3.png'    
    },
    {
        id: 'fab4f20e-6824-4d41-a2a2-f112cb09e573',
        name: 'Albert Lan',
        stars: 5,
        city: 'London',
        country: 'UK',
        comment: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.',
        clientPicture: '/images/clients/c3.png'    
    },
    {
        id: '3f75a856-85c9-4cfb-8115-4702495cf952',
        name: 'Tom Leakar',
        stars: 1,
        city: 'Mexico',
        country: 'MX',
        comment: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.',
        clientPicture: '/images/clients/c3.png'    
    },
    {
        id: '38a94765-2843-4b69-b8f9-297208db9bb1',
        name: 'John Smith',
        stars: 3,
        city: 'Valencia',
        country: 'ES',
        comment: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.',
        clientPicture: '/images/clients/c3.png'    
    },
    {
        id: 'ee37571a-ba4c-4bd3-a528-38cbba7755c1',
        name: 'Pedro Coellar',
        stars: 1.5,
        city: 'Cuenca',
        country: 'EC',
        comment: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.',
        clientPicture: '/images/clients/c3.png'    
    }
]

export const statistics: Statistic[] = [
    {
        indicator: 'Listings',
        count: 90000
    },
    {
        indicator: 'Listing Categories',
        count: 40000
    },
    {
        indicator: 'Visitors',
        count: 65000
    },
    {
        indicator: 'Happy Clients',
        count: 50000
    },
]

export const blogs: Blog[] = [
    {
        id: 'fab4f20e-6824-4d41-a2a2-f112cb09e57b',
        title: 'How to find your Desired Place more quickly',
        author: 'ADMIN',
        createdAt: new Date(2018,3,1,0,0,0,0),
        text: 'Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.',
        coverImage: "/images/blog/b1.jpg"
    },
    {
        id: '38a94765-2843-4b69-b8f9-297208db9bb2',
        title: 'How to find your Desired Place more quickly',
        author: 'Jhon',
        createdAt: new Date(2018,2,1,0,0,0,0),
        text: 'Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.',
        coverImage: "/images/blog/b2.jpg"
    },
    {
        id: 'ee37571a-ba4c-4bd3-a528-38cbba7755c9',
        title: 'How to find your Desired Place more quickly',
        author: 'Pedro',
        createdAt: new Date(2017,1,1,0,0,0,0),
        text: 'Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.',
        coverImage: "/images/blog/b3.jpg"
    }
]