import "./Testimonial.css";
import { Data } from './Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'motion/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { Pagination, EffectCards, Autoplay } from 'swiper/modules';

const Testimonial = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="testimonial container section"
    >
      <motion.h2 variants={itemVariants} className="section__title">What Clients Say</motion.h2>
      <motion.span variants={itemVariants} className="section__subtitle">Testimonials</motion.span>

      <motion.div variants={itemVariants}>
        <Swiper 
          className="testimonials__container"
          loop={true}
          grabCursor={true}
          spaceBetween={20}
          centeredSlides={false}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
              centeredSlides: true,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
              centeredSlides: false,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 30,
              centeredSlides: false,
            },
          }}
          modules={[Pagination, Autoplay]}
        >
          {Data.map(({ id, image, title, description }, index) => (
            <SwiperSlide key={id}>
              <motion.div 
                className='testimonial__card'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="testimonial__quote">
                  <i className="uil uil-quote-left"></i>
                </div>
                <div className="testimonial__content">
                  <motion.img 
                    src={image} 
                    alt={title}
                    className='testimonial__img'
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="testimonial__info">
                    <h3 className="testimonial__name">{title}</h3>
                    <div className="testimonial__stars">
                      {[...Array(5)].map((_, i) => (
                        <motion.i 
                          key={i}
                          className="uil uil-star"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                        ></motion.i>
                      ))}
                    </div>
                    <p className="testimonial__description">{description}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.section>
  );
};

export default Testimonial;
