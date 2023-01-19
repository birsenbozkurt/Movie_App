import react, { useEffect, useState } from "react";
import Card from "./Card";
let API_key = "&api_key=6271e7f0da98b9d66afcd07c890d72b6";
let base_url = "https://api.themoviedb.org/3";
let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
const Main = () => {
	const [moviedata, setData] = useState([]);
	const [url_set, setUrl] = useState(url);
	//başlangıçta en popüler filmler url değerini aldı.

	useEffect(() => {
		// Fetch-> Veriyi alıp vermemizi sağlayan asenkron bir yapı
		// .then((res))->json'a döndürür
		fetch(url_set)
			.then((res) => res.json())
			.then((data) => {
				// console.log(data.results);
				setData(data.results);
			});
	}, [url_set]);
	return (
		<>
			<div className="header">
				<nav>
					<ul>
						<li>
							<a href="#">Popular</a>
						</li>
						<li>
							<a href="#">Theatre</a>
						</li>
						<li>
							<a href="#">Kids</a>
						</li>
						<li>
							<a href="#">Drama</a>
						</li>
						<li>
							<a href="#">Comedie</a>
						</li>
					</ul>
				</nav>
				<form>
					<div className="search-btn">
						<input type="text" placeholder="Enter Movie Name" className="inputText" />
						<button>
							<i class="fas fa-search"></i>
						</button>
					</div>
				</form>
			</div>
			<div className="container">
				{moviedata.length == 0 ? (
					<p className="notfound">Not Found</p>
				) : (
					moviedata.map((res, pos) => {
						return <Card info={res} key={pos} />;
					})
				)}
			</div>
		</>
	);
};
export default Main;
