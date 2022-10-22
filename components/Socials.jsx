import Link from 'next/link';
import {
	FaDiscord,
	FaInstagram,
	FaTelegramPlane,
	FaTwitter,
} from 'react-icons/fa';

const socialItems = [
	{ href: 'https://discord.gg/K7pGcjmKaB', icon: <FaDiscord /> },
	{ href: 'https://t.me/gorillacoinnft', icon: <FaTelegramPlane /> },
	{ href: 'https://twitter.com/gorilla_coin_', icon: <FaTwitter /> },
];

const Socials = ({ isSlider }) => {
	return (
		<div className={`socials ${isSlider ? 'slider' : ''}`}>
			{socialItems.map(({ href, icon }, i) => (
				<Link href={href} key={i}>
					<a target='_blank' rel='noopener noreferrer'>
						{icon}
					</a>
				</Link>
			))}
		</div>
	);
};

export default Socials;
