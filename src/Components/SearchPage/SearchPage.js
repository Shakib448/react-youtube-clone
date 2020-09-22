import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "../ChannelRow/ChannelRow";
import SearchVideoRow from "../SearchVideoRow/SearchVideoRow";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://img.youtube.com/vi/NT299zIk2JY/mqdefault.jpg"
        channel="Sonny Sangha"
        verified
        subs="645k"
        noOfVideos={352}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quo. Molestias, odit exercitationem pariatur repudiandae veniam tenetur. Fuga amet consequatur eligendi perspiciatis ad veniam distinctio laudantium quia numquam sunt! Sint eum amet quod magni quasi repudiandae sapiente porro alias velit nisi nam, commodi animi, dolorum dicta vero! Ab, vitae cumque!"
      />
      <hr />

      <SearchVideoRow
        image="https://img.youtube.com/vi/NT299zIk2JY/mqdefault.jpg"
        views="213M"
        channel="CleverProgrammer"
        timestamp="34 second ago"
        subs="234k"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quo. Molestias, odit exercitationem pariatur repudiandae veniam tenetur. Fuga amet consequatur eligendi perspiciatis ad veniam distinctio laudantium quia numquam sunt! Sint eum amet quod magni quasi repudiandae sapiente"
        title="Become a Web developer in 10 minutes | 2019/2020"
      />

      <SearchVideoRow
        image="https://img.youtube.com/vi/FV6oyYlr9Jc/mqdefault.jpg"
        channel="
        Jhankar Mahbub
        "
        subs="32k"
        views="31M"
        timestamp="1 day ago"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quo. Molestias, odit exercitationem pariatur repudiandae veniam tenetur. Fuga amet consequatur eligendi perspiciatis ad veniam distinctio laudantium quia numquam sunt! Sint eum amet quod magni quasi repudiandae sapiente"
        title="সিম্পল পাইথন ট্রিক ।। ঘরে বসেই পাইথন দিয়ে বিশ্বভ্রমন ।। পাইথন টিউটোরিয়াল "
      />
      <SearchVideoRow
        image="https://img.youtube.com/vi/5FNpj8VYXCo/mqdefault.jpg"
        channel="PC Builder Bangladesh
        "
        timestamp="3 day ago"
        views="1M"
        subs="90k"
        timestamp="6 day ago"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quo. Molestias, odit exercitationem pariatur repudiandae veniam tenetur. Fuga amet consequatur eligendi perspiciatis ad veniam distinctio laudantium quia numquam sunt! Sint eum amet quod magni quasi repudiandae sapiente"
        title="Almost All Budget SATA SSD Reviewed | Walton, Transcend, Team, Colorful, Gigabyte, WD, ADATA"
      />
      <SearchVideoRow
        image="https://img.youtube.com/vi/wuJJGBb5yys/mqdefault.jpg"
        channel="PC Builder Bangladesh"
        views="254k"
        timestamp="7 day ago"
        subs="678k"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quo. Molestias, odit exercitationem pariatur repudiandae veniam tenetur. Fuga amet consequatur eligendi perspiciatis ad veniam distinctio laudantium quia numquam sunt! Sint eum amet quod magni quasi repudiandae sapiente"
        title="SSD vs HDD | Single Upgrade - Big Performance Boost"
      />

      <SearchVideoRow
        image="https://img.youtube.com/vi/BPPiTI5yO0A/mqdefault.jpg"
        channel="PC Builder Bangladesh"
        views="343M"
        timestamp="22 day ago"
        subs="342k"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quo. Molestias, odit exercitationem pariatur repudiandae veniam tenetur. Fuga amet consequatur eligendi perspiciatis ad veniam distinctio laudantium quia numquam sunt! Sint eum amet quod magni quasi repudiandae sapiente"
        title="A Minimal and Clean এডিটিং পিসি বিল্ড for Sohag360 ft Geforce RTX 2070 Super"
      />
      <SearchVideoRow
        image="https://img.youtube.com/vi/x1y5aLnVc1U/mqdefault.jpg"
        channel="PC Builder Bangladesh"
        views="1M"
        timestamp="5 day ago"
        subs="233k"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quo. Molestias, odit exercitationem pariatur repudiandae veniam tenetur. Fuga amet consequatur eligendi perspiciatis ad veniam distinctio laudantium quia numquam sunt! Sint eum amet quod magni quasi repudiandae sapiente"
        title="SteamBoy - Best Gaming Builds of BD | ft. RTX 2080ti Kudan"
      />
    </div>
  );
};

export default SearchPage;
