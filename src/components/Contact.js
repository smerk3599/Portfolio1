import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ContactImage from "../assets/images/contactBkgd1.jpg";

const styles = makeStyles((theme) => ({
    mainContainer: {
        height: "100vh",
    },
    contactBackground:{
        backgroundImage: `url(${ContactImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    },
    contact:{
        height: "100vh"
    },
    contactBtn:{
        ...theme.button
    },
    contactText: {
		...theme.typography.text1
    }
}))

export default function Contact() {
    const classes = styles();
	return (
		<React.Fragment>
        <Grid
            id="contact"
            className={classes.mainContainer}
            container
            alignItems="center"
            direction="column"
        >
            <Grid container item className={classes.contactBackground}>
                <Grid item justify="center" alignItems="center" style={{width: "100%"}}>
                <Typography className={classes.contactText} variant="h1" align="center" style={{marginTop: "18vh", color: "ghostwhite"}}>
                <span className={classes.text1}>Steven Mercer</span>
                </Typography>
                <Typography className={classes.contactText} variant="h2" align="center" style={{  color: "ghostwhite"}}>
                    Phone : <br/>415-509-1227
                </Typography>
                </Grid>
                <Grid container item justify="center" style={{width: "100%"}}>
                <Grid item>
                <Button className={classes.contactBtn} href="mailto:stevenmercer9913@gmail.com">
                Email
                </Button>
                </Grid>
                <Grid item justify="center" alignItems="center">
                <Button className={classes.contactBtn} href="https://www.linkedin.com/in/stevemercer9913/">
                LinkdIn
                </Button>
                </Grid>
                <Grid item justify="center" alignItems="center">
                <Button className={classes.contactBtn} href="https://github.com/smerk3599">
                GitHub
                </Button>
                </Grid>
                </Grid>
            </Grid>
        </Grid>
		</React.Fragment>
	);
}
