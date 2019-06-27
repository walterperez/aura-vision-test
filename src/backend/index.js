const express = require('express');
const fetch = require('node-fetch');
const dateFormater = require('./helpers/dateFormater');
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/rest/flights/', (req, res) => {
  let flightDate = new Date(req.body.data);
  let dateSearchedByUser = dateFormater(flightDate);

  try {
    fetch('https://api.myjson.com/bins/rvkk5')
      .then(response => response.json())
      .then(data => {
        let filteredFlights = data.flights.filter(fligth => {
          let fligthDeparture = dateFormater(new Date(fligth.departure));
          return fligthDeparture === dateSearchedByUser;
        });
        if (filteredFlights.length) {
          res.send(filteredFlights);
        } else {
          res.json(
            "Opps! Looks like there isn't fligths for this date... Try it again!"
          );
        }
      })
      .catch(err => {
        res.json("Opps!, Looks like there is a problem with your internet ='(");
      });
  } catch (error) {
    res.json("Sorry, there are some connections problems ='(");
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
