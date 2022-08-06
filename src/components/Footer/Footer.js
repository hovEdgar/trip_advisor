import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <a
                href="https://www.linkedin.com/in/edgar-hovsepyan-9ba0b3233/"
                target="_blank"
                rel="noreferrer"
            >
                {"♦ Trip{Advisor} by Edgar Hovsepyan © 2022 ♦"}
            </a>
        </div>
    );
};

export default Footer;