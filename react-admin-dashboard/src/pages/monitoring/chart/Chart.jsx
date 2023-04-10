
const ProgressBar = (props) => {
  const { completed = null, num, count, id } = props;
  function math1(num, valuecount) {
    // 생산율 구하는 공식함수
    return (num / valuecount) * 100;
  }

  const containerStyles = {
    height: '45px',
    // 생산진행상태바 가로길이
    width: 370,
    // 상태바 배경색
    backgroundColor: "#edf2f5",
    marginTop: '70px',
 
  }
  //현재 진행바
  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: "#808080",
    textAlign: 'center',
    lineHeight: '40px',
    marginLeft: '0',
    transition: 'width 1s ease-in-out',
  }

  // 상태바 Text
  const labelStyles = {
    color: 'white',
    fontWeight: 'bold',
  }

  return (
    <div style={containerStyles}>
      <div className="chart" style={fillerStyles}>
        <span style={labelStyles}>{num > count ? `진행율 : ${completed}% ${count}/${count}` : `진행율 : ${Math.floor(math1(num, count))}% ${num}/${count}`}</span>
      </div>
    </div>
  );
};
export default ProgressBar;
