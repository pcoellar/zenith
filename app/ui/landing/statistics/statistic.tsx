'use client'

import { formatCountK } from "../../../lib/utils";
import { StatisticProps } from "./statistic.types";
import { useCountUp } from 'react-countup';
import { useRef, useEffect, useState } from "react";
import useIsInView from "../../hooks/useIsInView/useIsInView";

export default function Statistic(props: StatisticProps) {
    const countUpRef = useRef(null);
    const isInView = useIsInView(countUpRef);
    const [firstTimeVisible, setFirsTimeVisible] = useState(false);
    const { start, reset } = useCountUp({
        ref: countUpRef,
        end: formatCountK(props.statistic.count),
      });

    useEffect(() => {
        if (isInView) {
            setFirsTimeVisible(true);
        }
    }, [isInView]);

    useEffect(() => {
        if(firstTimeVisible)
        {
            reset();
            start();
        }
    },[firstTimeVisible]);

    return (
        <div key={props.statistic.indicator} className="col-md-3 col-sm-6">
        <div className="single-ststistics-box">
            <div className="statistics-content">
            <div className="counter">
                <div ref={countUpRef} />
            </div> 
            <span>K+</span>
            </div>
            <h3>{props.statistic.indicator}</h3>
        </div>
        </div>
    );
}
