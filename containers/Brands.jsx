import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Tile } from '../components';
import { brands } from '../constants/brands';

const {
	cg2,
	uniswap,
	polygon,
	optimismHorizontal,
	chainlink,
	celer,
	arbitrum,
	dexguru,
	dextlogo,
	ethereum,
	vulkania,
} = brands;

const seenOn = [

];

const buildOn = [

];

const poweredBy = [

];

const Partnership = [];

const Brands = () => {
	return (
		<section id='section-brands' className='section-padding'>
			{/* SEEN ON */}
			<div className='brands'>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					<h2 className='brands__title'>As Seen On</h2>
				</motion.div>
				<div className='brands__links'>
					{seenOn.map(({ href, logo }, index) => (
						<Tile href={href} logo={logo} key={index} />
					))}
				</div>
			</div>
			{/* BUILT ON*/}
			<div className='brands'>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					<h2 className='brands__title'>Built On</h2>
				</motion.div>
				<div className='brands__links'>
					{buildOn.map(({ href, logo }, index) => (
						<Tile href={href} logo={logo} key={index} />
					))}
				</div>
			</div>
			<div className='brands-wrapper'>
				{/* POWERED BY */}
				<div className='brands'>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1 }}>
						<h2 className='brands__title'>Powered By</h2>
					</motion.div>
					<div className='brands__links'>
						{poweredBy.map(({ href, logo }, index) => (
							<Tile href={href} logo={logo} key={index} />
						))}
					</div>
				</div>
				{/* PARTNERSHIP */}
				<div className='brands'>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1 }}>
						<h2 className='brands__title'>Official Partners</h2>
					</motion.div>
					<div className='brands__links'>
						{Partnership.map(({ href, logo }, index) => (
							<Tile href={href} logo={logo} key={index} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Brands;
