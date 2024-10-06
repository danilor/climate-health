import MapComponent from "../components/MapComponent";
import HeaderNav from "../components/HeaderNav";
import ActualRain from "../components/ActualRain";
import FooterComponent from "../components/FooterComponent";

export default function Challenge() {
    return (

        <>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-12 align-items-stretch'}>
                        <div className="card">
                            <img
                                src="https://images.unsplash.com/photo-1486754735734-325b5831c3ad?q=80&w=1200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h3 className="card-title">About the challenge</h3>
                                <p className="card-text">Farmers face a deluge of water-related challenges due to
                                    unpredictable weather, pests, and diseases. These factors can significantly impact
                                    crop health, farmers’ profits, and food security. Depending upon the geography, many
                                    farmers may face droughts or floods—sometimes both of these extreme events occur
                                    within the same season! Your challenge is to design a tool that empowers farmers to
                                    easily explore, analyze, and utilize NASA datasets to address these water-related
                                    concerns and improve their farming practices.</p>

                                <p>
                                    Innovative solutions that empower farmers to leverage data-driven insights from
                                    trusted resources—including NASA Earth data—are needed to tackle challenges related
                                    specifically to water. Farming and agronomy are already full-time jobs; a means for
                                    the agricultural community to take advantage of the free Earth observation data NASA
                                    offers without needing to become data scientists could reap tremendous benefits.
                                </p>

                                <p>
                                    The current landscape reveals a growing interest in applying satellite data and
                                    advanced technologies to address agricultural challenges; however, it can be
                                    challenging to translate complex data into actionable information farmers can use.
                                    Traditional farming practices often rely on experience and intuition, which may not
                                    be sufficient to mitigate increasingly complex and unpredictable environmental
                                    conditions. The lack of access to timely and relevant data exacerbates these
                                    challenges, hindering the ability of farmers to make informed decisions and adapt
                                    quickly to changing circumstances. Past efforts to integrate large authoritative
                                    datasets for these purposes have often struggled due to lack of a “farmer-centric”
                                    design, limited stakeholder engagement, and inadequate scalability of solutions.
                                </p>

                                <p>
                                    It is vital to keep these pressures and vulnerabilities in mind when considering
                                    issues such as global food security, water availability, and the resilience of
                                    agricultural systems in the face of climate change and other environmental
                                    stressors. A tool that bridges the gap between NASA's wealth of Earth Observation
                                    (EO) data and the practical needs of agricultural communities would be invaluable to
                                    foster resilience, sustainability, and community empowerment in the face of ongoing
                                    challenges.
                                </p>

                                <h3 className="card-title">Objectives</h3>

                                <p>
                                    Your challenge is to design a tool that connects the agricultural community with
                                    NASA’s satellite and geospatial datasets in ways that increase data access,
                                    integration, reporting, and/or advising about a water-related environmental topic of
                                    concern to farmers. By integrating NASA datasets and data analyses in your tool’s
                                    design, you can create new solutions and prototypes that support farmers by
                                    providing improved prediction capacity, risk management, and/or decision-making
                                    processes.
                                </p>

                                <p>
                                    Your tool could embody the power of agricultural technology, empowering farmers with
                                    real-time data and expert guidance relating to changes in water resources. With this
                                    knowledge in hand, farmers could optimize production, manage resources efficiently,
                                    and ultimately make smarter decisions about crops and livestock.
                                </p>

                                <p>
                                    Whatever type of tool you design, don’t forget your target users! How can you make
                                    your tool relevant and easy to use for the agricultural community? For example,
                                    farmers will likely want to determine the characteristics of water resources for
                                    selected spatial and temporal ranges. They will want to understand how the
                                    information relates to their specific situation (e.g., locale, size, and type of
                                    farm, etc.). Can you develop a tool to explain the data in practical terms and
                                    visualize the information in a useful way?
                                </p>

                                <p>
                                    Technology has the power to revolutionize farming. Imagine a super-powered tool that
                                    helps farmers unlock the dynamics of the hydrologic cycle to help them better manage
                                    their land. That's exactly what we're aiming for with this challenge! What are your
                                    ideas for connecting farmers to Earth observation data and information in innovative
                                    ways? Share your thoughts and ideate a tool that truly empowers the future of
                                    farming!
                                </p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>

    );
}