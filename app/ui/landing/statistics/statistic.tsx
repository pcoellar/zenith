import { formatCountK } from "../../../lib/utils";
import { StatisticProps } from "./statistic.types";

export default async function Statistic(props: StatisticProps) {
    const statistic = props.statistic;
    return (
        <div key={statistic.indicator} className="col-md-3 col-sm-6">
        <div className="single-ststistics-box">
            <div className="statistics-content">
            <div className="counter">{formatCountK(statistic.count)} </div> <span>K+</span>
            </div>
            <h3>{statistic.indicator}</h3>
        </div>
        </div>
    );
}
