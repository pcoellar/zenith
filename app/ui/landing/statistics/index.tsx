import Skeleton from "./skeleton";
import { Suspense } from "react";
import Statistics from "./statistics";
import { StatisticRequest } from "./statistic.types";

export default function Index(props: StatisticRequest) {
  return (
    <section id="statistics"  className="statistics">
      <div className="container">
        <div className="statistics-counter"> 
            <Suspense key={props.category + props.location} fallback={<Skeleton />}>
                <Statistics category={props.category} location={props.location} />
            </Suspense>
        </div>  
      </div>    
    </section>  
  );
}
