import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import HomePage from "../pages/home/landing/home.page"
import Error404 from "../pages/common/error.page"
import RegisterPage from "../pages/home/auth/register"
import CategoryDetailPage from "../pages/home/category/category.detail.page"
import CategoryDetailLayout from "../pages/home/category/category-detail-layout.page"
import AdminDashBoard from "../pages/cms/dashboard/dashboard.page"
import BannerLayout from "../pages/cms/banner/banner.layout"
import BannerList from "../pages/cms/banner/banner.list.page"
import PermissionCheck from "../pages/common/checkPermissioin.page"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"


import {SetPasswordPage, LoginPage, ForgetPassword} from "../pages/home/auth/index"
import * as Layout from "../pages/layouts/index"
const Routing = () => {
    return (
        <>
        <ToastContainer
        
        />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout.HomeLayout/>}>
                        <Route index element={<HomePage />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="activate/:token" element={<SetPasswordPage/>} />
                        <Route path="forget-password" element={<ForgetPassword/>} />

                        <Route path="register" element={<RegisterPage />} />

                        <Route path="/category/:slug" element={<CategoryDetailLayout />}>
                            <Route index element={<CategoryDetailPage />}></Route>
                            <Route path=":childCat" element={<CategoryDetailPage />}></Route>
                        </Route>

                        <Route path="*" element={<Error404/>}></Route>
                        
                    </Route>


                    <Route path="/admin" element={<PermissionCheck accessBy={"admin"} Component={<Layout.CMSLayout/>}/>}>
                        <Route index element={<AdminDashBoard/>}></Route>
                        <Route path="banner" element={<BannerLayout/>}>
                            <Route index element={<BannerList/>}></Route>
                            <Route path="create" element={<>Create Component</>}></Route>
                        </Route>
                    </Route>

                    
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Routing