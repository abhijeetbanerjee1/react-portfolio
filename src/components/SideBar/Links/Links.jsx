import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ setOpen }) => {
  const items = [
    "Homepage",
    "About Me",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1 }}
          onClick={() => setOpen((prev) => !prev)}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
