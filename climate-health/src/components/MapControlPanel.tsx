
type MapControlPanelProps = {
    lat: number;
    lng: number;
    actionEmitter: Function;
}

export default function MapControlPanel({ lat, lng, actionEmitter }: MapControlPanelProps) {
    return (
        <div className="control-panel">
            <h3 className={'text-center'}>Climate Health</h3>

            <div className={'cord'}>
                <div className="form-group">
                    <label>Latitude:</label>
                    <input className={'form-control'} type={'text'} id={'lat'} placeholder={'Latitude'} readOnly
                           value={lat.toString()}/>
                </div>
                <div className="form-group">
                    <label>Longitude:</label>
                    <input className={'form-control'} type={'text'} id={'lng'} placeholder={'Longitude'} readOnly
                           value={lng.toString()}/>
                </div>

                <div className={'form-group mt-3 text-center'}>
                    <button onClick={()=>{actionEmitter('get')}} className={'btn btn-primary'}>Get Climate Data</button>
                </div>




            </div>

        </div>
    );
}