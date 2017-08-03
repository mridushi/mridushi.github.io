import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



let data = {
   "data": [
      {
         "name": "Stuff.co.nz",
         "id": "21253884267"
      },
      {
         "name": "My Stuff",
         "id": "768249249964016"
      },
      {
         "name": "Oh Inspiring Stuff",
         "id": "145878265853657"
      },
      {
         "name": "Absolute Awesome Stuff",
         "id": "313275282349296"
      },
      {
         "name": "Muay Thai Stuff",
         "id": "16783176123"
      },
      {
         "name": "Bloke's stuff R+18",
         "id": "1282712291802256"
      },
      {
         "name": "Viral Stuff",
         "id": "1712903479021322"
      },
      {
         "name": "Familiar Stuff",
         "id": "102638116977810"
      },
      {
         "name": "The Wright Stuff",
         "id": "14062905421"
      },
      {
         "name": "Stuff.co.nz Auckland",
         "id": "207271622650051"
      },
      {
         "name": "Fashion, Music & Stuff from the 60's and 70's",
         "id": "300473306690060"
      },
      {
         "name": "Rajputi stuffs",
         "id": "506227722850337"
      },
      {
         "name": "Stuff Magazine UK",
         "id": "112155222204775"
      },
      {
         "name": "Random Stuff",
         "id": "567007210174288"
      },
      {
         "name": "Skulls & Stuff",
         "id": "1807969236089803"
      },
      {
         "name": "Free Stuff Finder",
         "id": "119199404777517"
      },
      {
         "name": "Well Done Stuff",
         "id": "302896416450257"
      },
      {
         "name": "Disturbing Stuff",
         "id": "1805681483045869"
      },
      {
         "name": "All Singapore Stuff",
         "id": "1993145654159487"
      },
      {
         "name": "URBAN STUFF",
         "id": "201187079942864"
      },
      {
         "name": "Stuffs",
         "id": "365567943521059"
      },
      {
         "name": "Bootleg Stuff",
         "id": "704748222942346"
      },
      {
         "name": "PrimeStuff",
         "id": "938342259611941"
      },
      {
         "name": "Men's Crazy Stuff",
         "id": "1185930024837427"
      },
      {
         "name": "Girly Stuff",
         "id": "654447598084507"
      }
   ],
   "paging": {
      "cursors": {
         "before": "MAZDZD",
         "after": "MjQZD"
      },
      "next": "https://graph.facebook.com/v2.10/search?access_token=459458757771772\u00257C864b6e907fd81f72ef3f74e9f7a9d6ae&pretty=1&q=stuff&type=page&limit=25&after=MjQZD"
   }
};




// https://graph.facebook.com/search?q=stuff&type=page&access_token=459458757771772|864b6e907fd81f72ef3f74e9f7a9d6ae
// https://graph.facebook.com/21253884267?fields=category,description,cover&access_token=459458757771772|864b6e907fd81f72ef3f74e9f7a9d6ae


class App extends Component {
  handleChange(e){
    console.log(e.target.value);
  }

  render() {
    let Results = data.data.map(page => <li><p>{page.name}</p><p>{page.id}</p></li>)
    return (
      <div className="App">
        <label>
          Search:
          <input type="text" name="name" placeholder="Search for a Page" onChange={this.handleChange}/>
        </label>
        <ul>{Results}</ul>
      </div>
    );
  }
}

export default App;
