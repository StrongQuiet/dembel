const Tap = ({ count, setCount }) => {
  const tap = () => {
    setCount(() => {
      localStorage.setItem("countDembel", count);
      return count++;
    });
  };

  return (
    <div className="tap container flex" onClick={() => tap()}>
      <div className="click"></div>
    </div>
  );
};

export default Tap;
