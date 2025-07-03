import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import React, { useState } from 'react'
import axios from "axios"
import Cards from "./Cards";
import { useEffect } from "react";
import { forwardRef } from "react";

const Freebooks = forwardRef((props,ref)=> {
    const [book,setBook] = useState([]);

    useEffect(()=>{
        const getBook = async()=>{
            try{
                const res = await axios.get("http://localhost:4001/book");
                setBook(res.data);
            }catch(err){
                console.log(err);
            }
        }
        getBook();
    },[])

    const filterData = book.filter((data) => data.category === "Free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
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
        <>
            <div ref ={ref} className='flex flex-col gap-1 ml-16 mt-12 mr-16'>

                <div className="pl-2">
                    <h1 className='font-bold sm:text-2xl text-pink-500'>Free offered Books</h1>
                    <p className="dark:text-white/85">Explore a wide range of free books across various categories including fiction, non-fiction, self-help, academics, technology, and more. Perfect for readers of all ages, these books are available at no cost to help you read, learn, and grow without limits.</p>
                </div>

                <div className="">
                    <Slider {...settings} className="">
                        {filterData.map((item) => (
                            <div key={item._id} className="p-2">
                                <Cards item={item} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
});

export default Freebooks;