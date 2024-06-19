function ItemSkeleton(){
    return (
        <div className="border-2 border-gray-100 p-8 m-8 mt-20 rounded-lg flex flex-col" style={{height:"265px", width:"407px"}}>
            <center>
                <div className="loader h-3 w-20 transform -translate-y-5"></div>
            </center>
            <br />
            <div className="flex mt-4">
                <div className="w-20 h-20 bg-gray-100 rounded-full"></div>
                <div className="flex flex-col">
                    <div className="w-60 h-6 bg-gray-100 ml-4"></div>
                    <div className="w-20 h-6 bg-gray-100 ml-4 mt-2"></div>
                    <div className="w-32 h-6 bg-gray-100 ml-4 mt-2"></div>
                </div>
            </div>
            <div className="w-50 h-40 bg-gray-100 mt-12"></div>
        </div>
    );
}

export default function Skeleton(){
    const numberOfCards = 4;
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
