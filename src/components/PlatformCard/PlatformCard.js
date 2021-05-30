import React from "react";
import "./PlatformCard.css";
import cx from "classnames";

const PlatformCard = ({
  platform,
  username,
  title,
  icon,
  stat,
  trend,
  isTrendingUpwards,
}) => {
  return (
    <div className={`PlatformCard--container PlatformCard--${platform}`}>
      <span className="PlatformCard--platform-username">
        <img src={icon} alt={icon} className="PlatformCard--icon" />
        <span className="PlatformCard--username">{username}</span>
      </span>
      <span className="PlatformCard--stat">{stat}</span>
      <span className="PlatformCard--title">{title}</span>
      <span
        className={cx(
          "PlatformCard--trend",
          { "PlatformCard--trend-up": isTrendingUpwards },
          { "PlatformCard--trend-down": !isTrendingUpwards }
        )}
      >
        {trend}
      </span>
    </div>
  );
};

export { PlatformCard };
