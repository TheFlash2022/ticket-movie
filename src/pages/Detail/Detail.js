import { Radio, Space, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { layThongTinChiTietPhim } from "../../redux/actions/QuanLyRapAction";
import { SET_CHI_TIET_PHIM } from "../../redux/types/QuanLyRapType";
import moment from "moment";
import {NavLink} from 'react-router-dom';

const { TabPane } = Tabs;

export default function Detail(props) {
  const filmDetail = useSelector((state) => state.QuanLyPhimReducer.filmDetail);

  const dispatch = useDispatch();

  useEffect(() => {
    let { id } = props.match.params;

    dispatch(layThongTinChiTietPhim(id));
  }, []);

  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${filmDetail.hinhAnh})`,
        backgroundSize: "100%",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="grid grid-cols-12">
        <div className="col-span-5 col-start-3">
          <div className="grid grid-cols-3">
            <img
              className="col-span-1"
              src={filmDetail.hinhAnh}
              style={{ width: "100%", height: 300 }}
              alt="picture"
            />
            <div className="col-span-2 ml-5" style={{ marginTop: "25%" }}>
              <p className="text-sm">
                ngày chiếu:{" "}
                {moment(filmDetail.ngayKhoiChieu).format("DD-MM-YYYY")}
              </p>
              <p className="text-4xl">{filmDetail.tenPhim}</p>
              <p>{filmDetail.moTa}</p>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="lịch chiếu" key="1">
          <div className="mt-20 ml-72 w-2/3 container bg-white px-5 py-5">
            <Tabs tabPosition={"left"}>
              {filmDetail.heThongRapChieu?.map((htr, index) => {
                return (
                  <TabPane
                    tab={
                      <div>
                        <img
                          className="rounded-full"
                          src={htr.logo}
                          width={50}
                          height={50}
                          alt={htr.logo}
                        />
                        {htr.tenHeThongRap}
                      </div>
                    }
                    key={index}
                  >
                    {htr.cumRapChieu?.map((cumRap,index)=>{
                      return <div className="mt-5" key={index}>
                        <div className="flex flex-row">
                          <img src={`https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png`} style={{width:70,height:70}} />
                          <div className="ml-2">
                            <p className="text-2xl">{cumRap.tenCumRap}</p>
                          </div>
                        </div>
                        <div className="thong-tin-lich-chieu grid grid-cols-4">
                          {cumRap.lichChieuPhim?.slice(0,12).map((lichChieu,index)=>{
                            return <NavLink to='/' key={index} className="col-span-1 text-green-800 font-bold">
                              {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                            </NavLink>
                          })}
                        </div>
                      </div>
                    })}
                  </TabPane>
                );
              })}
            </Tabs>
          </div>
        </TabPane>
        <TabPane tab="thông tin" key="2">
          thông tin
        </TabPane>
        <TabPane tab="đánh giá" key="3">
          đánh giá
        </TabPane>
      </Tabs>
    </div>
  );
}
