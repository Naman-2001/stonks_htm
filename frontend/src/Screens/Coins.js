import React, { useState, useEffect } from "react";
import SubBar from "../components/SubBar";
import {
  Button,
  Typography,
  IconButton,
  Paper,
  Grid,
  makeStyles,
} from "@material-ui/core";
import useLoading from "../components/hooks/loading-hook";
import Loader from "../components/loader";
import Axios from "axios";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

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
    width: 300,
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
  myPaper: {
    height: "auto",
    // padding: "10px",
    textAlign: "center",
    borderRadius: "10px",
  },
}));

const Coins = () => {
  const classes = useStyles();

  const [allCoins, setAllCoins] = useState([]);

  const [loading, setLoad, unsetLoad] = useLoading(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterPost, setFilterPost] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // console.log(filterPosts)
    setFilterPost([]);
    allCoins
      .filter((coin) => {
        // console.log(post.title.toLowerCase())
        if (coin.name) {
          return coin.name
            .toLowerCase()
            .startsWith(e.target.value.toLowerCase());
        }
      })
      .map((coin) => {
        setFilterPost((prev) => {
          return [...prev, coin];
        });
      });
  };

  useEffect(() => {
    setLoad();
    var config = {
      url:
        // "https://cors-anywhere.herokuapp.com/https://gemini.com/api/all-prices/1d",
        // "https://stonks-bandito.herokuapp.com/crypto/allCoins",
        "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/listing?start=1&limit=20&sortBy=market_cap&sortType=desc&convert=USD&cryptoType=all&tagType=all",
      method: "get",
      headers: {},
    };

    Axios(config)
      .then(function (res) {
        const coins = res.data.data.cryptoCurrencyList;
        console.log(coins);
        setAllCoins(coins);
        setFilterPost(coins);
        unsetLoad();
      })
      .catch(function (error) {
        unsetLoad();
        console.log(error);
      });
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <Paper component="form" className={classes.root2}>
        <InputBase
          className={classes.input}
          placeholder="Search "
          inputProps={{ "aria-label": "search" }}
          value={searchTerm}
          onChange={handleSearch}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
          // onClick={handleSearch}
        >
          <SearchIcon style={{ width: "30px", height: "30px" }} />
        </IconButton>
      </Paper>

      <Grid container spacing={3} style={{ padding: "30px" }}>
        {filterPost.map((coin) => {
          console.log(coin.name);
          return (
            <Grid item sm={3}>
              <Paper className={classes.myPaper} elevation={2}>
                <Grid
                  container
                  style={{
                    background: "#0000001c",
                    color: "#0000008a",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                >
                  <Grid
                    item
                    sm={12}
                    style={{
                      background: "black",
                      color: "white",
                      fontWeight: "bold",
                      padding: "5px",
                      borderRadius: "10px",
                    }}
                  >
                    <Typography>
                      {coin.name} {coin.symbol}
                    </Typography>
                  </Grid>
                  <Grid item sm={6}>
                    <p style={{ marginBottom: "0", color: "#4d250e" }}>
                      %age change 24Hr.
                    </p>
                    {coin.quotes[0].percentChange24h}
                    <p style={{ marginBottom: "0", color: "#4d250e" }}>
                      %age change 7days.
                    </p>
                    {coin.quotes[0].percentChange7d}
                  </Grid>
                  <Grid item sm={6}>
                    <p style={{ marginBottom: "0", color: "#4d250e" }}>
                      Price:{" "}
                    </p>
                    {coin.quotes[0].price}
                    {/* <p style={{ marginBottom: "0", color: "#4d250e" }}>Ask: </p>
                    {coin.ask} */}
                  </Grid>
                  {/* <hr /> */}
                  <Grid item sm={6}>
                    <p style={{ marginBottom: "0", color: "#4d250e" }}>
                      Market Cap (
                      {coin.quotes[0].marketCap && coin.quotes[0].name}):
                    </p>{" "}
                    {coin.quotes[0].marketCap ? coin.quotes[0].marketCap : "-"}
                  </Grid>
                  <Grid item sm={6}>
                    <p style={{ marginBottom: "0", color: "#4d250e" }}>
                      Mkt. Paircount
                    </p>
                    {coin.marketPairCount}
                  </Grid>
                  <Grid item sm={6}>
                    <p style={{ marginBottom: "0", color: "#4d250e" }}>
                      Volume ({coin.quotes[0].volume24h && coin.quotes[0].name}
                      ):
                    </p>
                    {coin.quotes[0].volume24h ? coin.quotes[0].volume24h : "-"}
                  </Grid>
                  <Grid item sm={6}>
                    <p style={{ marginBottom: "0", color: "#4d250e" }}>
                      Supply ({coin.totalSupply && coin.name}):
                    </p>
                    {coin.totalSupply ? coin.totalSupply : "-"}
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Coins;
