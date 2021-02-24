import React from 'react';
import Grid from "@material-ui/core/Grid";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import Avatar from "./../assets/images/avatar.jpg";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";


const styles = makeStyles((theme) => ({
    aboutMeBody:{
        ...theme.typography.body1,
        },
    about:{
        height: "100vh"
    }
}))

export default function About(){
    const classes = styles()
    const theme = useTheme()

    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <React.Fragment>
            <Grid container id="about" className={classes.about} justify="space-around" alignItems="center" direction="row">
                <Grid item>
                    <Typography variant="h2" align={matchesSM ? "center" : "left"}>About Me</Typography>
                    <Typography variant="body1" className={classes.aboutMeBody}>I have been in customer service for a long time, and I am excited about working with applications and technologies for the web.  I want to create interesting and highly functional software while making a big difference in the processes as they are created.    I look forward to working with other developers to achieve these goals. When I am not coding or goofing it up with my family, I love the mountains, hockey, and games of all sorts.
                    </Typography>
                </Grid>
                <Grid item>
                <img
                    src={Avatar}
                    alt={"avatar"}
                    style={{
                        maxWidth: "15rem",
                        borderRadius: "50%",
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "1rem",
                        marginBottom: "1rem"
                    }}
        />

                </Grid>
            </Grid>
        </React.Fragment>
    )
}
