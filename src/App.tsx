import { createBrowserHistory } from "history";
import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
} from "react-router-dom";
import HomeTemplate from "./user/Templates/HomeTemplate";
import HomePage from "./user/Pages/HomePage";
import DetailPage from "./user/Pages/DetailPage";

import AdminTemplate from "./admin/templates/AdminTemplate";
import DashboardAdmin from "./admin/pagesAdmin/DashboardAdmin";
import FormAdmin from "./admin/pagesAdmin/form/FormAdmin";
import ManageAdmin from "./admin/pagesAdmin/ManageAdmin";
import AvatarPage from "./admin/pagesAdmin/base/AvatarPage";
import ButtonPage from "./admin/pagesAdmin/base/ButtonPage";
import GoogleMap from "./admin/pagesAdmin/map/GoogleMap";
import GridViewSystem from "./admin/pagesAdmin/base/GridViewSystem";
import LineAwesomePage from "./admin/pagesAdmin/base/LineAwesomePage";
import NotificationPage from "./admin/pagesAdmin/base/NotificationPage";
import PannelPage from "./admin/pagesAdmin/base/PannelPage";
import SimpleLineIconPage from "./admin/pagesAdmin/base/SimpleLineIconPage";
import SweetAlertPage from "./admin/pagesAdmin/base/SweetAlertPage";
import TypographyPage from "./admin/pagesAdmin/base/TypographyPage";
import ChartPage from "./admin/pagesAdmin/chart/ChartPage";
import SparklinePage from "./admin/pagesAdmin/chart/SparklinePage";
import JsvectormapPage from "./admin/pagesAdmin/map/JsvectormapPage";
import RoomPage from "./user/Pages/RoomPage";
import DynamicResourceLoader from "./DynamicLoader.tsx";
import ManagePage from "./user/Pages/ManagePage.tsx";

export const routeLink: any = createBrowserHistory();

function App() {
  return (
    <>
      <HistoryRouter history={routeLink}>
        <DynamicResourceLoader />
        <Routes>
          {/* User Routes */}
          <Route path="" element={<HomeTemplate />}>
            <Route index element={<HomePage />}></Route>
            <Route path="room">
              <Route path="" element={<RoomPage />}></Route>
              <Route path=":locate" element={<RoomPage />}></Route>
            </Route>
            <Route path="detail">
              <Route path=":id" element={<DetailPage />}></Route>
            </Route>
            <Route path="info-user" element={<ManagePage />}></Route>
          </Route>
          {/* Admin Routes */}
          <Route path="admin" element={<AdminTemplate />}>
            <Route path="dashboard-admin" element={<DashboardAdmin />}></Route>
            <Route path="avatar" element={<AvatarPage />}></Route>
            <Route path="button" element={<ButtonPage />}></Route>
            <Route path="grid" element={<GridViewSystem />}></Route>
            <Route path="line" element={<LineAwesomePage />}></Route>
            <Route path="noti" element={<NotificationPage />}></Route>
            <Route path="pannel" element={<PannelPage />}></Route>
            <Route path="simple" element={<SimpleLineIconPage />}></Route>
            <Route path="sweet" element={<SweetAlertPage />}></Route>
            <Route path="type" element={<TypographyPage />}></Route>
            <Route path="chart" element={<ChartPage />}></Route>
            <Route path="spark" element={<SparklinePage />}></Route>
            <Route path="form" element={<FormAdmin />}></Route>
            <Route path="map" element={<GoogleMap />}></Route>
            <Route path="js" element={<JsvectormapPage />}></Route>

            <Route path="manage-admin" element={<ManageAdmin />}></Route>
          </Route>
        </Routes>
      </HistoryRouter>
    </>
  );
}

export default App;
