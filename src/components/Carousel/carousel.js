import React from "react";
import { Image } from "../Image/image";
import * as BsIcons from "react-icons/bs";
import "./carousel.css";

export const Carousel = () => {
	return (
		<div className='carousel-container'>
			<div className='left-control'>
				<BsIcons.BsChevronCompactLeft />
			</div>
			<Image />
			<div className='right-control'>
				<BsIcons.BsChevronCompactRight />
			</div>
		</div>
	);
};
