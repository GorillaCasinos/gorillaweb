import { Blur, Navbar, Seo } from '../components';
import {
	Eclipses,
	FAQ,
	Footer,
	Hero,
	HowItWorks,
	Qualities,
	Roadmap,
	Token,
	Team,
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
				<Team />
			</Blur>
			<Footer />
		</div>
	);
}
