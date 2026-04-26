import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SectionReveal } from "./SectionReveal";

export function FAQ({ content }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section section--alt" id="faq">
      <div className="container faq-shell">
        <SectionReveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Quick answers for collaborators and potential clients"
            description="This keeps the helpful FAQ feature from the old site, but strips away the template presentation."
          />
        </SectionReveal>

        <div className="faq-list">
          {content.map((item, index) => {
            const isOpen = index === openIndex;

            return (
              <SectionReveal key={item.question} className="surface-card faq-item" delay={index * 0.04}>
                <button
                  type="button"
                  className="faq-trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <ChevronDown size={18} className={isOpen ? "rotated" : ""} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      className="faq-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
