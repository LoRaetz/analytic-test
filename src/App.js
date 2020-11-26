import React, { useRef, useState } from 'react';
import moment from 'moment'
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Customized, ReferenceArea
} from 'recharts';

import * as data from './data'

import './App.css'

const CustomizedAxisTick = (props) => {
    const {
        x, y, stroke, payload, index, width
    } = props

    return (
        <foreignObject x={x-35} y={y} style={{ width: 90, height: 34 }}>
            <div className={"tick-button"} style={{ width: "100%", height: "100%", display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                <g className={"customized-ticks"} onMouseEnter={() => props.setShowHighlight({ index })} onMouseLeave={() => props.setShowHighlight({ index: undefined })}>
                    <text x={0} y={0} dy={16} textAnchor="end" fill="#ccc">{moment.unix(payload.value).format("hh:mm A")}</text>
                </g>
            </div>
        </foreignObject>
    );
}


export default function App() {
    const [showHighlight, setShowHighlight] = useState({
        index: undefined,
    })
    const ChartRef = useRef()

    function formatLabel(labelProps) {
        return moment.unix(labelProps).format("hh:mm A")
    }

    function formatXAxis(tickItem) {
        return moment.unix(tickItem).format("hh:mm A")
    }

    const mergedData = []

    return (
        <div style={{ background: "#252525", display: "inline-block", borderRadius: 12, padding: "24px 18px 8px 18px", position: "relative" }}>
            <div style={{ position: "absolute", bottom: 49, left: 18, width: 800, height: 3, background: "#5E5E5E" }} />
            <BarChart
                barGap={0}
                barSize={8}
                id={"investBarChart"}
                ref={ChartRef}
                innerRef={ChartRef}
                width={800}
                height={150}
                data={mergedData.concat(data.data, data.highlightTicks)}
                legendType={"none"}
                label={{ fill: 'red', fontSize: 20 }}
                unit={"amount"}
                isAnimationActive={true}
                style={{ cursor: "grab" }}
                margin={{
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }}
                >
                <XAxis
                    dataKey={'date'}
                    orientation={"bottom"}
                    type={"number"}
                    allowDataOverflow={true}
                    padding={{ left: 20, right: 20 }}
                    axisLine={false}
                    tickLine={false}
                    allowDecimals={true}
                    tickFormatter={formatXAxis}
                    tick={<CustomizedAxisTick setShowHighlight={setShowHighlight} showHighlight={showHighlight} />}
                    domain={['dataMin','dataMax']}
                    ticks={data.ticks}
                    interval={"preserveStartEnd"}
                    isAnimationActive={true}
                    height={44}
                    width={800}
                />
                <YAxis hide />
                <CartesianGrid vertical={false} stroke={"#3E3E3E"} />
                <Tooltip active={true} allowEscapeViewBox={{ x: 2000, y: 2000 }} labelFormatter={formatLabel} />
                <Bar stackId="a" dataKey="failedInvests" fill="#DA574C"/>
                <Bar stackId="a" dataKey="successfulInvests" fill="#45A939" />
                {showHighlight.index === 0 && (
                    <ReferenceArea isFront={false} x1={data.highlightTicks[0].date} x2={data.highlightTicks[1].date} fill={'#F4F4F4'} fillOpacity={0.15} />
                )}
                {showHighlight.index === 1 && (
                    <ReferenceArea isFront={false} x1={data.highlightTicks[2].date} x2={data.highlightTicks[3].date} fill={'#F4F4F4'} fillOpacity={0.15} />
                )}
                {showHighlight.index === 2 && (
                    <ReferenceArea isFront={false} x1={data.highlightTicks[4].date} x2={data.highlightTicks[5].date} fill={'#F4F4F4'} fillOpacity={0.15} />
                )}
                {showHighlight.index === 3 && (
                    <ReferenceArea isFront={false} x1={data.highlightTicks[6].date} x2={data.highlightTicks[7].date} fill={'#F4F4F4'} fillOpacity={0.15} />
                )}
                {showHighlight.index === 4 && (
                    <ReferenceArea isFront={false} x1={data.highlightTicks[8].date} x2={data.highlightTicks[9].date} fill={'#F4F4F4'} fillOpacity={0.15} />
                )}
                {showHighlight.index === 5 && (
                    <ReferenceArea isFront={false} x1={data.highlightTicks[10].date} x2={data.highlightTicks[11].date} fill={'#F4F4F4'} fillOpacity={0.15} />
                )}
            </BarChart>
        </div>
    );
}
