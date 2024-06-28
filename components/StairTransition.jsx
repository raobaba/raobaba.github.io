"use client";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

function StairTransition() {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen top-0 fixed left-0 right-0 pointer-events-none z-40 flex ">
            <Stairs />
          </div>
          <motion.div
            className="w-screen h-screen fixed bg-primary top-8 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: easeInOut },
            }}
          />
        </div>
      </AnimatePresence>
    </>
  );
}

export default StairTransition;
