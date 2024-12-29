const vidOne =
  "https://res.cloudinary.com/dpzy6cozb/video/upload/v1735395959/DABZEE_1_1_dabt2r.mp4";
const vidTwo =
  "https://res.cloudinary.com/dpzy6cozb/video/upload/v1735462541/FINAL_2_ixb2nj.mp4";

const vidThree =
  "https://res.cloudinary.com/dpzy6cozb/video/upload/v1735403114/nov_44_ireland_vu2cgy.mp4";
const vidFive =
  "https://res.cloudinary.com/dpzy6cozb/video/upload/v1735472094/watsapp_woodux_1_1_tud2bs.mp4";
const vidFour =
  "https://res.cloudinary.com/dpzy6cozb/video/upload/v1735403070/zaman_1skymark_hwd1jo.mp4";
const vidSix =
  "https://res.cloudinary.com/dpzy6cozb/video/upload/v1735462366/dec_41_event_drone_bx8qmw.mp4";
const vidSeven =
  "https://res.cloudinary.com/dpzy6cozb/video/upload/v1735403056/thaski_vid2_h6ofv1.mp4";
const vidEight =
  "https://res.cloudinary.com/dpzy6cozb/video/upload/v1735395955/aftbefr_1_uyn5wg.mp4";
const vidNine =
  "https://res.cloudinary.com/dpzy6cozb/video/upload/v1735472094/klaanonam_final_1_xmamyk.mp4";
const vidTen =
  "https://res.cloudinary.com/dpzy6cozb/video/upload/v1735403115/oct_9_RE_EDIT_german_public_vlvrmf.mp4";
const vidEleven =
  "https://res.cloudinary.com/dpzy6cozb/video/upload/v1735403115/OUT_01_dxdlsn.mp4";
const vidTwelve =
  "https://res.cloudinary.com/dpzy6cozb/video/upload/v1735403056/reel02_u1ais2.mp4";
const vidThirteen =
  "https://res.cloudinary.com/dpzy6cozb/video/upload/v1735396036/fjahan_1_1_m0wqdj.mp4";
const vidFourteen =
  "https://res.cloudinary.com/dpzy6cozb/video/upload/v1735462747/final_1_ezfirq.mp4";
const vidFifteen =
  "https://res.cloudinary.com/dpzy6cozb/video/upload/v1735462746/BOSQ_2_2_tpdskg.mp4";
const vidSixteen =
  "https://res.cloudinary.com/dpzy6cozb/video/upload/v1735462747/BOSQ_2_1_bdrjhh.mp4";
const vidSeventeen =
  "https://res.cloudinary.com/dpzy6cozb/video/upload/v1735462745/BOSQ_2_clmfov.mp4";
const vidEighteen =
  "https://res.cloudinary.com/dpzy6cozb/video/upload/v1735403114/nov_38_event_video_megha_psezqp.mp4";

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
          src={vidFive}
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
          src={vidSix}
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
      <div className="video-box__item video-box-one video-box-twelve">
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
      <div className="video-box__item video-box-one video-box-thirteen">
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
      <div className="video-box__item video-box-one video-box-fourteen">
        <video
          src={vidFourteen}
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
      <div className="video-box__item video-box-one video-box-fourteen">
        <video
          src={vidFifteen}
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
      <div className="video-box__item video-box-one video-box-fourteen">
        <video
          src={vidSeventeen}
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
      <div className="video-box__item video-box-one video-box-fourteen">
        <video
          src={vidEighteen}
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
