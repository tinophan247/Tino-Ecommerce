import React, { useState } from 'react';
import Chips from '../../components/Chips';
import SingleDropdown from '../../components/Select/SingleDropdown';

const ProductDetail = () => {
  const [size, setSize] = useState(1);

  const handleChangeSize = event => {
    setSize(event.target.value);
  };

  return (
    <div>
      <section className='text-gray-700 overflow-hidden bg-white'>
        <div className='container px-5 py-24 mx-auto'>
          <p className='mb-5 lg:w-4/5 mx-auto'>
            Trang chủ | <b>Bleu De Chanel Parfum</b>
          </p>
          <div className='lg:w-4/5 mx-auto flex flex-wrap'>
            <img
              alt='not-found'
              className='lg:w-1/2 w-full object-cover object-center rounded border border-gray-200'
              src='https://www.chanel.com/us/img/t_one/q_auto:good,fl_lossy,dpr_1.2,f_auto/w_960/prd-emea/sys-master/content/P1/h00/hea/9794387836958-1080_1150_CREATIVEPACKSHOTPARFUM.jpg'
            />
            <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
              <h2 className='text-sm text-gray-500 tracking-widest'>Tino Perfume</h2>
              <h1 className='text-gray-900 text-3xl font-medium mb-1'>Bleu De Chanel Parfum</h1>
              <div>
                <Chips name='Unisex' />
              </div>
              <div className='mt-5'>
                <p className='leading-relaxed'>
                  <b>Thương hiệu:</b> Chanel
                </p>
                <p className='leading-relaxed'>
                  <b>Hương Đầu:</b> Vỏ chanh, Cam Bergamot, Cây bạc hà
                </p>
                <p className='leading-relaxed'>
                  <b>Hương Giữa:</b> Hoa Oải Hương, Hoa phong lữ, Quả dứa (quả thơm){' '}
                </p>
                <p className='leading-relaxed'>
                  <b>Hương Cuối:</b> Gỗ tuyết tùng, Gỗ đàn hương, Đậu Tonka
                </p>
              </div>
              <p className='leading-relaxed mt-10'>
                Được ra mắt vào năm 2018, nước hoa Bleu de Chanel Parfum được sáng tạo bởi Olivier Polge với sự mệnh
                hoàn thiện bộ ba hoàn hảo của dòng Bleu de Chanel của Nhà mốt Chanel. Bleu de Chanel Parfum đại diện cho
                màu sắc của sự tự do, thể hiện sự mạnh mẽ và tinh tế, với kỳ vọng có thể làm hài lòng những tín đồ nước
                hoa khó tính của hãng Chanel. Hương gỗ đàn hương và sự tươi mát của vỏ chanh vàng sẽ là mùi hương gây ấn
                tượng tới khướu giác của bạn khi lần đầu mặc Bleu de Chanel Parfum lên người. Một sự phá cách, mang
                hướng hiện đại nhưng vẫn giữ lại được những nét cổ điển trong dòng Bleu de Chanel của thương hiệu
                Chanel.
              </p>
              <SingleDropdown value={size} handleChange={handleChangeSize} size={'small'} />
              <div className='flex justify-between items-center mt-5'>
                <p className='font-medium text-2xl text-gray-900'>{size === 1 ? '2,800,000 đ' : '3,650,000 đ'}</p>
                <div className='flex gap-2'>
                  <button className='flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded'>
                    Thêm vào giỏ hàng
                  </button>
                  <button className='flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded'>
                    Mua ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
