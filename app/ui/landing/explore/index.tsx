import Skeleton from "./skeleton";
import { Suspense } from "react";
import Explore from "./explore";
import { ExploreRequest } from "./item.types";

export default function Index(props: ExploreRequest) {
  return (
    <section id="explore" className="explore">
    <div className="container">
      <div className="section-header">
        <h2>explore</h2>
        <p>Explore New place, food, culture around the world and many more</p>
      </div>
      <div className="explore-content">
        <div className="row">
          <Suspense key={props.category + props.location} fallback={<Skeleton />}>
            <Explore category={props.category} location={props.location}/>
          </Suspense>
        </div>
      </div>
    </div>
    </section>
  );
}
