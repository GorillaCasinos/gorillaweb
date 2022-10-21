import { Eclipse } from '../components';
import { images } from '../constants/images';

const {
	eclipseSmallSky,
	eclipseSmallGreen,
	eclipseMediumPink,
	eclipseLargePurple,
	eclipseLargeOrange,
} = images;

const Eclipses = ({ children }) => {
	return (
		<div className='background-eclipses'>
			{/* HERO SECTION */}
			<Eclipse
				eclipse={eclipseLargePurple}
				animate={{ x: [20, 0, 30, 0], y: [30, 0, 20, 0] }}
				transition={{
					x: {
						yoyo: Infinity,
						duration: 10,
					},
					y: {
						yoyo: Infinity,
						duration: 7,
						ease: 'easeOut',
					},
				}}
			/>
			<Eclipse
				eclipse={eclipseSmallGreen}
				animate={{ scale: 1.3 }}
				transition={{ duration: 3, yoyo: Infinity }}
			/>
			<Eclipse
				eclipse={eclipseLargeOrange}
				animate={{ rotate: 360 }}
				transition={{ duration: 5, yoyo: Infinity }}
			/>
			<Eclipse
				eclipse={eclipseSmallSky}
				animate={{ x: [0, 10, 0], y: [0, 10, 0, -10], scale: 1.2 }}
				transition={{ duration: 5, yoyo: Infinity }}
			/>
			<Eclipse
				eclipse={eclipseMediumPink}
				animate={{ x: [0, 10, 0], y: [0, 10, 0, -10] }}
				transition={{ duration: 5, yoyo: Infinity }}
			/>
			{children}
		</div>
	);
};

export default Eclipses;
