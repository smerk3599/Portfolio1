import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Project1 from "./../assets/images/project1.png";
import Project2 from "./../assets/images/project2.png";
import Project3 from "./../assets/images/project3.png";
import Project4 from "./../assets/images/project4.png";

const styles = makeStyles((theme) => ({
    ghBtn: {
		...theme.button,
		marginLeft: "5vw"
	},
    exp:{
        height: "110vh",
        backgroundColor: "ivory"
    },
	project:{
		height: "20vh",
		width: "16vh",
		marginBottom: "20vh"
	},
	projectImages:{
		height: "20vh",
		width: "16vh"
	}
}))

export default function Experience() {

 	const classes = styles()
	const theme = useTheme()
	const projects = [
		{ name: "Lyrics", image: Project1, ghUrl: "https://github.com/smerk3599/Song_Lyrics_app", projectUrl: "https://smerk3599.github.io/Song_Lyrics_app/" },
		{ name: "Favorites", image: Project2, ghUrl: "https://github.com/smerk3599/favorites", projectUrl: "https://favorites9913.herokuapp.com/category"   },
		{ name: "Science Library", image: Project3, ghUrl: "https://github.com/EvanEpperson/allScienceLibrary", projectUrl: "https://allsciencelibrary.herokuapp.com/"  },
		{ name: "Match Me", image: Project4, ghUrl: "https://github.com/smerk3599/match_me_frontend", projectUrl: "https://match-me-card-game.herokuapp.com/"   },
		];
	return (
		<React.Fragment>
			<Grid container id="experience" className={classes.exp} direction="column" style={{ backgroundColor: "black"}} justify="center" alignItems="center">
	            <Grid item><Typography variant="h2" style={{ color: "white", margin: "13vh auto 8vh auto"}}>Projects</Typography></Grid>
	            <Grid item container direction="row" alignItems="center" justify="space-around">
	                {projects.map((project, index) => {
	                    return (
	                        <Grid item className={classes.project} style={{ textAlign: "center"}} key={index}>
	                            <div>
									<a  href={project.projectUrl}><img src={project.image} className={classes.projectImages} alt={project.name} /></a>
	                                <p className={classes.projectNames} style={{ color: "white"}}>{project.name}</p>
					                <Button className={classes.ghBtn} href={project.ghUrl} style={{ marginLeft: "1.5vw"}}>
					                GitHub
					                </Button>
								</div>
	                        </Grid>
	                            )
	                        })}
	            </Grid>
	        </Grid>
		</React.Fragment>
	);
}
