"use client";

import { useState, useEffect } from "react";
import { CTASection } from "@/components/cta/cta-rectangle";
import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/ui/hero2";
import { useEmailSubscription } from "@/components/hooks/use-email-subscription";
import Manifesto from "@/components/manifest/manifest";
import { motion } from "motion/react";
import { StarsBackground } from "@/components/landing/starts-background";

const HomePage = () => {
  const [email, setEmail] = useState("");
  const { subscribe, error, success, isLoading } = useEmailSubscription();

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);

    return () => clearTimeout(scrollTimeout);
  }, []);

  const handleSubscribe = async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }

    if (!email.trim()) return;

    try {
      await subscribe(email.trim());
      setEmail("");
    } catch (err) {
      console.error("Subscription failed:", err);
    }
  };

  // Reset success/error state after 5 seconds
  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setEmail("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  return (
    <div>
      <div className="relative w-full min-h-screen selection:bg-white/20 selection:text-white">
        <Hero className="absolute z-10 h-full w-full" />
        <div className="relative z-10">
          <Header className="pointer-events-auto" />
          <main className="px-4 sm:px-6 md:px-12 lg:px-16 max-w-8xl mx-auto w-full pointer-events-none">
            <div className="pointer-events-auto">
              <HeroSection />
              {/* <div className="rounded-full w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-300 to-transparent dark:from-transparent dark:via-zinc-600 dark:to-transparent"></div>
              <Manifesto content="Soldevkit isn't just a UI library it's a complete design system. With a single CLI command, you get a powerful set of components to build stunning Solana dApps effortlessly." />
              <div className="rounded-full w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-300 to-transparent dark:from-transparent dark:via-zinc-600 dark:to-transparent"></div>
              <FeaturesSection />
              <div className="rounded-full w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-300 to-transparent dark:from-transparent dark:via-zinc-600 dark:to-transparent"></div> */}

              <StarsBackground className="w-full relative z-10">
                {/* <motion.section
                  className="py-8 sm:py-12 md:py-16 lg:py-24 content-center items-center flex flex-col -mt-8 sm:-mt-12 md:-mt-16"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  <CTASection
                    badge={{
                      text: "Get started",
                    }}
                    title="Start building with Soldevkit UI"
                    description="Build modern React applications with ease using Soldevkit UI, a collection of components and utilities."
                    action={{
                      text: "Get Started",
                      href: "/docs/introduction",
                      variant: "glow",
                      target: "_blank",
                    }}
                    className="max-w-4xl"
                  />
                </motion.section> */}
              </StarsBackground>
            </div>
          </main>
        </div>
        <div className="relative z-20">
          {/* <Footer
            email={email}
            setEmail={setEmail}
            handleSubscribe={handleSubscribe}
            error={error}
            success={success}
            isLoading={isLoading}
          /> */}
          <div className="w-full mb-8">
            <div className="rounded-full w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-300 to-transparent dark:from-transparent dark:via-zinc-600 dark:to-transparent"></div>
          </div>

          {/* Footer Links */}
          <motion.div
            className="text-center space-y-4 "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-sm bg-clip-text bg-gradient-stop bg-gradient-to-br from-black/70 via-40% via-black/70 to-black/30 dark:from-white/70 dark:via-white/70 dark:to-white/30 text-transparent">
              © 2025 Soldevkit UI. All rights reserved
            </p>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            className="text-center mt-4 space-y-4 text-xs bg-clip-text bg-gradient-stop bg-black/50 dark:bg-white/50 text-transparent max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p>
              Soldevkit UI is an open-source project. The components and design
              system are provided as-is for educational and development
              purposes. Users are responsible for ensuring compliance with
              applicable laws and regulations when building applications.
            </p>
            <p>
              The features described in these materials are for informational
              purposes only. All features may be modified, updated, or changed
              without prior notice.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
