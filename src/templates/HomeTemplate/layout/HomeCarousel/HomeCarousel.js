import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getCarouselAction } from "../../../../redux/actions/CarouselAction";
import { SET_CAROUSEL } from "../../../../redux/types/CarouselType";

const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundPosition: "center",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
};

export default function HomeCarousel(props) {
  const { arrImg } = useSelector((state) => state.CarouselReducer);

  const dispatch = useDispatch();

  useEffect( () => {

    // try {
    //   const result = await axios({
    //     url: "http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachBanner",
    //     method: "GET",
    //   });
    //   console.log("result", result);
    //   dispatch({
    //     type: SET_CAROUSEL,
    //     arrImg: result.data.content,
    //   });
    // } catch (errors) {
    //   console.log("errors", errors);
    // }



    dispatch(getCarouselAction);

  }, []);

  const renderImg = () => {
    return arrImg.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            <img
              src={item.hinhAnh}
              alt={item.hinhAnh}
              className="w-full opacity-0"
            />
          </div>
        </div>
      );
    });
  };

  return <Carousel effect="fade">{renderImg()}</Carousel>;
}
