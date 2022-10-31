import { motion } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";
import { Accordion } from "../components";

const faqs = [
  {
    label: "What is ICO?",
    content: (
      <>
        ICO (Initial Coin Offering) is a way of raising money that is popular in
        the cryptocurrency industry. Instead of buying shares, the investors can
        buy a portion of the total amount of tokens.
      </>
    ),
  },
  {
    label: "Where can I get the Litepaper?",
    content: [
      "We are currently working on the Litepaper, and you will be able to read it until the end of September.",
    ],
  },
  {
    label: "What is Staking?",
    content: [
      "Thanks to staking, cryptocurrency owners now have a method to put their digital assets to use and generate passive income without having to sell them.",
      "So, when you stake your GOR tokens, you will be earning a portion of the casino’s profits.",
    ],
  },
  {
    label: "Why is Gorilla Token a good investment?",
    content: (
      <>
        Gorilla Token is a utility token of the whole GorillaCasinos ecosystem.
        You can use your tokens for staking, voting in the GorillaCasinos DAO,
        and for participating in various giveaways!
      </>
    ),
  },
  {
    label: "When will be the Gorilla Casino launched? ",
    content: [
      "We aim to launch the crypto-friendly Gorilla Casino in Q4 2022.",
    ],
  },
  {
    label: "How many tokens will be sold?",
    content: [
      "In total, 30,200,000 tokens will be sold during our ICO, which is 30,2% of all GOR tokens.",
    ],
  },
  {
    label: "Are you going to lock tokens in a liquidity pool?",
    content: [
      "Of course. We will immediately lock 20% of the max token supply to the Uniswap liquidity pool. By doing so, we assure you that there will always be liquidity for GOR tokens. ",
    ],
  },
  {
    label: "Is there going to be Bounty & Airdrop campaign?",
    content: (
      <>
        Yes. We have scheduled both Bounty and Airdrop campaigns. While the
        bounty campaign is intended for marketing purposes, Airdrop is going to
        deliver 20% of all tokens to the Gorilla Casino NFT holders.
      </>
    ),
  },
];

const FAQ = () => {
  return (
    <section id="section-faq" className="section-padding">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="section-title">FAQ</h2>
      </motion.div>
      <div className="container faqs">
        {faqs.map(({ label, content }, i) => (
          <Accordion label={label} content={content} key={i} id={i} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
