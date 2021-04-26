import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Add from "@material-ui/icons/Add";
import Paper from "@material-ui/core/Paper";

import Image from "../assets/avatar1.jpeg"
import Image2 from "../assets/avatar.png"
import Image3 from "../assets/avatar2.jpeg"
import Image4 from "../assets/avatar2.png"

const customStyles = makeStyles(() => ({
  root: {
    padding: "13px",
  },
  storiesHeader: {
    fontSize: "15px",
    color: "blue",
  },
  storiesDiv: {
    overflowX: "auto",
    overflowY: "hidden",
    whiteSpace: "nowrap",
  },
  storyAvatar: {
    display: "inline-block",
    marginRight: "20px",
    width: '60px',
    height: '60px',
    border: '3px solid #8181e2'
  },
}));

function Stories() {
  const styles = customStyles();

  const stories = [Image2, Image3, Image4, Image, Image4, Image2, Image, Image3];

  return (
    <Paper>
      <div className={styles.root}>
        <h1 className={styles.storiesHeader}> Short Stories</h1>
        <div className={styles.storiesDiv}>
          {/* <Avatar className={styles.storyAvatar} align="center">
            <Add fontSize="large" />
          </Avatar> */}
          {stories.map((story, k) => (
            <Avatar variant="circle" src={story} className={styles.storyAvatar} key={k} align="center">
        
            </Avatar>
          ))}
        </div>
      </div>
    </Paper>
  );
}

export default Stories;
