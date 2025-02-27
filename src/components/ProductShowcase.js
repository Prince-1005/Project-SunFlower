"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductShowcase = void 0;
var product_avif_1 = require("../assets/images/product.avif");
var image_1 = require("next/image");
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var ProductShowcase = function () {
  var appImage = (0, react_1.useRef)(null);
  var scrollYProgress = (0, framer_motion_1.useScroll)({
    target: appImage,
    offset: ["start end", "end end"]
  }).scrollYProgress;
  var rotateX = (0, framer_motion_1.useTransform)(scrollYProgress, [0, 1], [15, 0]);
  var opacity = (0, framer_motion_1.useTransform)(scrollYProgress, [0, 1], [.3, 1]);
  return (<div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
    <div className="container">
      <h2 className="text-center text-5xl font-bold tracking-tighter">Intuitive Interface</h2>
      <div className='max-w-xl mx-auto'>
        <p className="text-xl text-white/70 text-center mt-5">
          Heart2Heart’s simple and adaptive design makes conversations effortless, whether through text or voice. With easy navigation and responsive interactions, it provides a smooth and comfortable user experience, ensuring support is always within reach.
        </p>
      </div>

      <div className="flex justify-center">
        <framer_motion_1.motion.div style={{
          opacity: opacity,
          rotateX: rotateX,
          transformPerspective: "800px",
        }}>
          <image_1.default src={product_avif_1.default} ref={appImage} alt="app screen" className="mt-14" />
        </framer_motion_1.motion.div>
      </div>

    </div>

  </div>);
};
exports.ProductShowcase = ProductShowcase;
