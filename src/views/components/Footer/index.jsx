import React from 'react';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const Footer = () => {
    return (
        <footer
            className="bg-neutral-200 text-center text-white dark:bg-neutral-600 dark:text-neutral-200">
            <div class="flex justify-center m-auto my-4 w-4/5  py-9">
                <div class="grid grid-cols-4 gap-9 text-black">
                    <div class="flex items-center justify-center bg-white h-28 w-52 text-black grid-cols-2 gap-2">
                        <div >
                            <RocketLaunchIcon />
                        </div>
                        <div class="flex flex-col text-left pl-2">
                            <h2 class="uppercase font-bold text-xs">Miễn phí giao hàng</h2>
                            <h3 class="text-xs opacity-70">hóa đơn trên 2 triệu</h3>
                        </div>
                    </div>
                    <div class="flex items-center justify-center bg-white h-28 w-52 text-black grid-cols-2 gap-2">
                        <div class=" ">
                            <SupportAgentIcon />
                        </div>
                        <div class="flex flex-col text-left pl-2">
                            <h2 class="uppercase font-bold text-xs">Hổ trợ 24/7</h2>
                            <h3 class="text-xs opacity-70">tư vấn trực tuyến</h3>
                        </div>
                    </div>
                    <div class="flex items-center justify-center bg-white h-28 w-52 text-black grid-cols-2 gap-2">
                        <div class=" ">
                            <CalendarMonthIcon />
                        </div>
                        <div class="flex flex-col text-left pl-2">
                            <h2 class="uppercase font-bold text-xs">Cập nhật hằng ngày</h2>
                            <h3 class="text-xs opacity-70">sản phẩm mới</h3>
                        </div>
                    </div>
                    <div class="flex items-center justify-center bg-white h-28 w-52 text-black grid-cols-2 gap-2">
                        <div class=" ">
                            <AutorenewIcon />
                        </div>
                        <div class="flex flex-col text-left pl-2">
                            <h2 class="uppercase font-bold text-xs">Đổi trả 30 ngày</h2>
                            <h3 class="text-xs opacity-70">lỗi do nhà sản xuất</h3>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
