import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { images } from '../constants/images';

const {
	Scene_BluePurpleGold_Farming,
	Scene_BluePurpleGold_Trading,
	Scene_BluePurpleGold_NoLimits,
} = images;

const Fundamentals = () => {
	return (
		<section id='section-fundamentals' className='section-padding'>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}>
				<h2 className='section-title'>More On Our Fundamentals</h2>
			</motion.div>
			<div className='cards-wrapper'>
				<div className='card'>
					<figure>
						<Image src={Scene_BluePurpleGold_Farming} alt='' />
					</figure>
					<div className='card__body'>
						<span className='card__title'>Become a shareholder of Gorilla Casino</span>
						<span className='card__content'>
							<p>
							By buying GOR tokens, you will become one of the first people to access all exclusive benefits, including profit sharing, from Gorilla Casino.
							</p>
						</span>
						<Link href=''>
							<a
								className='btn btn-solid btn-block'
								target='_blank'
								rel='noopener noreferrer'>
								Let’s go
							</a>
						</Link>
					</div>
				</div>

				<div className='card'>
					<figure>
						<Image src={Scene_BluePurpleGold_Trading} alt='' />
					</figure>
					<div className='card__body'>
						<span className='card__title'>Be a part of Gorrila Casino DAO</span>
						<span className='card__content'>
							<p>
							Depending on the number of tokens you are going to hold, you will get into Tier 1, Tier 2, or Tier 3 of our DAO community. The higher your tier, the bigger your voting right will be in the Gorilla DAO.
							</p>
						</span>
						<Link href=''>
							<a
								className='btn btn-solid btn-block'
								target='_blank'
								rel='noopener noreferrer'>
								Let’s go
							</a>
						</Link>
					</div>
				</div>

				<div className='card'>
					<figure>
						<Image src={Scene_BluePurpleGold_NoLimits} alt='' />
					</figure>
					<div className='card__body'>
						<span className='card__title'>Receive one of the special NFTs</span>
						<span className='card__content'>
							<p>
							All participants in our DAO are going to enter the exclusive investor’s raffle, where we will randomly give 5 of the 25 special Gorrila NFTs. Keep in mind that there are going to be only 25 Special Gorilla NFTs, meaning that they will give you the best benefits as.
							</p>
						</span>
						<div className='btn btn-solid btn-block isDisabled'>
							Coming soon
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Fundamentals;
