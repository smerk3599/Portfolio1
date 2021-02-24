import { createMuiTheme } from "@material-ui/core/styles";

const myBlue = "#00017c";
const myGreen = "#4EC274";
const myGray = "#868686";

export default createMuiTheme({
	palette: {
		common: { blue: `${myBlue}`, gold: `${myGreen}` },
		primary: { main: `${myBlue}` },
		secondary: { main: `${myGreen}` },
	},
	typography: {
		tab: {
			fontFamily: "Ralelway",
			textTransform: "none",
			fontWeight: 700,
			fontSize: "1rem",
		},
		body1:{
			maxWidth: "45ch"
		}
	},
	button: {
		margin: "1rem 2.5rem",
		backgroundColor: myGreen,
		color: "#fff",
		borderRadius: "35px",
		height: "3rem",
		padding: "10px",
		fontSize: "1rem",
		boxShadow:"5px 5px 8px black, 10px 10px 8px ghostwhite"
	}

});
