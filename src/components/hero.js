import React from 'react';
import {CarouselProvider, Slider, Slide, DotGroup, Image} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css'
import slide1 from "./../../images/slide1.png";
import slide2 from "./../../images/slide2.jpg";
import slide3 from "./../../images/slide3.png";
import styled from 'styled-components';
import "../styles/hero.css"

const CarouselContainer = styled.div`
	postion: relative;
	width: 100%;
	background-size: contain;
`

const ButtonContainer = styled.div`
	position: relative;
	top: -2rem;
`

const GradientContainer = styled.div`
	background: linear-gradient(red, yellow);
`


export default class extends React.Component{
	render() {
		return(
		<CarouselContainer>
			<CarouselProvider
				naturalSlideWidth = {125}
				naturalSlideHeight = {50}
				totalSlides = {3}
				isPlaying = {true}
				hasMasterSpinner
				interval = {4500}
			>
			<GradientContainer>
				<Slider>
				
					<Slide index = {0}>
						<Image
							alt="I am the first slide"
							src= {slide1} 
							className = "imageClass"/>
					</Slide>
					<Slide index = {1}>
						<Image
							alt="I am the second slide"
							src= {slide2} />
					</Slide>
					<Slide index = {2}>
						<Image
							alt="I am the third slide"
							src= {slide3} />
					</Slide>
				
				</Slider>
			</GradientContainer>
				<ButtonContainer>
					<DotGroup>
					</DotGroup>
				</ButtonContainer>
				<div id = "GradientContain">
					<p
						style={{
							fontFamily: "Roboto",
							position: "absolute",
							fontSize: "3rem",
							top: 0,
							color: "white",
							marginLeft: "2rem",
							marginTop: "3rem"
						}}
					>
						ACADEMICS
					</p>
					<p
						style={{
							fontFamily: "Roboto",
							position: "absolute",
							fontSize: "3rem",
							top: 0,
							color: "white",
							marginLeft: "4rem",
							marginTop: "9rem"
						}}
					>
						COMMUNITY
					</p>
					<p
						style={{
							fontFamily: "Roboto",
							position: "absolute",
							fontSize: "3rem",
							top: 0,
							color: "white",
							marginLeft: "6rem",
							marginTop: "15rem"
						}}
					>
						PROFESSIONALISM
					</p>
				</div>
			</CarouselProvider>
		</CarouselContainer>
		);
	}
}

