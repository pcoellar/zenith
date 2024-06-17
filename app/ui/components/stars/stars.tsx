import { StarsProps } from "./stars.types";

export default function Stars(props : StarsProps) {
    // Create an array of stars based on the rate
    const stars = [];
    for (let i = 0; i < props.rate; i++) {
      stars.push(<i key={i} className="fa fa-star"></i>);
    }
  
    return <>{stars}</>;
}