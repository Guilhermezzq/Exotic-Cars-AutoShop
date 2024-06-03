

import { Container } from "../../components/container/container";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

export function Home() {

  
 
    return (
      <>
      
  
        <Container>
        <section 
        className="bg-blue-300 p-4 rounded-lg w-full max-w-3xl mx-auto flex justify-center items-center gap-2"
        >
          <input 
          className="w-full border-2 rounded-lg h-9 px-3 outline-none"
          placeholder="Enter the name of the car..."

          />

          <button
          className="bg-black
          text-white h-9 px-8 rounded-lg font-medium text-lg "
          >
            Search
          </button>
        </section>

        <h1
        className="font-bold text-center mt-6 text-2xl mb-4 "
        >
          <span className="text-blue-300">R</span>ev <span className="text-blue-300">U</span>p to <span className="text-blue-300">E</span>xcellence: <span className="text-blue-300">D</span>iscover <span className="text-blue-300">O</span>ur <span className="text-blue-300">R</span >ange <span className="text-blue-300">E</span>xclusive and <span className="text-blue-300">E</span>xotic <span className="text-blue-300">C</span>ars</h1>

          <main
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
          <section 
          className="w-full bg-blue-300 rounded-lg"
          >
              

            <Swiper
             
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0} 
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            style={{ overflowX: 'hidden' }} 
            >
              <SwiperSlide>
              <img
              className=" w-full rounded-t-lg mb-2 max-h-86"
              src="https://d.rapidcdn.app/snapinsta?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90MzkuMzA4MDgtNi8zNjEwOTQyODdfMTgyNTY2NDA3NTIwODE1NjFfMzAyMjIzMjQ5MDIxNzA1Nzc4OV9uLmpwZz9zdHA9ZHN0LWpwZ19lMzVfczY0MHg2NDBfc2gwLjA4JmVmZz1leUoyWlc1amIyUmxYM1JoWnlJNkltbHRZV2RsWDNWeWJHZGxiaTR4TkRRd2VERTBOREF1YzJSeUxtWXpNRGd3T0NKOSZfbmNfaHQ9c2NvbnRlbnQuY2RuaW5zdGFncmFtLmNvbSZfbmNfY2F0PTEwMSZfbmNfb2hjPTFqN1dyVHVzWl9ZUTdrTnZnRTAwbWt1JmVkbT1BUHMxN0NVQUFBQUEmY2NiPTctNSZvaD0wMF9BWUJ4ZG5MZWkwUTJ2VE1WQm54OFNzVG1NS3YzZ0gxQzFWcmFleHFWMHVoY2lBJm9lPTY2NTdEOEE3Jl9uY19zaWQ9MTBkMTNiIiwiZmlsZW5hbWUiOiJTbmFwaW5zdGEuYXBwX3RodW1iXzM2MTA5NDI4N18xODI1NjY0MDc1MjA4MTU2MV8zMDIyMjMyNDkwMjE3MDU3Nzg5X24uanBnIn0.s1XQapOE7h9570ULLP8h2C6O9nznLzvoXUjiwvyvNS8"
                />
              </SwiperSlide>
              <SwiperSlide>
              <img
              className=" w-full rounded-t-lg mb-2 max-h-86"
              src="https://d.rapidcdn.app/snapinsta?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90MzkuMzA4MDgtNi8zNjI2MDMxMDlfMTgyNTY2NDA3NzAwODE1NjFfMzc5Mjg4NTg2NTgzNzkwODEyNF9uLmpwZz9zdHA9ZHN0LWpwZ19lMzVfczY0MHg2NDBfc2gwLjA4JmVmZz1leUoyWlc1amIyUmxYM1JoWnlJNkltbHRZV2RsWDNWeWJHZGxiaTR4TkRRd2VERTBOREF1YzJSeUxtWXpNRGd3T0NKOSZfbmNfaHQ9c2NvbnRlbnQuY2RuaW5zdGFncmFtLmNvbSZfbmNfY2F0PTEwMSZfbmNfb2hjPXI2YWFTV0VqNHd3UTdrTnZnRlVIUVU0JmVkbT1BUHMxN0NVQUFBQUEmY2NiPTctNSZvaD0wMF9BWURTT1dUMTYyUGp2dVVTNVB1dDRnbFU2M1lTX3ZONWc4TUpiblVKa3piZFd3Jm9lPTY2NTdFNTI4Jl9uY19zaWQ9MTBkMTNiIiwiZmlsZW5hbWUiOiJTbmFwaW5zdGEuYXBwX3RodW1iXzM2MjYwMzEwOV8xODI1NjY0MDc3MDA4MTU2MV8zNzkyODg1ODY1ODM3OTA4MTI0X24uanBnIn0.Ii84ml-nh7I7DlKJwN0IXYWQ-wDU1WQ3HhSLgGPRC2Y"
              />
              </SwiperSlide>
              <SwiperSlide>
              <img
              className=" w-full rounded-t-lg mb-2 max-h-86 "
              src="https://d.rapidcdn.app/snapinsta?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90MzkuMzA4MDgtNi8zNjIyOTE3NTBfMTgyNTY2NDA4MDAwODE1NjFfNTM3MTUzNTUyMDgzMzAzMzk1N19uLmpwZz9zdHA9ZHN0LWpwZ19lMzVfczY0MHg2NDBfc2gwLjA4JmVmZz1leUoyWlc1amIyUmxYM1JoWnlJNkltbHRZV2RsWDNWeWJHZGxiaTR4TkRRd2VERTBOREF1YzJSeUxtWXpNRGd3T0NKOSZfbmNfaHQ9c2NvbnRlbnQuY2RuaW5zdGFncmFtLmNvbSZfbmNfY2F0PTEwMSZfbmNfb2hjPWhkVVZLbkRVRnlnUTdrTnZnRWN6My0xJmVkbT1BUHMxN0NVQUFBQUEmY2NiPTctNSZvaD0wMF9BWUNxU01FYjFQYU5iQlZWZDNnS0d4anRMeTJOaDRPLXYzUDNhc0syV3BxWUlBJm9lPTY2NTdERTUzJl9uY19zaWQ9MTBkMTNiIiwiZmlsZW5hbWUiOiJTbmFwaW5zdGEuYXBwX3RodW1iXzM2MjI5MTc1MF8xODI1NjY0MDgwMDA4MTU2MV81MzcxNTM1NTIwODMzMDMzOTU3X24uanBnIn0.aBSvwc2AvhomeuODU4FhCJS8zpZpluhtBU2kzN_4mwk"
              />
              </SwiperSlide>
              <SwiperSlide>
              <img
              className=" w-full rounded-t-lg mb-2 max-h-86 "
              src="https://d.rapidcdn.app/snapinsta?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90MzkuMzA4MDgtNi8zNjE5NDE5NDdfMTgyNTY2NDA3NjEwODE1NjFfMzU4ODg3NjM1NjM3MDUzMTc4OV9uLmpwZz9zdHA9ZHN0LWpwZ19lMzVfczY0MHg2NDBfc2gwLjA4JmVmZz1leUoyWlc1amIyUmxYM1JoWnlJNkltbHRZV2RsWDNWeWJHZGxiaTR4TkRRd2VERTBOREF1YzJSeUxtWXpNRGd3T0NKOSZfbmNfaHQ9c2NvbnRlbnQuY2RuaW5zdGFncmFtLmNvbSZfbmNfY2F0PTEwMSZfbmNfb2hjPUdfc2dOV2YwZGtBUTdrTnZnR19pSXpiJmVkbT1BUHMxN0NVQUFBQUEmY2NiPTctNSZvaD0wMF9BWUJjY21pRFN6dWprVmNJV2FONDJnUURHam02ai1Fenk3VVdvZVJMLU5ScDJ3Jm9lPTY2NTdGM0VGJl9uY19zaWQ9MTBkMTNiIiwiZmlsZW5hbWUiOiJTbmFwaW5zdGEuYXBwX3RodW1iXzM2MTk0MTk0N18xODI1NjY0MDc2MTA4MTU2MV8zNTg4ODc2MzU2MzcwNTMxNzg5X24uanBnIn0.YQF3FHNUOdHHDjQbEfLMMvsMYp18UVsJzEUL26sNdpo"
              />
              </SwiperSlide>
      
              </Swiper>

                 
             
              <p className="font-bold mt-1 px-2">Ferrari 812 Superfast</p>

              <div className="flex flex-col px-2">
                <span className="text-zinc-500"> Year 2020/2020 | 0 km</span>
                <strong className="text-black font-medium text-xl">$2.000.000,00 </strong>
              </div>

              <div className="w-full h-px bg-slate-950 my-2 mb-4"></div>

              <div className="px-2 pb-2">
                <span className="text-zinc-500">
                  Belo Horizonte - MG
                </span>
              </div>
            </section>
          </main>

        </Container>
  
  
      </>
    )
  }
  
  