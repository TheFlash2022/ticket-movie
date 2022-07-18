import React, { useEffect } from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
import { useSelector, useDispatch } from "react-redux";
import Film from "../../components/Film/Film";
import MultipleRowSlick from "../../components/ReactSlick/MultipleRowSlick";
import { layDanhSachPhimAction } from "../../redux/actions/QuanLyPhimActions";
import {layDanhSachHeThongRapAction} from '../../redux/actions/QuanLyRapAction';
import HomeCarousel from "../../templates/HomeTemplate/layout/HomeCarousel/HomeCarousel";

export default function Home(props) {
  
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);

  const dispatch = useDispatch();

  // const renderFilms = () => {
  //   return arrFilm.map((phim, index) => {
  //     return <Film key={index} />;
  //   });
  // };

  useEffect(() => {

    const action = layDanhSachPhimAction();
    dispatch(action); //dispatch function từ thunk
    dispatch(layDanhSachHeThongRapAction());

  }, []);


  return (
    <div>
      <HomeCarousel />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <MultipleRowSlick arrFilm={arrFilm} />
          {/* <div class="flex flex-wrap -m-4 justify-center">{renderFilms()}</div> */}
        </div>
      </section>
      <div className="mx-36">
        <HomeMenu heThongRapChieu={heThongRapChieu} />
      </div>
    </div>
  );
}
