import { red } from "@mui/material/colors";
import { borderColor } from "@mui/system";
import { Switch } from "@material-ui/core";
import { useEffect, useState } from "react";
const ProgressBar = (props) => {
  const { completed, num, count, id } = props;
  function math1(num, valuecount) {
    // 생산율 구하는 공식함수
    return (num / valuecount) * 100;
  }

  const containerStyles = {
    height: 20,

    // 생산진행상태바 가로길이
    width: '170%',
    // 상태바 배경색
    backgroundColor: "#918f88",
    borderRadius: 50,
    margin: 50,
  }
  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: "#333399",
    borderRadius: 'inherit',
    textAlign: 'center',

  }
  const labelStyles = {
    padding: 5,
    // 상태바 Text
    color: 'white',
    fontWeight: 'bold'
  }

  return (
    <div style={containerStyles}>
      <div className="chart" style={fillerStyles}>
        <span style={labelStyles}>{num > count ? `${completed}% ${count}/${count}` : `${Math.floor(math1(num, count))}% ${num}/${count}`}</span>
      </div>
    </div>
  );
};
export default ProgressBar;
