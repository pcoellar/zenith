function ItemSkeleton(){
    return (
        <div className="border-2 border-gray-100 w-96 h-96 p-0 m-8 mt-20 flex flex-col">
            <center>
                <div className="loader h-3 w-20 mt-2 transform -translate-y-5"></div>
            </center>
            <div className="h-2/4 w-full bg-gray-100 mt-2"></div>
            <div className="p-5">
                <div className="w-full h-6 bg-gray-100"></div>
                <div className="flex flex-row w-full mt-4">
                    <div className="w-4/12 h-6 bg-gray-100"></div>
                    <div className="w-4/12 h-6 bg-gray-100 ml-10"></div>
                </div>
                <div className="w-full h-20 bg-gray-100 mt-4"></div>
            </div>
        </div>
    );
}

export default function Skeleton(){
    const numberOfCards = 3;
    return (
        <div className="flex flex-row justify-center w-full">
        {
            Array.from({ length: numberOfCards }).map((_, index) => (
                <ItemSkeleton key={index} />
            ))
        }
        </div>
    );
}
