import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { images } from "../constants/images";
import { Socials } from "../components";

const { Dionis, Ogi } = images;

const Team = () => {
  return (
    <section
      id="section-core-strength"
      className="section-padding section-core-strength"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="section-title">Team</h2>
      </motion.div>

      <div className="cards-wrapper">
        <div className="card">
          <figure>
            <Image src={Ogi} alt="" />
          </figure>
          <div className="card__body">
            <span className="card__title">Ognjen Karisik</span>
            <span className="card__content">CEO & Founder</span>
          </div>
        </div>

        <div className="card">
          <figure>
            <Image src={Dionis} alt="" />
          </figure>
          <div className="card__body">
            <span className="card__title">Dionis Markov</span>
            <span className="card__content">
              CTO & Founder
              <br />
              <br />
            </span>
          </div>
        </div>

        <div className="card">
          <div className="card__body">
            <span className="card__title">Lazar Zivkovic</span>
            <span className="card__content">Co-Founder</span>
          </div>
        </div>

        <div className="card">
          <div className="card__body">
            <span className="card__title">Kristijan</span>
            <span className="card__content">Co-Founder</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
