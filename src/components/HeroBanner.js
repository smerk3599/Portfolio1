import React from "react"
import { useTheme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Button from "@material-ui/core/Button";
import BannerImage from "../assets/images/BannerImage2.jpg";


const styles = makeStyles((theme) => ({
	mainContainer: {
        height: "90vh",
	},
    heroBackground: {
        backgroundImage: `url(${BannerImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    },
    contactBtn:{
        ...theme.button,
        marginLeft: "1rem"
    },
    heroBannerText:{
        margin: "1rem"
    },
	text:{
		color: "black",
		transition: theme.transitions.create('color', {
  		duration: theme.transitions.duration.standard,
	}),
		"&:hover": {
  		color: "yellow",
		...theme.typography.text2,
		}
	},
	text2:{
		color: "black",
		transition: theme.transitions.create('color', {
  		duration: theme.transitions.duration.standard,
	}),
		"&:hover": {
  		color: "blue",
		...theme.typography.text2,
		}
	},
	text3:{
		color: "black",
		transition: theme.transitions.create('color', {
  		duration: theme.transitions.duration.standard,
	}),
		"&:hover": {
  		color: "crimson",
		...theme.typography.text2,
		}
	}
}));

export default function HeroBanner() {
	const classes = styles();
    const theme = useTheme()

	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

	const heroBanner = (
		<React.Fragment>
			<Grid
				id="home"
				className={classes.mainContainer}
				container
				alignItems="center"
				direction="row"
			>
				<Grid container item className={classes.heroBackground}>
					<Grid item justify="center" alignItems="center" style={{width: "100%"}}>
						<Typography className={classes.heroBannerText} variant="h4" align="center" style={{marginTop: matchesXS ? "14vh" : "20vh"}}>
							<span className={classes.text}>Hello</span>, I'm
						</Typography>
						<Typography className={classes.heroBannerText} variant="h2" align="center">
							<span className={classes.text2}>Steven Mercer</span>,
						</Typography>
						<Typography className={classes.heroBannerText} variant="h2" align="center">
	                        I do <span className={classes.text3}>amazing</span> things for the web!
						</Typography>
					</Grid>
					<Grid container item justify="center"  style={{width: "100%"}}>
						<Grid item>
		                    <Button className={classes.contactBtn} href="mailto:stevenmercer9913@gmail.com">
							Contact Me
						    </Button>
						</Grid>
						<Grid item>
							<Button className={classes.contactBtn} href="https://docs.google.com/document/d/e/2PACX-1vQdhtceG3S1furer09jltTghkeUKg4NVYQmcmf8lIHTlaMzsYjJcyl4dFydZfqLedCdPy5mcrJ7ySnI/pub">
							Resume
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	);
	return <React.Fragment>{heroBanner}</React.Fragment>;
}
