import CropModel from "../../model/Crop.model";
import {FaThermometerThreeQuarters, FaRegCalendarAlt,FaCloudMoonRain } from "react-icons/fa";
import { BsGrid3X3 } from "react-icons/bs";

type CropsRecommendationsComponentProps = {
    crops: CropModel[];
}


export function SingleCrop({crop}: { crop: CropModel }) {
    return (
        <div className='col-12 col-md-3 d-flex align-items-stretch mb-2'>
            <div className="card align-items-stretch flex-fill">
                <img src={process.env.PUBLIC_URL + '/img/crops.jpg'} className="card-img-top" alt="Crops"/>
                <div className="card-body align-items-stretch">
                    <h5 className="card-title">{crop.name}</h5>
                    <div className="card-subtitle"><i>{crop.type}</i></div>
                    <p className="card-text">
                        {crop.characteristics.additional_recommendation}
                    </p>
                    <p>
                        <FaThermometerThreeQuarters/> {crop.characteristics.optimal_temperature}
                    </p>
                    <p>
                        <FaRegCalendarAlt/> {crop.characteristics.planting_season}
                    </p>
                    <p>
                        <BsGrid3X3/> {crop.characteristics.plant_spacing}
                    </p>
                    <p>
                        <FaCloudMoonRain/> {crop.characteristics.moisture_tolerance}
                    </p>
                    {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                </div>
            </div>
        </div>
    );
}


export default function CropsRecommendationsComponent({crops}: CropsRecommendationsComponentProps) {


    console.log('Crops', crops);

    return (
        <div className='row align-items-stretch'>

            {crops.map((crop: CropModel, index: number) => (
                <SingleCrop crop={crop} key={'crop_' + index.toString()}/>
            ))}
        </div>
    );
}