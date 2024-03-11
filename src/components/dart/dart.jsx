import Fleche from '../../img/fleche.svg'
import Flechegame from '../../img/flechegame.svg'
import Carre from '../../img/carre.svg'
import '@fontsource/nunito'
const Dart = () => {
	return (
		<div className='dart-main'>
			<div className='dart-main-first'>
				<div className='dart-main-first-flechegame'>
					<img src={Flechegame} alt='Flechgame' />
				</div>
				<div className='dart-main-first-fleche'>
					<img src={Fleche} alt='Fleche' />
				</div>
			</div>
			<div className='dart-main-second'>
				<div className='dart-main-second-carre'>
					<img src={Carre} alt='Carre' />
				</div>
				<div className='dart-main-second-text'>
					<div className='dart-main-second-text-header'>Benefits of Playing Darts</div>
					<div className='dart-main-second-text-content'>
						During the game,you need quick decisions,evaluate the distance and
						strength of the throw,which develops logical thinking and
						reaction.In addition,playing darts help to improve fine motor skills
						of the hands and the eye, and also helps to increase concentration
						and reduce stress.
					</div>
				</div>
			</div>
		</div>
	)
}
export default Dart
