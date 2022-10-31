import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { images } from '../constants/images';

const {
	metamaskLogo,
	arbitrumLogo,
	optimismLogo,
	polygonLogo,
	coinKromatika,
	coinsKromatika,
	circulatingSupply,
	coinsStash,
	goldLock,
} = images;

const Token = () => {
	return (
		<section id='section-token' className='section-padding'>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}>
				<h2 className='section-title'>Protocol Token</h2>
			</motion.div>
			<div className='token'>
				<motion.div
					initial={{ x: -100 }}
					whileInView={{ x: 0 }}
					transition={{ duration: 1 }}
					className='motion-div'>
				</motion.div>
				<div className='token__content'>
					<h3>What is $GOR?</h3>
					<p>
						$GOR is the utility token of the Gorilla Casinos. It is
						a non-mintable ERC20 token deployed on Ethereum with a fixed total
						supply of 100 million tokens. The tokenomic model of $GOR is
						deflationary by design since the tokens are being &nbsp;
						<Link href=''>
							<a target='_blank' rel='noopener noreferrer'>
								burnt.
							</a>
						</Link>
						<br />
						<br />
						GOR is the internal token of the Gorilla Casinos platform launched on ETH Blockchain.
						<br />
						<br />
						Our GOR token will be a utility token with many utilities in the upcoming casino, sportsbook, and poker software.
					</p>
				</div>
			</div>
			{/* CARDS UNDER TOKEN SECTION */}
			<div className='cards-wrapper'>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className='card'>
						<figure>
							<Image src={circulatingSupply} alt='' />
						</figure>
						<div className='card__overlay'>
							<span className='card__title'>Token Info</span>
							<span className='card__content'>
							<span>Gorilla Token Bassed Blockchain</span>
							<p>Ethereum Mainnet</p>
							<span>Ticker</span>
							<p>GRL</p>
							<span>Gorilla Token Smart Contract</span>
							<p>0xD178724F70082a89e9b5537Aa7a3466baCB2c737</p>
							<span>Total Supply</span>
							<p>100.000.000</p>
							<span>Decimals</span>
							<p>18</p>
					</span>
						</div>
				</motion.div>

				<motion.div 
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }} 
					transition={{ duration: 1 }} 
					className='card'>
						<figure>
							<Image src={coinsStash} alt='' />
						</figure>
						<div className='card__overlay'>
							<span className='card__title'>CS & Vesting </span>
							<span className='card__content'>
							<p>
							Initially 30.2 million tokens will be put on sale on our Crowdsale. 
							10 million tokens will be held on Gnosis Safe Wallet (Team Wallet).
							50.8 million tokens will be locked in liquidity on Uniswap V3.
							10 million tokens will be put on vesting for future Airdrops.
						</p>
						<p>
							10.000.000 $GOR have been locked on Unicrypt, or 10% of the
							total supply, with an average vesting of 2 years and 3 months.
						</p>
					</span>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1 }} 
						className='card'>
						<figure>
							<Image src={goldLock} alt='' />
						</figure>
						<div className='card__overlay'>
							<span className='card__title'>Increased security</span>
							<span className='card__content'>
						<p>
							We burned the proof of liquidity (position), for better security
							and in order to prevent rug pull hacks. You can consult the
							transaction &nbsp;
							<Link href=''>
								<a target='_blank' rel='noopener noreferrer'>
									here.
								</a>
							</Link>
						</p>
						<p>
							10 million $GOR tokens are held in a multisignature Gnosis Safe wallet.
						</p>
					</span>
						</div>
					</motion.div>
			</div>
			{/* HOW TO BUY UNDER TOKEN SECTION */}
			<div className='token'>
				<motion.div
					initial={{ x: -300 }}
					whileInView={{
						x: 0,
						scale: [1, 2, 2, 1, 1],
						rotate: [0, 0, 150, 200, 0],
						borderRadius: ['20%', '20%', '50%', '50%', '20%'],
					}}
					transition={{ duration: 1 }}
					className='motion-div'>
				</motion.div>
				<div className='token__content'>
					<h3>How to buy $GOR?</h3>
					<p>
						You can consult more detailed instructions using the below links:
					</p>
					<ul>
						<li>
							<figure>
								<Image
									src={metamaskLogo}
									alt=''
									layout='fixed'
									width='28px'
									height='28px'
								/>
							</figure>
							<p>
								How to buy $GOR token (via &nbsp;
								<Link href='https://app.gorilla-coin.com'>
									<a target='_blank' rel='noopener noreferrer'>
										Metamask
									</a>
								</Link>
								)?
							</p>
						</li>
						<li>
						<p>Enter our DAPP, and buy the $GOR token via our Crowdsale platform using your Metamask.</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Token;
