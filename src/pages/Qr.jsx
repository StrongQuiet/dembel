import qrImg from "../assets/img/dembel_tap_bot_qr.png"

const Qr = ({
  innerHeight
}) => {
  return (
    <div className="app" style={{ height: innerHeight + "px" }}>
      <div className="qr container flex">
          <img src={qrImg} alt={"QR-CODE"}/>
      </div>
    </div>
  );
};

export default Qr;
