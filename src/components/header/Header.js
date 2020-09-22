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

      //     <div className={css.flexRow}>
      //   <form className="col s12">
      //     <div className="row">
      //       <div className="input-field col s12">
      //         <input id="email" type="email" className={flexRow}>
      //         <label for="email">País</label>
      //         <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
      //       </div>
      //     </div>
      //   </form>
      // </div>

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
          <strong>{countryCount}</strong>
        </span>{" "}
        <span className={css.countries}>|</span>{" "}
        <span className={css.population}>
          População: <strong>{formatNumber(totalPopulation)} </strong>
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
