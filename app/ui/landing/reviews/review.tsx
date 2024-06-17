import Image from "next/image";
import Stars from "../../components/stars/stars";
import { ReviewProps } from "./review.types";

export default function Review(props: ReviewProps) {
  const review = props.review;
  return (
    <div key={review.id} className="single-testimonial-box">
        <div className="testimonial-description">
            <div className="testimonial-info">
            <div className="testimonial-img">
                <Image src={review.clientPicture} alt="clients" width={50} height={50} />
            </div>
            <div className="testimonial-person">
                <h2>{review.name}</h2>
                <h4>{review.city}, {review.country}</h4>
                <div className="testimonial-person-star">
                <Stars rate={review.stars}/>
                </div>
            </div>
            </div>
            <div className="testimonial-comment">
            <p>
                {review.comment}
            </p>
            </div>
        </div>
    </div>
  );
}

