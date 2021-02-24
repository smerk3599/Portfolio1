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
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
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
    }
}));

export default function Header(props) {
    const classes = styles()
    const theme = useTheme()

	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const routes = [
        {name: "About", link: "#about"},
		{ name: "Contact", link: "#contact" },
        { name: "Experience", link: "#experience" },
	];

    const tabs = (
		<React.Fragment>
			<div className={classes.tabContainer}>
				{routes.map((route, id) => {
					return (
						<Link to={route.link} style={{ textDecoration: "none", color:"#fff"}}>
                    		<Tab value={route.id} label={route.name} key={`${route}.${id}`}>
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
				<Link to="#about">
				<FontAwesomeIcon
						icon={faQuestionCircle}
						title="About Me"
						className={classes.navIcons}
						alt={"About Me"}
					/>
				</Link>
			</div>


		</React.Fragment>
	);

	return (
		<React.Fragment>
			<AppBar position="fixed" color="secondary">
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
