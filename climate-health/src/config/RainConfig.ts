const RainConfig = {
    scale:[
        {
            min: 0.1,
            max: 2.5,
            state: 'weak',
            text: 'Light Rain'
        },
        {
            min: 2.6,
            max: 7.6,
            state: 'moderate',
            text: 'Moderate Rain'
        },
        {
            min: 7.7,
            max: 50,
            state: 'heavy',
            text: 'Heavy Rain'
        }
    ]
}

export default RainConfig;