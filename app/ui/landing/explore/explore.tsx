import { fetchLocations } from "../../../lib/data/data";
import Item from "./item";
import { ExploreRequest } from "./item.types";

export default async function Explore(props: ExploreRequest) {
  const locations = await fetchLocations(props.category, props.location);
  return (
    <>
    {
        locations &&
        locations.map((location) => {
            return (
              <Item key={location.id} location={location} />
            );
        })
    }
    </>
  );
}
