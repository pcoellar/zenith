'use client';

import { useState, useEffect } from "react";
import { fetchClientReviews } from "../../../lib/data/data";
import { ClientReview } from "../../../lib/data/data.types";
import Review from "./review";
import { ReviewRequest } from "./review.types";
import Slider from "react-slick";
import Skeleton from "./skeleton";

export default function Reviews(props: ReviewRequest) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [reviews, setReviews] = useState<ClientReview[]|undefined>(undefined);

  useEffect(() => {
    console.log("entra1");
    setIsLoading(true);
    fetchClientReviews(props.category, props.location).then((res) => {
      console.log("res: ", res);
      setReviews(res);
      setIsLoading(false);
    })
  },[props])

  let settingsSlider = {
    infinite: true,
    centerMode: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  
  return (
    <>
    <div className="reviews-content">
        <div className="testimonial-carousel flex flex-col">
        {
          isLoading ? 
          <Skeleton />
          :
          <Slider {...settingsSlider}>
          {
            reviews && 
              reviews.map((review) => {
                return (
                    <Review key={review.id} review={review}/>
                );
              })
          }
          </Slider>
        }
        </div>
    </div>
    </>
  );
}

