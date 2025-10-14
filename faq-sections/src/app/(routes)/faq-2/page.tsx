"use client";

import { containerVariants, itemVariants } from "@/anim";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion-two";
import { faqData } from "@/constants";
import { motion } from "framer-motion";

const Faq = () => {

    return (
        <section className=" w-full min-h-screen flex items-center justify-center bg-white py-40">
            <div className=" w-full p-1.5 bg-secondary border rounded-xl max-w-2xl mx-auto">
                <Accordion type="single" className=" flex flex-col gap-1.5" collapsible>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col gap-1.5"
                    >
                        {faqData.map((faq, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <AccordionItem value={faq.id}>
                                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                                    <AccordionContent>
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </motion.div>
                </Accordion>
            </div>
        </section>
    );
}

export default Faq;