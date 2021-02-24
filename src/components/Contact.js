import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = makeStyles((theme) => ({
    contactBackground:{
        },
    contact:{
        height: "100vh"
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
                <Typography className={classes.heroBannerText} variant="h4" align="left" style={{marginTop: "1em", marginLeft: "5.5em"}}>
                Phone : 415-509-1227
                </Typography>
                <Typography className={classes.heroBannerText} variant="h2" align="left" style={{ marginLeft: "3em"}}>
                    <span className={classes.text2}>Steven Mercer</span>,
                </Typography>
                <Typography className={classes.heroBannerText} variant="h2" align="left" style={{ marginLeft: "3em"}}>
                    I do <span className={classes.text3}>amazing</span> things for the web!
                </Typography>
                <Button className={classes.contactBtn} href="mailto:stevenmercer9913@gmail.com" style={{ marginLeft: "11.5em"}}>
                GitHub
                </Button>
                <Button className={classes.contactBtn} href="https://docs.google.com/document/d/e/2PACX-1vQdhtceG3S1furer09jltTghkeUKg4NVYQmcmf8lIHTlaMzsYjJcyl4dFydZfqLedCdPy5mcrJ7ySnI/pub" style={{ marginLeft: "11.5em"}}>
                LinkdIn
                </Button>
            </Grid>
        </Grid>
		</React.Fragment>
	);
}
