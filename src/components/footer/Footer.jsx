import SocialMediaLink from "./SocialMediaLink";

import DiscordLogo from "../../assets/icons/social-media/discord-logo.svg";
import YouTubeLogo from "../../assets/icons/social-media/youtube-logo.svg";
import GitHubLogo from "../../assets/icons/social-media/github-logo.svg";

function Footer() {

    return (
        <>
            <div className="bg-footer-bg w-[100vw] h-[85px] fixed bottom-0 flex justify-center">
                <SocialMediaLink handle="@kshau" icon={DiscordLogo}/>
                <SocialMediaLink handle="@kshau_" icon={YouTubeLogo} href="https://youtube.com/@kshau_"/>
                <SocialMediaLink handle="@kshau" icon={GitHubLogo} href="https://github.com/kshau"/>
            </div>
        </>
    )

}

export default Footer;