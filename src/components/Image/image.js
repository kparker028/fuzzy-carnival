import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./image.css";
export const Image = () => {
	const [image, setImage] = useState([]);

	useEffect(() => {
		Axios.get(
			"https://api.unsplash.com/photos/?client_id=wQOeVUmx9s-Po6Fr84OtWr79SUPF__RdJhOkEI6NtmM"
		).then((res) => {
			setImage(res.data);
		});
	}, []);

	return (
		<div className='image-container'>
			<h1>dont close</h1>
			<div className='images'>
				{image.map((img) => (
					<img src={img.urls.small} alt=';' key={img.id} />
				))}
			</div>
		</div>
	);
};
