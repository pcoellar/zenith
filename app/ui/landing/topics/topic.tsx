import Link from "next/link";
import { TopicProps } from "./topic.types";

export default function Topic(props: TopicProps){
    const topicSummary = props.topicSummary;
    return (
        <li key={topicSummary.id}>
            <div className="single-list-topics-content">
                <div className="single-list-topics-icon">
                    <i className={topicSummary.iconClass}></i>
                </div>
                <h2>
                    <Link href="#">{topicSummary.name}</Link>
                </h2>
                <p>{topicSummary.listingsCount} listings</p>
            </div>
        </li>
    );
}