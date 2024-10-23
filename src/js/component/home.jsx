import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Trafficlight from "./Trafficlight";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
			<div className="row">
				<div className="col-32">
					<Trafficlight/>
				</div>
			</div>
		</div>
	);
};
export default Home;
