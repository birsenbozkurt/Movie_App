import react from "react";

const Card = () => {
	return (
		<>
			<div className="movie">
				<img src="images/poster.jpg" className="poster" alt="" />
				<div className="movie-details">
					<div className="box">
						<h4 className="title">Movie Title</h4>
						<p className="rating">9.7</p>
					</div>
					<div className="overview">
						<h1>overview</h1>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, suscipit ab. Quisquam, reprehenderit sequi velit
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
