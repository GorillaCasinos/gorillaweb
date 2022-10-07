import Image from 'next/image';
import Link from 'next/link';

const Tile = ({ href }) => {
	return (
		<Link href={href}>
			<a className='tile' target='_blank' rel='noopener noreferrer'>
			</a>
		</Link>
	);
};

export default Tile;
