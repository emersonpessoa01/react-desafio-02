import React, { Component } from "react";
import { formatNumber } from "../helpers/formatHelpers";
import css from "./header.module.css";

export default class Header extends Component {
  // handleInputChange=(evt)=>{
  //     // console.log(evt.target.value)
  //     const newText = evt.target.value
  //     this.props.onChangeFilter(newText)
  // };
  render() {
    const {
      filter,
      countryCount,
      totalPopulation,
      onChangeFilter,
    } = this.props;
    return (

      
      <div className={css.flexRow}>
        <input
          className={css.centeredTitle}
          placeholder="País"
          type="text"
          value={filter}
          onChange={onChangeFilter}
        />{" "}
        <br></br>{" "}
        <span className={css.countries}>
          {countryCount > 1 ? "Países" : "País"}:{" "}
          <bold>{countryCount}</bold>
        </span>
        <span className={css.separator}>|</span>
        <span className={css.population}>
          População: <bold>{formatNumber(totalPopulation)} </bold>
        </span>
      </div>
    );
  }
}

// const styles= {
//   centeredTitle:{
//     textAlign: 'left',
//     color: 'blue',
//     fontFamily: 'Montserrat'

//   }
// }
