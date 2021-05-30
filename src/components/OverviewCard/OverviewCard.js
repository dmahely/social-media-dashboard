import React from "react";
import "./OverviewCard.css";
import cx from "classnames";

const OverviewCard = ({ title, icon, stat, trend, isTrendingUpwards }) => {
  return (
    <div className="OverviewCard--container">
      <div className="OverviewCard--col1">
        <span className="OverviewCard--title">{title}</span>
        <img src={icon} alt={icon} className="OverviewCard--icon" />
      </div>
      <div className="OverviewCard--col2">
        <span className="OverviewCard--stat">{stat}</span>
        <span
          className={cx(
            "OverviewCard--trend",
            { "OverviewCard--trend-up": isTrendingUpwards },
            { "OverviewCard--trend-down": !isTrendingUpwards }
          )}
        >
          {trend}
        </span>
      </div>
    </div>
  );
};

export { OverviewCard };
