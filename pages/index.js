import { Blur, Navbar, Seo, Socials } from '../components';
import {
	Eclipses,
	FAQ,
	Footer,
	Hero,
	HowItWorks,
	Qualities,
	Roadmap,
	Token,
} from '../containers';

export default function Home() {
	return (
		<div className='layout-container'>
			<Seo />
			<Eclipses />
			<Navbar />
			<Blur>
				<Hero />
				<Qualities />
				<Token />
				<Roadmap />
				<HowItWorks />
				<FAQ />
			</Blur>
			<Footer />
			<Socials isSlider={true} />
		</div>
	);
}
