import Skeleton from "./skeleton";
import Reviews from "./reviews";
import { Suspense } from "react";
import { ReviewRequest } from "./review.types";

export default function Index(props: ReviewRequest) {
  return (
		<section id="reviews" className="reviews">
			<div className="section-header">
				<h2>clients reviews</h2>
				<p>What our client say about us</p>
			</div>
      <Reviews category={props.category} location={props.location} />
    </section>
);
}
