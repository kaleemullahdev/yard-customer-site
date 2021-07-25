import Box from "@material-ui/core/Box"
import React from "react";
import SlickSlider from "react-slick";
import { SliderWrapper } from "./elements"
export const Slider = () => {
    var settings = {
        dots: true,
        // arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <SliderWrapper>
            <SlickSlider {...settings} >

                <Box display="flex" justifyContent="center">
                    “Yardly has looked after our grass cutting for the past three summers. We are very pleased with their service and the quality of the work. It is nice to go away camping and know that the grass is being well looked after.”
                    Dorothy S. | Yardly Customer since April 2016
                </Box>
                <Box display="flex" justifyContent="center">
                    “Snow arrives, Yardly makes it vanish. Worry free, hassle free, and always prompt snow removal. I tried a few other companies and frankly never realized how stressful waiting for people to show up could be. Especially the dirty looks from neighbours. Called Yardly and haven’t been stressed once. Highly recommended.”
                    Rom L. | Yardly Customer since February 2019
                </Box>
                <Box display="flex" justifyContent="center">
                    “I’ve had Yardly winter and summer services for 3 years now and they are timely, well priced and very professional. My yard looks great year round and I would highly recommend them!”
                    Leanne G. | Yardly Customer since May 2016
                </Box>

            </SlickSlider>
        </SliderWrapper>
    );
}