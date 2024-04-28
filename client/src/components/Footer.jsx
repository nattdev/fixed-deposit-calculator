import GithubIcon from "../assets/icons/githubIcon.svg";

function Footer() {
    return (
        <footer className="text-sm sm:text-base m-3 mt-6 font-normal flex dark:text-white justify-center items-center">
            <p className="mr-3">Develop and Design by nattdev</p><a target="_blank" href="https://github.com/nattdev">
                <img src={GithubIcon}></img>
            </a>
        </footer>
    );
}

export default Footer;