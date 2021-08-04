import {useState} from "react"
import SwipeableViews from 'react-swipeable-views';
import { makeStyles } from "@material-ui/core/styles";

import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import item001 from "../images/fox.jpg";
import item002 from "../images/cat.png";
import item003 from "../images/pindora.png";

const useStyles = makeStyles(() => {
  const baseStyle = {
    padding: "1em",
    color: "white"
  };
  const activeBaseStyle = {
    color: "white",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px"
  };

  return {
    slide0: {
      ...baseStyle,
      backgroundColor: "skyblue"
    },
    slide1: {
      ...baseStyle,
      backgroundColor: "orange"
    },
    slide2: {
      ...baseStyle,
      backgroundColor: "indianred"
    },
    image: {
      width: "100%",
      height: "auto"
    },
    active0: {
      ...activeBaseStyle,
      backgroundColor: "lightseagreen"
    },
    active1: {
      ...activeBaseStyle,
      backgroundColor: "yellowgreen"
    },
    active2: {
      ...activeBaseStyle,
      backgroundColor: "pink"
    },
    card: {
      margin: "0 auto",
      width: "70%"
    },
    cardContent: {
      textAlign: "left"
    }
  };
});

const Swipe = () => {
  const [swipeableActions, setSwipeableActions] = useState();
  const [tabIndex, setTabIndex] = useState(0);
  const classes = useStyles();
  const items = [item001, item002, item003];
  const itemInitial = ["S", "C", "M"];
  const itemNames = ["シュークリーム", "チョコレートケーキ", "ミルクプリン"];
  const itemOfficialNames = [
    "ｶｽﾀｰﾄﾞｼｭｰｸﾘｰﾑ いちごのｱｲｼﾝｸﾞがけ（3個入り）",
    "チョコレートムースケーキ（2個入り）",
    "りんごのミルクプリン（２個入り）"
  ];
  const itemcategories = ["ヘルシー食", "たんぱく質調整食", "たんぱく質調整食"];

  const handleChange = index => {
    setTabIndex(index);
  };

  return (
    <>
      <Tabs
        value={tabIndex}
        onChange={(e, value) => handleChange(value)}
        variant="fullWidth"
        indicatorColor="primary"
      >
        {itemNames.map((itemName, i) => (
          <Tab
            className={tabIndex === i && classes[`active${i}`]}
            label={itemName}
          />
        ))}
      </Tabs>
      <SwipeableViews
        enableMouseEvents
        action={actions => setSwipeableActions(actions)}
        resistance
        animateHeight
        index={tabIndex}
        onChangeIndex={index => handleChange(index)}
      >
        {items.map((item, index) => (
          <div key={index} className={classes[`slide${index}`]}>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    {itemInitial[index]}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={itemOfficialNames[tabIndex]}
                subheader={itemcategories[tabIndex]}
              />
              <img
                alt={itemOfficialNames[tabIndex]}
                className={classes.image}
                src={item}
              />
              <CardContent className={classes.cardContent}>
                <>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    お召し上がりになる分だけ取り出し、冷蔵庫にて目安として約5～6時間解凍して下さい。
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    ※生菓子ですので、解凍後は当日中にお召し上がりください。
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    ※必ず冷蔵庫にて解凍して下さい。
                  </Typography>
                </>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton>
                  <FavoriteIcon />
                </IconButton>
                <IconButton>
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </div>
        ))}
      </SwipeableViews>
    </>
  );
};
export default Swipe;