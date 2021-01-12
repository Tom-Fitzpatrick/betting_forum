import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },

  HotPostHeader: {
    fontSize: 40,
    color: "red",
  },

  sidenav: {
    backgroundColor: "lightgray",
    border: "1px solid black",
    marginTop: 30,
    marginRight: 20,
  },

  HotPosts: {},
}));

export default useStyles;
