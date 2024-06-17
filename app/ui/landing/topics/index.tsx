import Skeleton from "./skeleton";
import { Suspense } from "react";
import Topics from "./topics";
import { TopicRequest } from "./topic.types";

export default function Index(props: TopicRequest) {
  return (
      <Suspense key={props.category + props.location} fallback={<Skeleton />}>
        <Topics category={props.category} location={props.location} />
      </Suspense>
  );
}
