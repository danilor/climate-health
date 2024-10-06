import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {useEffect, useState} from "react";
import Loading from "../loading/Loading";


const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

type ForecastChartComponentType={
    data : any
}

export default function ForecastTemperatureChartComponent({data}:ForecastChartComponentType) {

    const [chartData, setChartData] = useState<any>(null);

    useEffect(() => {
       if(data !== null && data !== undefined){
           const d = data.map((item: any) => {
               return {
                   name: item.date.split('T')[0],
                   temperature: item.temperature,
                   // pv: item.rain
               }
           });
           console.log('Temperature Chart Data', d);
           setChartData(d);
       }
    },[data]);

    const getMinAndMax = () =>{
        let min = 9999;
        let max = 0;
        if(chartData !== null){
            chartData.forEach((item: any) => {
                if(item.temperature < min){
                    min = item.temperature;
                }
                if(item.temperature > max){
                    max = item.temperature;
                }
            });
        }

        const minAndMax = {
            min: min,
            max: max
        };
        console.log('Min and Max', minAndMax);
        return minAndMax;
    }

    if(data === null || data === undefined){
        return <Loading />;
    }


    return (
        <>
            {data && (
                <ResponsiveContainer width='100%' aspect={4.0 / 3.0}>
                    <LineChart
                        width={500}
                        height={550}
                        data={chartData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis domain={[getMinAndMax().min - 1, getMinAndMax().max  +1]}/>
                        <Tooltip/>
                        <Legend/>
                        <Line type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{r: 8}}/>
                        {/*<Line type="monotone" dataKey="uv" stroke="#82ca9d"/>*/}
                    </LineChart>
                </ResponsiveContainer>
            )}
        </>
    );
}