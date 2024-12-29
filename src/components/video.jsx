const vidOne =
  "https://res.cloudinary.com/dpzy6cozb/video/upload/v1735395959/DABZEE_1_1_dabt2r.mp4";
const vidTwo =
  "https://storage.googleapis.com/kl-website-432404.appspot.com/assets//KL_Web_Video_V2_w7dz6j_3ff22704e4/KL_Web_Video_V2_w7dz6j_3ff22704e4.mp4";
const vidThree =
  "https://res.cloudinary.com/dpzy6cozb/video/upload/v1735403114/nov_44_ireland_vu2cgy.mp4";
const vidFour =
  "https://res.cloudinary.com/dpzy6cozb/video/upload/v1735403070/zaman_1skymark_hwd1jo.mp4";
const vidSeven =
  "https://res.cloudinary.com/dpzy6cozb/video/upload/v1735403056/thaski_vid2_h6ofv1.mp4";
const vidEight =
  "https://res.cloudinary.com/dpzy6cozb/video/upload/v1735395955/aftbefr_1_uyn5wg.mp4";
const vidNine =
  "https://storage.googleapis.com/kl-website-432404.appspot.com/assets//KL_Web_Video_V2_w7dz6j_3ff22704e4/KL_Web_Video_V2_w7dz6j_3ff22704e4.mp4";
const vidTen =
  "https://res.cloudinary.com/dpzy6cozb/video/upload/v1735403115/oct_9_RE_EDIT_german_public_vlvrmf.mp4";
const vidEleven =
  "https://res.cloudinary.com/dpzy6cozb/video/upload/v1735403115/OUT_01_dxdlsn.mp4";
const vidTwelve =
  "https://res.cloudinary.com/dpzy6cozb/video/upload/v1735403056/reel02_u1ais2.mp4";
const vidThirteen =
  "https://res.cloudinary.com/dpzy6cozb/video/upload/v1735396036/fjahan_1_1_m0wqdj.mp4";

function Video() {
  return (
    <div className="video-box">
      <div className="video-box__item video-box-one">
        <video
          src={vidOne}
          muted
          loop
          preload="auto"
          onMouseEnter={(e) => {
            e.target.play();
            e.target.muted = false;
          }}
          onMouseLeave={(e) => {
            e.target.pause();
            e.target.muted = true;
          }}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="video-box__item video-box-two">
        <video
          src={vidTwo}
          muted
          loop
          preload="auto"
          onMouseEnter={(e) => {
            e.target.play();
            e.target.muted = false;
          }}
          onMouseLeave={(e) => {
            e.target.pause();
            e.target.muted = true;
          }}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="video-box__item video-box-three">
        <video
          src={vidThree}
          muted
          loop
          preload="auto"
          onMouseEnter={(e) => {
            e.target.play();
            e.target.muted = false;
          }}
          onMouseLeave={(e) => {
            e.target.pause();
            e.target.muted = true;
          }}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="video-box__item video-box-four">
        <video
          src={vidFour}
          muted
          loop
          preload="auto"
          onMouseEnter={(e) => {
            e.target.play();
            e.target.muted = false;
          }}
          onMouseLeave={(e) => {
            e.target.pause();
            e.target.muted = true;
          }}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="video-box__item video-box-five">
        <video
          src={vidTwo}
          muted
          loop
          preload="auto"
          onMouseEnter={(e) => {
            e.target.play();
            e.target.muted = false;
          }}
          onMouseLeave={(e) => {
            e.target.pause();
            e.target.muted = true;
          }}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="video-box__item video-box-six">
        <video
          src={vidTwo}
          muted
          loop
          preload="auto"
          onMouseEnter={(e) => {
            e.target.play();
            e.target.muted = false;
          }}
          onMouseLeave={(e) => {
            e.target.pause();
            e.target.muted = true;
          }}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="video-box__item video-box-seven video-box-one">
        <video
          src={vidSeven}
          muted
          loop
          preload="auto"
          onMouseEnter={(e) => {
            e.target.play();
            e.target.muted = false;
          }}
          onMouseLeave={(e) => {
            e.target.pause();
            e.target.muted = true;
          }}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="video-box__item video-box-eight video-box-one">
        <video
          src={vidEight}
          muted
          loop
          preload="auto"
          onMouseEnter={(e) => {
            e.target.play();
            e.target.muted = false;
          }}
          onMouseLeave={(e) => {
            e.target.pause();
            e.target.muted = true;
          }}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="video-box__item video-box-six video-box-nine">
        <video
          src={vidNine}
          muted
          loop
          preload="auto"
          onMouseEnter={(e) => {
            e.target.play();
            e.target.muted = false;
          }}
          onMouseLeave={(e) => {
            e.target.pause();
            e.target.muted = true;
          }}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="video-box__item video-box-one video-box-ten">
        <video
          src={vidTen}
          muted
          loop
          preload="auto"
          onMouseEnter={(e) => {
            e.target.play();
            e.target.muted = false;
          }}
          onMouseLeave={(e) => {
            e.target.pause();
            e.target.muted = true;
          }}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="video-box__item video-box-one video-box-eleven">
        <video
          src={vidEleven}
          muted
          loop
          preload="auto"
          onMouseEnter={(e) => {
            e.target.play();
            e.target.muted = false;
          }}
          onMouseLeave={(e) => {
            e.target.pause();
            e.target.muted = true;
          }}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="video-box__item video-box-one video-box-eleven">
        <video
          src={vidTwelve}
          muted
          loop
          preload="auto"
          onMouseEnter={(e) => {
            e.target.play();
            e.target.muted = false;
          }}
          onMouseLeave={(e) => {
            e.target.pause();
            e.target.muted = true;
          }}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="video-box__item video-box-one video-box-eleven">
        <video
          src={vidThirteen}
          muted
          loop
          preload="auto"
          onMouseEnter={(e) => {
            e.target.play();
            e.target.muted = false;
          }}
          onMouseLeave={(e) => {
            e.target.pause();
            e.target.muted = true;
          }}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

export default Video;
// {brandImages.map((vid, index) => (
//   <div className="video-box__item video-box-one" key={index}>
//     {/* <video
//       key={index}
//       src={vid}
//       muted
//       loop
//       onMouseEnter={(e) => e.target.play()}
//       onMouseLeave={(e) => e.target.pause()}
//       style={{ width: "100%", height: "100%", objectFit: "cover" }}
//     /> */}
//   </div>
// ))}
