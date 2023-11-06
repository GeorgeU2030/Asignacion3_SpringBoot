import React, { Component } from "react";
import Slider from "react-slick";
import MovieMenu from "./MovieMenu";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
    };

    const movies = [
      {
        imageposter: "src/images/poster1.jpg",
        urlyoutube: "https://www.youtube.com/watch?v=zh4KhVSMwtQ&t=1s",
        name: "Barbie",
        genre: "Comedy, Fantasy",
        director: "Greta Gerwig",
        date: "July 2023",
      },
      {
        imageposter: "src/images/poster2.jpg",
        urlyoutube: "https://www.youtube.com/watch?v=SvJwEiy2Wok",
        name: "Super Mario Bros",
        genre: "Animation",
        director: "Aaron Horvath",
        date: "April 2023",
      },
      {
        imageposter: "src/images/poster3.jpg",
        urlyoutube: "https://www.youtube.com/watch?v=MVvGSBKV504",
        name: "Oppenheimer",
        genre: "Drama",
        director: "Christopher Nolan",
        date: "July 2023",
      },
      {
        imageposter: "src/images/poster4.jpg",
        urlyoutube: "https://www.youtube.com/watch?v=sinstLBy9l8",
        name: "Guardians of the Galaxy Vol 3",
        genre: "Sci-Fi, Adventure",
        director: "James Gunn",
        date: "May 2023",
      },
      {
        imageposter: "src/images/poster5.jpg",
        urlyoutube: "https://www.youtube.com/watch?v=FDhvbIqTQwI",
        name: "Fast X",
        genre: "Action",
        director: "Louis Leterrier",
        date: "May 2023",
      },
      {
        imageposter: "src/images/poster6.jpg",
        urlyoutube: "https://www.youtube.com/watch?v=b3_1cyJRaQ8",
        name: "Spider-Man Across The Spider-Verse",
        genre: "Animation",
        director: "Joaquim Dos Santos",
        date: "June 2023",
      },
    ];

    return (
      <div className="bg-second h-5/6 w-full flex flex-col items-center">
        <h2 className="text-center py-4 text-3xl text-white font-bold">
          Explore the Best Movies of 2023
        </h2>
        <Slider {...settings} className="w-5/6">
          {movies.map((movie, index) => (
            <div key={index} className="h-[30rem] bg-third shadow-lg rounded-lg p-4">
              <MovieMenu {...movie} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
