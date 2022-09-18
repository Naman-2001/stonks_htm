import React, { useState, useEffect } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { Paper, Typography, Button, IconButton } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    padding: "5px",
    borderRadius: "0px",
    zIndex: "5",
    "& .MuiTypography-body1": {
      fontSize: "1rem",
    },
    borderRadius: "0 0 100px 100px",
    background: "dimgrey",
    color: "white",
  },
  active: {
    height: "1px",
    background: "#E71D35",
    width: "40px",
    margin: "0px",
  },
  root: {
    "& .MuiSvgIcon-root ": {
      width: "20px",
    },
  },
  root2: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 600,
    margin: "20px auto",
    borderRadius: "30px",
    background: "#0000001c",
    height: "40px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: "initial",
  },
}));

const ProofConcept = () => {
  const classes = useStyles();
  const [news, setNews] = useState("");
  const [affectedCompanies, setAffectedCompanies] = useState([]);

  const handleAnalyse = () => {
    axios({
      method: "post",
      url: "https://stonks-bandito.herokuapp.com/company/proofOfConcept",
      header: {},
      data: {
        checkingURL: news,
      },
    })
      .then((res) => {
        console.log(res.data);
        setAffectedCompanies(res.data.companies);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ width: "80%", margin: "0px auto 10px" }}>
      <Paper component="form" className={classes.root2}>
        <InputBase
          className={classes.input}
          placeholder="Enter URL of the news to analyse"
          inputProps={{ "aria-label": "search" }}
          value={news}
          onChange={(e) => setNews(e.target.value)}
        />
        <IconButton
          // type="submit"
          className={classes.iconButton}
          aria-label="search"
          onClick={handleAnalyse}
        >
          <SearchIcon style={{ width: "30px", height: "30px" }} />
        </IconButton>
      </Paper>
      {/* <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        onChange={(e) => setNews(e.target.value)}
        value={news}
      ></textarea> */}
      {/* <button onClick={handleAnalyse}>Analyse</button> */}
      {affectedCompanies.map((single, index) => {
        return (
          <Paper
            style={{
              padding: "5px",
              height: "50px",
              width: "100%",
              margin: "30px 0",
            }}
          >
            <Grid container>
              <Grid item sm={10} style={{ cursor: "pointer" }}>
                <Typography style={{ fontSize: "1rem" }}>
                  {single.companyName}
                </Typography>
              </Grid>
              <Grid item sm={2}>
                <Button
                  style={{
                    height: "20px",
                    fontSize: "0.8rem",
                    color: "white",
                    background: "blue",
                    borderRadius: "20px",
                  }}
                >
                  {single.sentiment?.score * 100}%
                </Button>
              </Grid>
              <Grid item sm={12}>
                <IconButton
                  style={{
                    padding: "0px",
                    color:
                      single.sentiment.label === "positive" ? "green" : "red",
                  }}
                >
                  {single.sentiment.label === "positive" ? (
                    <ArrowUpwardIcon />
                  ) : (
                    <ArrowDownwardIcon />
                  )}
                </IconButton>
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </div>
  );
};

export default ProofConcept;
