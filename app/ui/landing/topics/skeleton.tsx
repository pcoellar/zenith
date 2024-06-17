function ItemSkeleton(){
    return (
        <div className="border-2 w-60 h-60 p-6 m-11 rounded-sm flex flex-col bg-white justify-center">
            <center>
                <div className="loader h-3 w-20 transform -translate-y-5"></div>
                <br />
                <div className="w-12 h-10 bg-gray-100"></div>
                <div className="w-22 h-4 bg-gray-100 mt-4"></div>
                <div className="w-20 h-4 bg-gray-100 mt-4"></div>
            </center>
        </div>
    );
}

export default function Skeleton(){
    const numberOfCards = 5;
    return (
        <div className="flex flex-row justify-center w-full relative z-10 transform -translate-y-40 ">
        {
            Array.from({ length: numberOfCards }).map((_, index) => (
                <ItemSkeleton key={index} />
            ))
        }
        </div>
    );
}
