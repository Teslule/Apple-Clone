import React, { useState, useEffect } from "react";
// import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "./YoutubeVideos.css";

function AppleYoutube() {
  const [youTubeVideos, setYouTubeVideos] = useState([]);
  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyAeFImDREx8CyigF0djBR4zsxn5vlx2rRU"
    )
      .then((res) => res.json())
      .then((data) => {
        const youTubeVideosData = data.items;
        setYouTubeVideos(youTubeVideosData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(youTubeVideos);
  return (
    <section className="youtubeVideosWrapper">
      <div className="allvideosWrapper">
        <div className="container">
          <div className="row  justify-content-center text-center">
            <div className="col-12">
              <div className="title-wrapper">
                <br />
                <h1>Latest Videos </h1> <br />
              </div>
            </div>
            {youTubeVideos?.map((singleVideo) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div key={vidId} className="col-sm-12 col-md-6 col-lg-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank" rel="noreferrer">
                        <img
                          src={singleVideo.snippet.thumbnails.high.url}
                          alt="thumbnails"
                        />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="_blank" rel="noreferrer">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                      <div className="publishedAt">
                        {DateFormatter(singleVideo.snippet.publishedAt)}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })}
            {/* {this.videoWrapper} */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppleYoutube;

function DateFormatter(dateTimeString) {
  let date = new Date(dateTimeString);
  let Year = date.getFullYear();
  let Month = date.getMonth();
  let Day = date.getDate();
  let formattedDate =
    Year +
    "-" +
    (Month + 1).toString().padStart(2, "0") +
    "-" +
    Day.toString().padStart(2, "0");
  return formattedDate;
}
