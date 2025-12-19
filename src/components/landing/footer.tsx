"use client";

import Link from "next/link";
import { motion } from "motion/react";

import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";

interface FooterProps {
  email: string;
  setEmail: (email: string) => void;
  handleSubscribe: (e?: React.FormEvent) => void;
  error: string | null;
  success: boolean;
  isLoading: boolean;
}

export const Footer = ({
  email,
  setEmail,
  handleSubscribe,
  error,
  success,
  isLoading,
}: FooterProps) => {
  return (
    <>
      <div className="rounded-full w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-300 to-transparent dark:from-transparent dark:via-zinc-600 dark:to-transparent"></div>
      <motion.footer
        className="px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-8xl mx-auto">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-8 sm:mb-12">
            {/* Left Side - Existing Content */}
            <div className="space-y-8 sm:space-y-12 content-center items-center ml-0 sm:ml-6 lg:ml-12">
              {/* Subscribe Section */}
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif bg-clip-text bg-gradient-stop bg-gradient-to-br from-black via-30% via-black to-black/30 dark:from-white dark:via-white dark:to-white/30 text-transparent mb-4 sm:mb-6">
                  Subscribe for updates
                </h2>
                <form
                  onSubmit={(e) => handleSubscribe(e)}
                  className="max-w-md mx-auto lg:mx-0 space-y-4"
                >
                  <input
                    type="email"
                    placeholder="Email Address*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-black/10 border border-black/20 rounded-lg text-black placeholder-black/50 focus:outline-none focus:border-black/40 dark:bg-white/10 dark:border-white/20 dark:text-white dark:placeholder-white/50 dark:focus:border-white/40 transition-colors"
                  />
                  {error && (
                    <p className="text-sm text-red-400 font-serif ">{error}</p>
                  )}
                  {success && (
                    <p className="text-sm text-green-400 font-serif ">
                      Successfully subscribed! Thank you for joining us.
                    </p>
                  )}
                  <p className="text-sm bg-clip-text bg-gradient-stop bg-gradient-to-br from-black/70 via-40% via-black/70 to-black/30 dark:from-white/70 dark:via-white/70 dark:to-white/30 text-transparent font-serif">
                    By submitting this form, you agree to receive updates about
                    Soldevkit UI. You can unsubscribe at any time.
                  </p>
                  <motion.button
                    type="submit"
                    disabled={isLoading || !email.trim()}
                    className="w-full px-6 py-3 bg-black/10 hover:bg-black/20 border border-black/20 rounded-lg text-black dark:bg-white/10 dark:hover:bg-white/20 dark:border-white/20 dark:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                  >
                    {isLoading ? "Subscribing..." : "Subscribe"}
                  </motion.button>
                </form>
              </motion.div>
            </div>

            {/* Right Side - Team Member Card */}
            <motion.div
              className="flex flex-col my-8 sm:my-12 lg:my-16"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Team Member Position */}
              <motion.div
                className="mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="text-sm uppercase tracking-wider text-black/70 dark:text-white/70 font-serif">
                  Lead Developer
                </p>
              </motion.div>

              {/* Team Member Profile */}
              <motion.div
                className="flex flex-col lg:flex-row items-center lg:items-start mb-16 gap-6 lg:gap-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* Team Member Image */}
                <div className="w-64 h-80 sm:w-72 sm:h-90 lg:w-80 lg:h-96 overflow-hidden rounded-lg bg-gradient-to-br from-black/10 to-black/5 border border-black/10 dark:from-white/10 dark:to-white/5 dark:border-white/10 flex-shrink-0">
                  <Image
                    src="/profile.jpg"
                    alt="Aman Satyawani"
                    className="w-full h-full object-cover"
                    width={400}
                    height={400}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      if (e.currentTarget.parentElement) {
                        e.currentTarget.parentElement.innerHTML =
                          '<div class="w-full h-full flex items-center justify-center text-black/50 dark:text-white/50 font-serif">Team Photo</div>';
                      }
                    }}
                  />
                </div>

                {/* Team Member Info */}
                <div className="relative flex flex-col gap-8 lg:gap-16 lg:ml-8 w-full text-center lg:text-left">
                  {/* Team Member Name */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-serif bg-clip-text bg-gradient-stop bg-gradient-to-br from-black via-30% via-black to-black/30 dark:from-white dark:via-white dark:to-white/30 text-transparent leading-tight">
                      Aman <br />
                      Satyawani
                    </p>
                  </motion.div>

                  {/* Team Member Details */}
                  <motion.div
                    className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {/* Toggle Button */}
                    <Link href="https://x.com/satyawani_aman" target="_blank">
                      <motion.div
                        className="w-16 h-16 lg:w-20 lg:h-20 flex justify-center items-center border border-black/35 hover:border-black/50 dark:border-white/35 dark:hover:border-white/50 rounded-full cursor-pointer transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <HiArrowRight
                          size={20}
                          className="text-black/70 dark:text-white/70 lg:text-[24px]"
                        />
                      </motion.div>
                    </Link>

                    {/* Team Member Copy */}
                    <div className="flex-1 max-w-sm lg:max-w-xs xl:hidden 2xl:block ">
                      <p className="text-black/60 dark:text-white/60 leading-relaxed font-serif text-sm lg:text-base">
                        Aman is a skilled developer with expertise in modern web
                        technologies and a passion for creating seamless user
                        experiences.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Team Member Index */}
            </motion.div>
          </div>
        </div>
      </motion.footer>
    </>
  );
};
