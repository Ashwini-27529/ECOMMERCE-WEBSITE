import React from "react";
import Fruit1 from "../../assets/Fruits/frock.png";
import Fruit2 from "../../assets/Fruits/shirt.png";
import Fruit3 from "../../assets/Fruits/ring.png";
import Fruit4 from "../../assets/Fruits/watch.png";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utility/animation";

const MenusData = [
  { id: 1, title: "Frock", price: "$9.50", img: Fruit1, delay: 0.3 },
  { id: 2, title: "Shirt", price: "$4.00", img: Fruit2, delay: 0.6 },
  { id: 3, title: "Ring", price: "$43.00", img: Fruit3, delay: 0.9 },
  { id: 4, title: "Watch", price: "$11.00", img: Fruit4, delay: 1.2 },
];

const Menus = () => {
  return (
    <section>
      <div className="container pt-12 pb-20">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl font-bold pb-10 uppercase text-primary"
        >
          Our Menu
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {MenusData.map((menu) => (
            <motion.div
              key={menu.id} // ✅ Fixed missing key
              variants={FadeLeft(menu.delay)}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.1 }}
              className="bg-secondary rounded-3xl px-4 py-2 shadow-lg flex flex-col justify-center items-center gap-3"
            >
              <img
                src={menu.img}
                alt={menu.title}
                className="w-[60px] mb-4 scale-125"
              />
              <div className="text-center">
                <h1 className="text-lg font-semibold">{menu.title}</h1>
                <p className="text-lg font-semibold text-primary">{menu.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menus;
