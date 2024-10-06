import {WiDayHail} from "react-icons/wi";
import {useEffect, useState} from "react";
import APIService from "../../services/API.service";
import useTimePeriodStore from "../../store/TimePeriod.store";
import TimePeriodModel from "../../model/TimePeriod.model";


type MapControlPanelProps = {
    lat: number;
    lng: number;
    actionEmitter: Function;
}

export default function MapControlPanel({lat, lng, actionEmitter}: MapControlPanelProps) {


    const [options, setOptions] = useState<any | null>(null);
    const [selectedOption, setSelectedOption] = useState<number>(3);
    const [advanceOptions, setAdvanceOptions] = useState<boolean>(false);

    const setTimePeriod = useTimePeriodStore((state: any) => state.setTimePeriod);




    const optionChange = (event: any) => {
        console.log('Option Change', event.target.value);
        setSelectedOption(event.target.value);
        setTimePeriod(options[event.target.value]);
    }

    useEffect(() => {
        APIService.getPeriods().then((response) => {
            // console.log('Options Response');
            // console.log(response.data);
            setOptions(response.data);
            // console.log('Valid time period', response.data[3]);
            setTimePeriod(response.data[3] as TimePeriodModel);
        }).catch((error: any) => {
            console.error('Error reading the current information');
        });
    }, []);

    return (
        <div className="control-panel">
            {/*<h3 className={'text-center'}>Climate Health</h3>*/}

            <div className={'cord'}>



                {/*<div className="form-group">*/}
                {/*<label>Latitude:</label>*/}
                {/*    <input className={'form-control'} type={'text'} id={'lat'} placeholder={'Latitude'} readOnly*/}
                {/*           value={lat.toString()}/>*/}
                {/*</div>*/}
                {/*<div className="form-group">*/}
                {/*    <label>Longitude:</label>*/}
                {/*    <input className={'form-control'} type={'text'} id={'lng'} placeholder={'Longitude'} readOnly*/}
                {/*           value={lng.toString()}/>*/}
                {/*</div>*/}

                <div className={'form-group mb-2 text-center'}>
                    <button disabled={(lat === 0 || lng === 0)} onClick={() => {
                        actionEmitter('get')
                    }} className={'btn btn-success'}><WiDayHail/> Get Climate Data
                    </button>
                </div>

                <div className={'text-center mb-2'}>
                    <button className={'btn btn-outline-primary btn-sm'} onClick={()=>{ console.log('Change advance options'); setAdvanceOptions(!advanceOptions) }}>

                        { (advanceOptions) ? 'Hide' : 'Show' } Advance Options

                    </button>
                </div>

                {advanceOptions ? (
                    <>
                    {(options !== null) ? (
                            <div className={'form-group'}>
                                <input type="range" defaultValue={selectedOption} onChange={optionChange} className="form-range" min="0" max={options.length-1} id="customRange"/>
                                <h4 className="form-label text-center">{options[selectedOption].description}</h4>
                            </div>
                        ) : null}
                    </>
                ): null}



            </div>

        </div>
    );
}