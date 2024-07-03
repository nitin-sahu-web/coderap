import { AnimatePresence, motion } from "framer-motion";

function Accordian({ show, header, onClick, children }) {
  return (
    <AnimatePresence>
      <div>{header}</div>
      {show && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "max-content" }}
          exit={{ opacity: 0, height: 0, transition: { duration: 0.2 } }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Accordian;
