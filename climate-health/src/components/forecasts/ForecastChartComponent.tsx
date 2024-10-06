import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {useEffect, useState} from "react";
import Loading from "../loading/Loading";
import RainConfig from "../../config/RainConfig";


type ForecastChartComponentType={
    data : any
}

export default function ForecastChartComponent({data}:ForecastChartComponentType) {

    const [chartData, setChartData] = useState<any>(null);

    useEffect(() => {
        if(data !== null && data !== undefined){
           const d = data.map((item: any) => {
               return {
                   name: item.date.split('T')[0],
                   precipitation: item.precipitation,
                   // pv: item.rain
               }
           });
           console.log('Chart Data', d);
           setChartData(d);
       }
    },[data]);

    if(data === null || data === undefined){
        return <Loading />;
    }


    const getMinAndMax = () => {
        let min = 99999;
        let max = 0;
        if (chartData !== null) {
            chartData.forEach((item: any) => {
                if (item.precipitation < min) {
                    min = item.precipitation;
                }
                if (item.precipitation > max) {
                    max = item.precipitation;
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


    return (
        <>
            {data && (
                <>
                    <ResponsiveContainer width='100%' aspect={2 / 1}>
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
                            <XAxis name={'Precipitation'} dataKey="name"/>
                            <YAxis domain={[getMinAndMax().min - 1, getMinAndMax().max + 1]}/>
                            <Tooltip/>
                            <Legend/>
                            <Line type="monotone" dataKey="precipitation" stroke="#8884d8"/>
                            {/*<Line type="monotone" dataKey="uv" stroke="#82ca9d"/>*/}
                        </LineChart>
                    </ResponsiveContainer>

                    <div className="alert alert-primary" role="alert">
                        <h3>What does this mean?</h3>
                        <div className={'row'}>

                            {RainConfig.scale.map((item, index) => (
                                <>
                                    <div key={'explanation_' + index} className='text-center col-12 col-md-6 col-lg-3'>
                                        <h1 style={{fontSize:'50px'}}>{item.icon()}</h1>
                                        <p>From {item.min} to {item.max}</p>
                                        <h3>{item.text}</h3>
                                    </div>
                                </>
                            ))}


                        </div>
                    </div>
                </>
            )}
        </>
    );
}