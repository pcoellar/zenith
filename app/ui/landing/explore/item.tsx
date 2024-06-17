import Image from "next/image";
import { formatRating } from "../../../lib/utils";
import { ItemProps } from "./item.types";
import Link from "next/link";

export default async function Item(props: ItemProps) {
  const location = props.location;
  const getRaitingBgColor = (category: string) => {
    switch (category) {
        case 'Restaurant':
            return 'bg-theme-1';
        case 'Hotel':
            return 'bg-theme-2';
        case 'Destination':
            return 'bg-theme-3';
        case 'Real State':
            return 'bg-theme-4';
        case 'Automotion':
            return 'bg-theme-5';
    }
    return 'bg-theme-1';
  }
  return (
    <div key={location.id} className=" col-md-4 col-sm-6">
      <div className="single-explore-item">
        <div className="single-explore-img">
          <Image src={location.converImage} alt="explore image" width={358} height={261}/>
          <div className="single-explore-img-info">
            <button>best rated</button>
            <div className="single-explore-image-icon-box">
              <ul>
                <li>
                  <div className="single-explore-image-icon">
                    <i className="fa fa-arrows-alt"></i>
                  </div>
                </li>
                <li>
                  <div className="single-explore-image-icon">
                    <i className="fa fa-bookmark-o"></i>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`single-explore-txt ${getRaitingBgColor(location.category)}`}>
          <h2><Link href="#">{location.name}</Link></h2>
          <p className="explore-rating-price">
            <span className="explore-rating">{formatRating(location.stars)}</span>
            <Link href="#"> {location.ratings} ratings</Link> 
            <span className="explore-price-box">
              form&nbsp;
              <span className="explore-price">{location.minRate}$-{location.maxRate}$</span>
            </span>
              <Link href="#">{location.category}</Link>
          </p>
          <div className="explore-person">
            <div className="row">
              <div className="col-sm-2">
                <div className="explore-person-img">
                  <Link href="#">
                    <Image src={location.managerImage} alt="explore person" width={40} height={40}/>
                  </Link>
                </div>
              </div>
              <div className="col-sm-10">
                <p>
                  {location.description} 
                </p>
              </div>
            </div>
          </div>
          <div className="explore-open-close-part">
            <div className="row">
              <div className="col-sm-5">
                <button className={`close-btn${(location.stateNow === 'Open') ? ' open-btn' : ''}`}>{location.stateNow} now</button>
              </div>
              <div className="col-sm-7">
                <div className="explore-map-icon">
                  <Link href="#"><i data-feather="map-pin"></i></Link>
                  <Link href="#"><i data-feather="upload"></i></Link>
                  <Link href="#"><i data-feather="heart"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
