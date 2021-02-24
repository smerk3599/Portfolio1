import React from 'react';
import Grid from "@material-ui/core/Grid";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import Avatar from "./../assets/images/avatar.png";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";


const styles = makeStyles((theme) => ({
    aboutMeBody:{
        ...theme.typography.body1,
    },

}))

export default function About(){
    const classes = styles()
    const theme = useTheme()

    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <React.Fragment>
            <Grid container id="about" justify="space-around" alignItems="center" direction="row">
                <Grid item>
                    <Typography variant="h2" align={matchesSM ? "center" : "left"}>About Me</Typography>
                    <Typography variant="body1" className={classes.aboutMeBody}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse suscipit pellentesque justo, vel scelerisque purus vulputate a. Mauris commodo lacinia libero, eget consectetur tortor vestibulum vel. Suspendisse cursus ligula erat, in dictum ligula feugiat ac. Proin feugiat nulla non turpis elementum, sed accumsan ligula sagittis. Quisque aliquam suscipit sem, non dapibus mauris tempus molestie. Maecenas quis massa nec purus vestibulum fermentum non sit amet ligula. Proin vestibulum diam in enim accumsan tincidunt.
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
                    }}
        />

                </Grid>
            </Grid>
        </React.Fragment>
    )
}
