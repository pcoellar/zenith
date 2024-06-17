import Skeleton from "./skeleton";
import Blogs from "./blogs";    
import { Suspense } from "react";
import { BlogRequest } from "./blog.types";

export default function Index(props: BlogRequest) {
  return (
    <section id="blog" className="blog" >
      <div className="container">
        <div className="section-header">
          <h2>news and articles</h2>
          <p>Always upto date with our latest News and Articles </p>
        </div>
        <div className="blog-content">
            <div className="row">
                <Suspense key={props.category + props.location} fallback={<Skeleton />}>
                    <Blogs category={props.category} location={props.location} />
                </Suspense>
            </div>
        </div>
      </div>          
    </section>
);
}
