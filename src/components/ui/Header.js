import React from 'react'
import  Logo from "../../assets/images/logo.png"
import { HashLink as Link } from "react-router-hash-link";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// ==========
// MUI-CORE
// ==========
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { faQuestionCircle, faPaperPlane, faCogs, faEye, faHome} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ==========
// MUI-STYLES
// ==========
import { useTheme, makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
	toolBarMargin: {
		...theme.mixins.toolbar,
		marginBottom: "2em",
	},
    logo: {
        marginLeft: "2rem",
        width: "6rem",
    },
    tabContainer: {
        marginLeft: "auto",
		[theme.breakpoints.down("xs")]: {
			marginRight: "2rem"
		}
    },
	navIcons:{
		margin: " auto 1em",
		color: "black"
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
	}
}));

export default function Header(props) {
    const classes = styles()
    const theme = useTheme()

	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const routes = [
		{ name: "Home", link: "#home"},
        { name: "About", link: "#about"},
		{ name: "Technologies", link: "#tech" },
		{ name: "Contact", link: "#contact" },
        { name: "Experience", link: "#experience" },
	];

    const tabs = (
		<React.Fragment>
			<div className={classes.tabContainer}>
				{routes.map((route, id) => {
					return (
						<Link to={route.link} style={{ textDecoration: "none", color:"#000"}}>
                    		<Tab className={classes.text} value={route.id} label={route.name} key={`${route}.${id}`}>
    							{route.name}
    						</Tab>
						</Link>
				)})}
			</div>


		</React.Fragment>
	);

	const icons = (
		<React.Fragment>
			<div className={classes.tabContainer}>
			<Link to="#home">
				<FontAwesomeIcon
						icon={faHome}
						title="Home"
						className={classes.navIcons}
						alt={"Home"}
					/>
			</Link>
				<Link to="#about">
					<FontAwesomeIcon
							icon={faQuestionCircle}
							title="About Me"
							className={classes.navIcons}
							alt={"About Me"}
						/>
				</Link>
				<Link to="#tech">
					<FontAwesomeIcon
						icon={faCogs}
						title="Technologies"
						className={classes.navIcons}
						alt={"technologies"}
					/>
				</Link>
				<Link to="#contact">
					<FontAwesomeIcon
						icon={faPaperPlane}
						title="Contact"
						className={classes.navIcons}
						alt={"Contact"}
					/>
				</Link>
				<Link to="#experience">
					<FontAwesomeIcon
						icon={faEye}
						title="Experience"
						className={classes.navIcons}
						alt={"Experience"}
					/>
				</Link>
			</div>


		</React.Fragment>
	);

	return (
		<React.Fragment>
			<AppBar position="fixed" color="secondary" style={{boxShadow: "5px 5px 8px black, 10px 10px 8px ghostwhite"}}>
                <Toolbar disablegutters>
                    <Button disableRipple>
                        <img src={Logo} className={classes.logo} alt={"logo"}/></Button>
						{matchesXS ? icons : tabs}
						</Toolbar>
			</AppBar>
            <div className={classes.toolBarMargin}></div>
		</React.Fragment>
	);
}
