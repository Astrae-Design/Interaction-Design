"use client"

import { companyLogos } from "@/constants";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Image from "next/image";


const CompanyLogos = () => {
    return (
        <section className=" w-full py-8 z-20 relative flex flex-col items-center mt-28">
            <h6 className=" font-medium opacity-80 text-base md:text-lg">Trusted by 24+ Startups and Businesses for Design and Development</h6>
            <div className=" max-w-6xl mx-auto w-full mt-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 w-full relative group">
                    {companyLogos.map((logo, index) => (
                        <div key={index} className={`w-full border bg-[#F6F6F6] py-4 flex items-center justify-center ${index === 0 ? 'xl:rounded-tl-xl' :
                            index === 5 ? 'xl:rounded-tr-xl' :
                                index === 18 ? 'xl:rounded-bl-xl' : ''
                            }`}>
                            <motion.div
                                className="relative flex items-center justify-center object-contain"
                                style={{
                                    width: `${logo.width}px`,
                                    height: `${logo.height}px`,
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: "easeOut"
                                }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <Image
                                    fill
                                    quality={100}
                                    src={`/companies/${logo.image}`}
                                    alt={logo.name}
                                    sizes={`${Math.max(logo.width, logo.height)}px`}
                                    className="object-contain"
                                />
                            </motion.div>
                        </div>
                    ))}
                    <div className=" w-full border py-2.5 px-2.5 xl:rounded-br-xl bg-[#F6F6F6]">
                        <div className=" text-sm md:text-[15px] bg-[#F6F6F6] border border-dashed hover:border-none hover:bg-[#002BBA] hover:text-white cursor-pointer border-[#002BBA] w-full h-full text-[#002BBA] font-medium gap-1 xl:rounded-lg flex items-center justify-center">
                            <p>Your Logo</p> <Plus className=" size-4" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CompanyLogos;