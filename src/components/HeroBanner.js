import React from "react"
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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
        marginLeft: "1rem"
    },
	text:{
		color: "black",
		transition: theme.transitions.create('color', {
  		duration: theme.transitions.duration.standard,
	}),
		"&:hover": {
  		color: "yellow",
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
		}
	}
}));

export default function HeroBanner() {
	const classes = styles();
	const heroBanner = (
		<React.Fragment>
			<Grid
				className={classes.mainContainer}
				container
				alignItems="center"
				direction="row"
			>
				<Grid item className={classes.heroBackground}>
					<Typography className={classes.heroBannerText} variant="h4" align="left" style={{marginTop: "1em", marginLeft: "5.5em"}}>
						<span className={classes.text}>Hello</span>, I'm
					</Typography>
					<Typography className={classes.heroBannerText} variant="h2" align="left" style={{ marginLeft: "3em"}}>
						<span className={classes.text2}>Steven Mercer</span>,
					</Typography>
					<Typography className={classes.heroBannerText} variant="h2" align="left" style={{ marginLeft: "3em"}}>
                        I do <span className={classes.text3}>amazing</span> things for the web!
					</Typography>
                    <Button className={classes.contactBtn} href="mailto:stevenmercer9913@gmail.com" style={{ marginLeft: "11.5em"}}>
					Contact Me
				    </Button>
					<Button className={classes.contactBtn} href="https://docs.google.com/document/d/e/2PACX-1vQdhtceG3S1furer09jltTghkeUKg4NVYQmcmf8lIHTlaMzsYjJcyl4dFydZfqLedCdPy5mcrJ7ySnI/pub" style={{ marginLeft: "11.5em"}}>
					Resume
					</Button>
				</Grid>
			</Grid>
		</React.Fragment>
	);
	return <React.Fragment>{heroBanner}</React.Fragment>;
}
