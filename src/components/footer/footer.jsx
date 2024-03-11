import '@fontsource/nunito'
function Footer() {
	return (
		<div className='footer'>
			<div className='footer-content'>
				<div className='footer-content-header'>Don't miss your chance</div>
				<div className='footer-content-text'>
					Until the end of the promotion
				</div>
				<div className='footer-content-form'>
					<div className='footer-content-form-input'>
						<div className='footer-content-form-input-first'>
							<input placeholder='Your name' className='' />
						</div>
						<div className='footer-content-form-input-second'>
							<input placeholder='Your name' className='' />
						</div>
					</div>
					<div className='footer-content-form-button'>
						<button>Get in now</button>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Footer
