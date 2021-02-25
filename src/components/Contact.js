import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ContactImage from "../assets/images/contactBkgd1.jpg";

const styles = makeStyles((theme) => ({
    mainContainer: {
        height: "90vh",
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
            <Grid item className={classes.contactBackground}>
                <Typography className={classes.contactText} variant="h1" align="center" style={{marginTop: "16rem", color: "ghostwhite"}}>
                <span className={classes.text1}>Steven Mercer</span>
                </Typography>
                <Typography className={classes.contactText} variant="h3" align="center" style={{  color: "ghostwhite"}}>
                    Phone : <br/><span className={classes.text2}>415-509-1227</span>
                </Typography>
                <Typography className={classes.contactText} variant="h3" align="center" style={{ color: "ghostwhite"}}>Email:
                    <a href="mailto:stevenmercer9913@gmail.com" style={{textDecoration: "none", color: "ghostwhite", overflow: "hide"}}> stevenmercer9913@gmail.com</a>
                </Typography>
                <Button className={classes.contactBtn} href="https://www.linkedin.com/in/stevemercer9913/" style={{ marginLeft: "39vw"}}>
                LinkdIn
                </Button>
                <Button className={classes.contactBtn} href="https://github.com/smerk3599" style={{ marginLeft: "9vw"}}>
                GitHub
                </Button>
            </Grid>
        </Grid>
		</React.Fragment>
	);
}
