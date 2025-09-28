import { motion } from "framer-motion";

export default function RotatingGanesh() {
  return (
    <div className="flex items-center justify-center ">
      <div className="relative w-80 h-80">
        {/* Rotating Om symbols behind Ganesha */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {/* Om symbols positioned in a circle */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute text-orange-200/60 text-6xl font-bold"
              style={{
                transform: `rotate(${i * 45}deg) translateY(-180px) rotate(-${
                  i * 45
                }deg)`,
              }}
            >
              ॐ
            </div>
          ))}
        </motion.div>

        {/* Rotating lotus petals */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: -360 }}
          transition={{
            duration: 45,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute text-orange-300/50 text-4xl"
              style={{
                transform: `rotate(${i * 30}deg) translateY(-160px) rotate(-${
                  i * 30
                }deg)`,
              }}
            >
              🪷
            </div>
          ))}
        </motion.div>

        {/* Inner rotating Sanskrit text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{
            duration: 60,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {["गं", "गणपति", "विघ्न", "हर्ता"].map((text, i) => (
            <div
              key={i}
              className="absolute text-orange-400/45 text-2xl font-semibold"
              style={{
                transform: `rotate(${i * 90}deg) translateY(-140px) rotate(-${
                  i * 90
                }deg)`,
              }}
            >
              {text}
            </div>
          ))}
        </motion.div>

        {/* Ganesha image - positioned on top with higher z-index */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <img
            src="/person.jpeg"
            alt="Lord Ganesha"
            width={300}
            height={300}
            className="w-full h-full object-cover rounded-full drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
