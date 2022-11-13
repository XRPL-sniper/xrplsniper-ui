import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import styles from './Collection.module.css';
import useDimensions from 'react-cool-dimensions';
import ButtonGroup from '../ButtonGroup';


function TimeLineChart() {
  const { observe, width, height } = useDimensions()
  const [activeTime, setActiveTime] = useState<string | undefined>('24H');
  const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]

  console.log(width, height);
  return <div className={`${styles.panel} mt-8`}>
    <div
      className='mb-4 md:flex md:justify-between md:items-end'>
      <div className="text-center md:text-left">
        <div className="flex space-x-4 items-center justify-center md:justify-start">
          <h2 className="text-solana-pink text-2xl mb-2">SF NFT Index</h2>
          <div className="flex space-x-2 items-center">
            <span>
              <span>63.30&nbsp;SOL
                <em className="
                list-bottom
                text-gray-600
                not-italic
                text-xs
                font-normal
                dark:text-white
              ">($917)</em>
              </span>
            </span>
            <span>
              <div className="text-sm font-normal">
                <span>-</span>
              </div>
            </span>
          </div>
        </div>
        <p>Official SolanaFloor NFT Blue Chip Index.
        </p>
      </div>
      <div className="flex justify-center">
        <ButtonGroup
          activeValue={activeTime || ''}
          onChange={(p) => setActiveTime(p)}
          values={['24H', '30D', '90D', 'ALL']}
        />
      </div>
    </div>
    <div className={styles.lineChartWrapper} ref={observe}>
      <LineChart width={width} height={height} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </div>

  </div>
}

export default TimeLineChart;
