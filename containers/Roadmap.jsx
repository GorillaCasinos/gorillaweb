import { motion } from 'framer-motion';
import { Fragment, useRef } from 'react';
import { Divider, Quarter } from '../components';

const quarters = [
	{
		title: 'Q4 2022',
		goals: [
			{
				status: true,
				goal: 'Launching the Gorilla Token on Ethereum Mainnet (audit completion).',
			},
			{
				status: true,
				goal: 'Launching Gorilla Crowdsale.',
			},
			{
				status: false,
				goal: 'Launching Gorilla Casino',
			},
		],
	},
	{
		title: 'Q1 2022',
		goals: [
			{
				status: false,
				goal: 'Launching Gorilla NFT',
			},
			{
				status: false,
				goal: 'Liquidity farming rewards for Gorilla liquidity providers on Uniswap.',
			},
			{
				status: false,
				goal: 'CEX listing.',
			},
		],
	},
	{
		title: 'Q3 2023',
		goals: [
			{
				status: false,
				goal: 'Native GOR staking / yield farming.',
			},
			{
				status: false,
				goal: 'Launching of a governance token.',
			},
			{
				status: false,
				goal: 'Distribution of governance token to Gorilla Casino users.',
			},
			{
				status: false,
				goal: 'DAO',
			},
		],
	},
];

const Roadmap = () => {
	return (
		<section id='section-roadmap' className='section-padding'>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}>
				<h2 className='section-title'>Roadmap</h2>
			</motion.div>
			<div className='roadmap container'>
				{quarters.map((quarter, i) => (
					<Fragment key={i}>
						<Quarter quarter={quarter} />
						<span className='checkpoint' />
					</Fragment>
				))}
				<Divider type='vertical' h='58rem' w='0' />
			</div>
		</section>
	);
};

export default Roadmap;
