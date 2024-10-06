import { FiCloudDrizzle, FiCloudRain,FiCloudLightning, FiSun } from "react-icons/fi";

const RainConfig = {
    scale:[
        {
            min: 0.0,
            max: 0,
            state: 'clear',
            text: 'Clear',
            icon: ()=>{ return (<FiSun />)}
        },
        {
            min: 0.1,
            max: 2.5,
            state: 'weak',
            text: 'Light Rain',
            icon: ()=>{ return (<FiCloudDrizzle/>)}
        },
        {
            min: 2.6,
            max: 7.6,
            state: 'moderate',
            text: 'Moderate Rain',
            icon: ()=>{ return (<FiCloudRain/>)}
        },
        {
            min: 7.7,
            max: 50,
            state: 'heavy',
            text: 'Heavy Rain',
            icon: ()=>{ return (<FiCloudLightning/>)}
        }
    ]
}

export default RainConfig;