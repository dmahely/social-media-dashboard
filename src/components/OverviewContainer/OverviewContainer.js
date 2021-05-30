import React from "react";
import { OverviewCard } from "../OverviewCard/OverviewCard";
import "./OverviewContainer.css";
import facebookIcon from "../../../src/images/icon-facebook.svg";
import youtubeIcon from "../../../src/images/icon-youtube.svg";
import twitterIcon from "../../../src/images/icon-twitter.svg";
import instagramIcon from "../../../src/images/icon-instagram.svg";

const OverviewContainer = () => {
  return (
    <>
      <h2 className="OverviewContainer--heading">Overview - Today</h2>
      <div className="OverviewContainer--inner-container">
        <OverviewCard
          title="Page Views"
          icon={facebookIcon}
          stat="87"
          trend="3%"
          isTrendingUpwards={true}
        />

        <OverviewCard
          title="Likes"
          icon={facebookIcon}
          stat="52"
          trend="2%"
          isTrendingUpwards={false}
        />

        <OverviewCard
          title="Likes"
          icon={instagramIcon}
          stat="5462"
          trend="2257%"
          isTrendingUpwards={true}
        />

        <OverviewCard
          title="Profile Views"
          icon={instagramIcon}
          stat="52k"
          trend="1375%"
          isTrendingUpwards={true}
        />

        <OverviewCard
          title="Retweets"
          icon={twitterIcon}
          stat="117"
          trend="303%"
          isTrendingUpwards={true}
        />

        <OverviewCard
          title="Likes"
          icon={twitterIcon}
          stat="507"
          trend="553%"
          isTrendingUpwards={true}
        />

        <OverviewCard
          title="Likes"
          icon={youtubeIcon}
          stat="107"
          trend="19%"
          isTrendingUpwards={false}
        />

        <OverviewCard
          title="Total Views"
          icon={youtubeIcon}
          stat="1407"
          trend="12%"
          isTrendingUpwards={false}
        />
      </div>
    </>
  );
};

export { OverviewContainer };
