import axios from "axios";
import { DOMAIN } from "../../util/setting";
import { SET_CAROUSEL } from "../types/CarouselType";
import { quanLyPhimService } from "../../services/QuanLyPhimService";

export const getCarouselAction = async (dispatch) => {
  try {
    // const result = await axios({
    //   url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`,
    //   method: "GET",
    // });

    const result = await quanLyPhimService.layDanhSachBanner();

    dispatch({
      type: SET_CAROUSEL,
      arrImg: result.data.content,
    });
  } catch (errors) {
    console.log("errors", errors);
  }
};
