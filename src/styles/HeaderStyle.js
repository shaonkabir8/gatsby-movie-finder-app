import styled from "styled-components";

const HeaderStyle = styled.div`
  .header {
		padding: 20px 0;


		.logo a {
			color: ${props => props.theme.color.yellow};
			padding: 4px 8px;
			border: 1px solid;
			border-radius: 3px;
			display: inline-block;
			font-size: 20px;
			transition: ${props => props.theme.transition};

			&:hover {
				color: ${props => props.theme.color.link};
			}
	}


	input[type='text'] {
		width: 100%;
		background: ${props => props.theme.color.light};
		color: ${props => props.theme.color.link};
		border: 1px solid transparent;

		&:focus {
			box-shadow: 0 0 5px ${props => props.theme.color.link};
		}
	}
}
`;

export default HeaderStyle;
