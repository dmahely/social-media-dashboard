import React from "react";
import { PlatformCard } from "../PlatformCard/PlatformCard";
import "./PlatformContainer.css";
import facebookIcon from "../../../src/images/icon-facebook.svg";
import youtubeIcon from "../../../src/images/icon-youtube.svg";
import twitterIcon from "../../../src/images/icon-twitter.svg";
import instagramIcon from "../../../src/images/icon-instagram.svg";

const PlatformContainer = () => {
  return (
    <div className="PlatformContainer--container">
      <PlatformCard
        platform="facebook"
        username="@nathanf"
        title="Followers"
        icon={facebookIcon}
        stat="1987"
        trend="12 Today"
        isTrendingUpwards={true}
      />

      <PlatformCard
        platform="twitter"
        username="@nathanf"
        title="Followers"
        icon={twitterIcon}
        stat="1044"
        trend="99 Today"
        isTrendingUpwards={true}
      />

      <PlatformCard
        platform="instagram"
        username="@realnathanf"
        title="Followers"
        icon={instagramIcon}
        stat="11k"
        trend="1099 Today"
        isTrendingUpwards={true}
      />

      <PlatformCard
        platform="youtube"
        username="Nathan F."
        title="Subscribers"
        icon={youtubeIcon}
        stat="8239"
        trend="144 Today"
        isTrendingUpwards={false}
      />
    </div>
  );
};

export { PlatformContainer };
