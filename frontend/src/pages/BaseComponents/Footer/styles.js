import styled from 'styled-components';


// Footer Container
export const FooterContainer = styled.footer`
	width: 100%;
  	height: 145px;

	display: flex;
	align-items: center;
	align-content: center;

	background-color: #FFFFFF;
    border-top: 1px solid #DCDCDC;
	
	z-index: 10;

	section {
		width: 95%;
		height: 80%;

		margin: auto;
		
		display: flex;
		flex-direction: column;
	}
`;


// Section que guarda as configuraçõess
export const ConfigSection = styled.div`
	width: 100%;
	height: 45%;

	display: flex;
	flex-direction: row;
	align-items: center;

	border-bottom: 1px solid #DCDCDC;
`;


// Menu do footer em forma de lista
export const ConfigMenuList = styled.ul`
	min-width: 600px;

	margin-left: 20px; 

	display: flex;
	flex-direction: row;
	justify-content: space-between;

	list-style: none;


	li {
		height: 30px;
		padding: 0 8px;
		background: transparent;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		border: 1px #DCDCDC solid;
		border-radius: 3px;

		cursor: pointer;

		:hover {
			background-color: #F0F0F0;
			border-color: #C6C6C6;
		}

		/* icon */
		i {
			font-size: 16px;
			font-weight: bold;
			color: #555555;
		}

		/* text */
		span {
			color: #555555;
			font-size: 10px;

			margin-left: 4px;
		}
	}
`;


// Footer Utils Links
export  const FooterLinksContainer = styled.div`
	width: 100%;
	height: 55%;

	display: flex;
	flex-direction: column;

	section {
		width: 100%;
		height: 50%;

		display: flex;
		justify-content: center;
		align-items: center;
		align-content: center;

		ul {
			width: 60%;
			height: 100%;

			list-style: none;

			display: flex;
			flex-direction: row;
			align-items: center;
			align-content: center;
			justify-content: space-between;

			li a {
				color: #555555;
				text-decoration: none;

				:hover {
					color: #167ac6;
					text-decoration: underline;
				}
			}
		}
	}

	#main-links li a {
		font-size: 15px;
		font-weight: bold;
	}

	#other-links li a {
		font-size: 13px;
	}
		
`;