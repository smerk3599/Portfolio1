import React from "react"
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";
import BannerImage from "../assets/images/BannerImage.jpg";


const styles = makeStyles((theme) => ({
	mainContainer: {
        height: "80vh",
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
					<Typography className={classes.heroBannerText} variant="h5" align="left" style={{marginTop: "1em"}}>
						Hello I'm
					</Typography>
					<Typography className={classes.heroBannerText} variant="h2" align="left">
						Steven Mercer
					</Typography>
					<Typography className={classes.heroBannerText} variant="h2" align="left">
                        I do amazing things for the web!
					</Typography>
                    <Button className={classes.contactBtn} href="mailto:stevenmercer9913@gmail.com">
					Contact Me
				    </Button>
				</Grid>
			</Grid>
		</React.Fragment>
	);
	return <React.Fragment>{heroBanner}</React.Fragment>;
}
