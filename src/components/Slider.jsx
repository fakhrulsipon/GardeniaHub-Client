import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";

const Slider = () => {
  const slides = [
    {
      id: 1,
      title: "Grow Together",
      description: "Join our gardening events & workshops!",
      btnText: "Join Now",
      image:
        "https://i.ibb.co/XxT8SdcS/naoki-suzuki-ZBPLf-NUncq8-unsplash.jpg",
    },
    {
      id: 2,
      title: "Urban Gardening Made Simple",
      description: "Learn vertical, balcony, and indoor gardening.",
      btnText: "Learn More",
      image:
        "https://i.ibb.co/FbBGx68F/fotis-fotopoulos-s-Qh7-rx-JC8-unsplash.jpg",
    },
    {
      id: 3,
      title: "Your Green Journey Starts Here",
      description: "Connect, share tips & grow with GardeniaHub!",
      btnText: "Get Started",
      image:
        "https://i.ibb.co/YBC35SK1/gabriel-tovar-f-LD7-O2p-Pai0-unsplash.jpg",
    },
  ];

  return (
    <div className="w-full h-[500px] relative rounded-3xl">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3500 }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-[500px] bg-center bg-cover flex items-center justify-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10 max-w-xl text-left px-6 md:px-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg animate-fade-in">
                  {/* implement typewriter */}
                  <Typewriter
                    words={[slide.title]}
                    loop={false}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </h2>
                <p className="text-lg md:text-xl text-white mb-6 drop-shadow-md">
                  {slide.description}
                </p>
                <button className="bg-green-500 hover:bg-green-600 transition px-6 py-3 text-white font-semibold rounded shadow-lg">
                  {slide.btnText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
