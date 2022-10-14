import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { images } from "../constants/images";

const { audit, charts, coinKromatika } = images;

const CoreStrength = () => {
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
        <h2 className="section-title">Core Strength</h2>
      </motion.div>

      <div className="hero__content">
        <p>By investing in Gorilla Token you will enjoy the following benefits:</p>
        <ul>
          <li>
            <p>
              • The <strong>best staking APY for Gorilla Token.</strong>
            </p>
          </li>
          <li>
            <p>
             • Earn Airdrops by <strong>staking</strong> Gorilla tokens.
            </p>
          </li>
          <li>
            <p>
             • Participate in the <strong>exclusive lottery </strong> at Gorilla Casinos and receive extra rewards</p>
          </li>
        </ul>
      </div>

      <h3 className="subtitle">These are our core building blocks</h3>
      <div className="cards-wrapper">
        <div className="card">
          <div className="card__header">
                                    <figure>
              <Image src={audit} alt="" />
            </figure>
          </div>
          <div className="card__body">
            <span className="card__title">Secured Smart Contract</span>
            <span className="card__content">
            GOR token is certified by CertiK - the world's leading blockchain security audit.  
              <br />
              <br />
              We have additionally increased security by using MythX - one of the best smart contract audits. 
            </span>
          </div>
        </div>

        <div className="card">
          <div className="card__header">
                                                <figure>
              <Image src={staking} alt="" />
            </figure>
          </div>
          <div className="card__body">
            <span className="card__title">Staking</span>
            <span className="card__content">
            By staking GOR tokens, you will have the opportunity to generate passive income and exclusive access to our lotteries and giveaways!
              <br />
              <br />
            </span>
          </div>
        </div>

        <div className="card">
          <div className="card__header">
                        <figure>
              <Image src={charts} alt="" />
            </figure>
          </div>
          <div className="card__body">
            <span className="card__title">Built on the Ethereum Network</span>
            <span className="card__content">
            We launched the Gorilla Token (GOR) on the Ethereum Network, which is by far the most popular and widely-used blockchain. 
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreStrength;
