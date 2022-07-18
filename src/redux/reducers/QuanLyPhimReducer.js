import {
  SET_DANH_SACH_PHIM,
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
} from "../types/QuanLyPhimType";
import { SET_CHI_TIET_PHIM } from "../types/QuanLyRapType";

const stateDefault = {
  arrFilm: [
    {
      maPhim: 8902,
      tenPhim: "DOCTOR STRANGE IN THE MULTIVERSE OF MADNESS 321",
      biDanh: "doctor-strange-in-the-multiverse-of-madness-321",
      trailer: "https://www.youtube.com/embed/Rf8LAYJSOL8",
      hinhAnh:
        "https://movienew.cybersoft.edu.vn/hinhanh/doctor-strange-in-the-multiverse-of-madness_gp01.jpg",
      moTa: "Trailer mới Doctor Strange In The Multiverse Of Madness hé lộ một nhân vật bí ẩn dường như là giáo sư X phiên bản già Patrick Stewart. Cả giáo sư X phiên bản trẻ (James McAvoy) và Jean Grey (Sophie Turner) đều có tin xuất hiện ở phim trường Phù Thủy Tối Thượng Trong Đa Vũ Trụ Hỗn Loạn. Đặc biệt nhất là lời đồn không tưởng về việc Tom Cruise sẽ trở thành Iron Man mới đang lan truyền rộng rãi.",
      maNhom: "GP01",
      ngayKhoiChieu: "2022-06-25T23:27:23.303",
      danhGia: 10,
      hot: false,
      dangChieu: true,
      sapChieu: false,
    },
    {
      maPhim: 8902,
      tenPhim: "DOCTOR STRANGE IN THE MULTIVERSE OF MADNESS 321",
      biDanh: "doctor-strange-in-the-multiverse-of-madness-321",
      trailer: "https://www.youtube.com/embed/Rf8LAYJSOL8",
      hinhAnh:
        "https://movienew.cybersoft.edu.vn/hinhanh/doctor-strange-in-the-multiverse-of-madness_gp01.jpg",
      moTa: "Trailer mới Doctor Strange In The Multiverse Of Madness hé lộ một nhân vật bí ẩn dường như là giáo sư X phiên bản già Patrick Stewart. Cả giáo sư X phiên bản trẻ (James McAvoy) và Jean Grey (Sophie Turner) đều có tin xuất hiện ở phim trường Phù Thủy Tối Thượng Trong Đa Vũ Trụ Hỗn Loạn. Đặc biệt nhất là lời đồn không tưởng về việc Tom Cruise sẽ trở thành Iron Man mới đang lan truyền rộng rãi.",
      maNhom: "GP01",
      ngayKhoiChieu: "2022-06-25T23:27:23.303",
      danhGia: 10,
      hot: false,
      dangChieu: true,
      sapChieu: false,
    },
  ],
  dangChieu: true,
  sapChieu: true,
  arrFilmDefault: [],

  filmDetail:{},
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_PHIM: {
      state.arrFilm = action.arrFilm;
      state.arrFilmDefault = state.arrFilm;
      return { ...state };
    }

    case SET_FILM_DANG_CHIEU: {
      state.dangChieu = !state.dangChieu;
      state.arrFilm = state.arrFilmDefault.filter(
        (film) => film.dangChieu === state.dangChieu
      );
      return { ...state };
    }

    case SET_FILM_SAP_CHIEU: {
      state.sapChieu = !state.sapChieu;
      state.arrFilm = state.arrFilmDefault.filter(
        (film) => film.sapChieu === state.sapChieu
      );
      return { ...state };
    }

    case SET_CHI_TIET_PHIM:{
      state.filmDetail=action.filmDetail;
      return {...state};
    }

    default:
      return { ...state };
  }
};
