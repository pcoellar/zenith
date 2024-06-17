import { fetchStatistics } from "../../../lib/data/data";
import Statistic from "./statistic";
import { StatisticRequest } from "./statistic.types";

export default async function Statistics(props: StatisticRequest) {
    const statistics = await fetchStatistics(props.category, props.location);
    return (
      <>
      {
          statistics && 
          statistics.map((statistic) => {
              return (
                <Statistic key={statistic.indicator} statistic={statistic} />
              );
          })
      }
      </>
    );
}
