import '@fontsource/nunito'
import Game from '../../img/game.svg'
const Electronic = () => {
	return (
		<div className='electronic-global'>
			<div className='electronic-global-first'>
				<div className='electronic-global-first-dart'>Electronics dart</div>
				<div className='electronic-global-first-number'>No.489</div>
				<div className='electronic-global-first-game'>
					The game of darts is useful not only as entertainment, but also as a
					training for the brain and coordination of movements.
				</div>
				<div>
					<button className='button-50'>Get it now</button>
				</div>
			</div>
			<div className='electronic-global-second'>
				<img src={Game} alt='game' />
			</div>
		</div>
	)
}
export default Electronic
