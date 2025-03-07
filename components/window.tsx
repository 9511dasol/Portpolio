import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Ingredient, Project } from "../ingredients/ingredients";
import { StaticImageData } from 'next/image';
import Link from "next/link";

interface WindowProps {
  ingredients: Ingredient[];
  project: Project;
}

// export interface Project {
//     title: string;
//     subheading: string;
//     img: string;
//     description: string;
//     link: string;
//   }

function Window({ ingredients, project }: WindowProps) {
  const [selectedIngd, setSelectedIngd] = useState(ingredients[0]);
  // let content = <>
  //     <img src={project.img} />
  // </>
  let content: string = project.title;
  let b: StaticImageData = project.img;
  let c: string = project.link;
  let d: string = project.subheading;
  // console.log(content, b, c, d);
  let contents = <></>;
  if (selectedIngd == ingredients[0]) {
    contents = (
      <Link href={c} target="_blank">
        <img src={b.src} />
      </Link>
    );
  } else {
    contents = (
      <div className="pro__info">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
    );
  }

  return (
    <div className="window">
      <nav>
        <ul>
          {ingredients.map((item, idx) => (
            <li
              key={idx}
              className={item === selectedIngd ? "selected" : ""}
              onClick={() => {
                setSelectedIngd(item);
              }}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedIngd ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIngd ? selectedIngd.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedIngd ? contents : "😋"}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default Window;
