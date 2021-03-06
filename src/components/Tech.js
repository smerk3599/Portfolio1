import React from "react";

import Grid from "@material-ui/core/Grid";
import {makeStyles, useTheme} from "@material-ui/styles";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faJsSquare, faNode, faReact} from "@fortawesome/free-brands-svg-icons";
import Typography from "@material-ui/core/Typography";


const styles = makeStyles((theme) => ({
	techIcons: {
		margin: "6vh 6vh 3vh 6vh",
		fontSize: "8vh",
		color: "white"
	},
	techNames: {
		margin: "1vh",
		color: "white",
		fontSize: "2vh",
	},
	tech: {
		height: "100vh"
	}
}));


export default function Tech(){
    const classes = styles();
    const technologies = [
        { name: "JavaScript", icon: faJsSquare },
        { name: "Node", icon: faNode },
        { name: "React", icon: faReact },
        ];

    return (
        <Grid item container id="tech" className={classes.tech} direction="row" style={{ backgroundColor: "black"}} justify="center">
            <Grid item>
				<Typography variant="h2" style={{ marginTop: "30vh", marginBottom: "-25vh", color: "white"}}>
					Technologies
				</Typography>
			</Grid>
            <Grid item container direction="row" alignItems="center" justify="center">
                {technologies.map((tech, index) => {
                    return (
                        <Grid item style={{ textAlign: "center"}} key={index    }>
                            <FontAwesomeIcon
                                icon={tech.icon} title={tech.name} className={classes.techIcons} alt={tech.name} />
                                <p className={classes.techNames}>{tech.name}</p>
                        </Grid>
                            )
                        })}
            </Grid>
        </Grid>
    )
}
