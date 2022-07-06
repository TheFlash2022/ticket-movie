import { baseService } from "./baseService";
import { GROUP_ID } from "../util/setting";

export class QuanLyRapService extends baseService {
  constructor() {
    super();
  }

  layDanhSachHeThongRap = () => {
    return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`);
  };

}

export const quanLyRapService = new QuanLyRapService();
