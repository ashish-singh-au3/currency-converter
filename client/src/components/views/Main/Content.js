import React, { useEffect, useState } from "react";
//import "./Content.css";
import CurrencyExchanger from "./CurrencyExchanger";
import GoogleAuth from "./GoogleAuth";

import { Card, Grid, CardContent } from "@material-ui/core";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ImportExportOutlinedIcon from "@material-ui/icons/ImportExportOutlined";

//const BASE_URL = "https://api.exchangeratesapi.io/latest";

function Content() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    fetch("https://api.exchangeratesapi.io/latest")
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(
        `${"https://api.exchangeratesapi.io/latest"}?base=${fromCurrency}&symbols=${toCurrency}`
      )
        .then((res) => res.json())
        .then((data) => setExchangeRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  return (
    <Grid xs={4}>
      <GoogleAuth />
      <Card
        className="col-md-9"
        style={{
          backgroundColor: "whitesmoke",
          marginBottom: "300px",
          margin: "100px",
          height: "350px",
          borderRadius: "25px",
        }}
      >
        <h3 style={{ color: "black" }}>
          <MonetizationOnIcon />
        </h3>

        <CardContent
          style={{
            margin: "10px",
            backgroundColor: "gray",
            borderRadius: "25px",
          }}
        >
          <h6 style={{ color: "whitesmoke" }}>Currency 1</h6>
          <CurrencyExchanger
            currencyOptions={currencyOptions}
            selectedCurrency={fromCurrency}
            onChangeCurrency={(e) => setFromCurrency(e.target.value)}
            onChangeAmount={handleFromAmountChange}
            amount={fromAmount}
          />
        </CardContent>

        <CardContent>
          <ImportExportOutlinedIcon />
        </CardContent>

        <CardContent
          style={{
            margin: "10px",
            backgroundColor: "gray",
            borderRadius: "25px",
          }}
        >
          <h6 style={{ color: "whitesmoke" }}>Currency 2</h6>
          <CurrencyExchanger
            currencyOptions={currencyOptions}
            selectedCurrency={toCurrency}
            onChangeCurrency={(e) => setToCurrency(e.target.value)}
            onChangeAmount={handleToAmountChange}
            amount={toAmount}
          />
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Content;
