
const ProgressBar = (props) => {
  const { completed, num, count, id } = props;
  function math1(num, valuecount) {
    // 생산율 구하는 공식함수
    return (num / valuecount) * 100;
  }

  const containerStyles = {
    height: 50,
    position: 'relative',
    // 생산진행상태바 가로길이
    width: 350,
    // 상태바 배경색
    backgroundColor: "red",
    borderRadius: 50,
    margin: 0,
  }
  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: "#333399",
    borderRadius: 'inherit',
    textAlign: 'center',
    transition: 'width 1s ease-in-out',
    position: 'absolute',
    margin : 0,
 

  }
  const labelStyles = {
    position: 'abolute',
    // 상태바 Text
    color: 'black',
    fontWeight: 'bold',
    // position: "fixed",
    margin : 'auto'
    
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
