const vidOne =
  "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923671/BOSQ_2_grcgol.mp4";
const vidTwo =
  "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923670/FINAL_2_giftch.mp4";
const vidThree =
  "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923660/nov_44_ireland_sobtf9.mp4";
const vidFive =
  "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923675/watsapp_woodux_1_u1fbhj.mp4";
const vidFour =
  "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923669/BOSQ_2_2_copy_1_hwybnx.mp4";
const vidSix =
  "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923678/dec_41_event_drone_foc3ka.mp4";
const vidSeven =
  "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923647/aftbefr_1_v6eyo5.mp4";
const vidEight =
  "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923644/fjahan_1_1_vfhpqa.mp4";
const vidNine =
  "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923665/klaanonam_final_1_1_yd2swt.mp4";
const vidTen =
  "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923680/thaski_vid2_rec3xc.mp4";
const vidEleven =
  "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923662/BOSQ_2_1_sp1xbv.mp4";
const vidTwelve =
  "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923630/DABZEE_1_1_idxjus.mp4";
const vidThirteen =
  "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923667/oct_9_RE_EDIT_german_public_lutep4.mp4";
const vidFourteen =
  "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923677/final_1_muj1lm.mp4";
const vidFifteen =
  "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923626/dabzeee_1_wau1qa.mp4";
const vidSixteen =
  "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923626/dabzeee_1_wau1qa.mp4";
const vidSeventeen =
  "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923653/nov_38_event_video_megha_wjssb1.mp4";
const vidEighteen =
  "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923672/reel02_bu7d4b.mp4";

function Video() {
  return (
    <div className="video-box">
      <div className="video-box__item video-box-one">
        <video
          src={vidOne}
          muted
          loop
          preload="auto"
          poster="https://res.cloudinary.com/dzuqczvb7/image/upload/v1737978866/vdo1_dfyrm4.png"
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
          poster="https://res.cloudinary.com/dzuqczvb7/image/upload/v1737978869/vdo2_khkc20.png"
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
          poster="https://res.cloudinary.com/dzuqczvb7/image/upload/v1737978874/vdo3_lch8qp.png"
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
          poster="https://res.cloudinary.com/dzuqczvb7/image/upload/v1737978867/vdo4_duw6nr.png"
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
          poster="https://res.cloudinary.com/dzuqczvb7/image/upload/v1737978867/vdo5_d5z2hh.png"
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
          poster="https://res.cloudinary.com/dzuqczvb7/image/upload/v1737978868/vdo6_voqo01.png"
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
          poster="https://res.cloudinary.com/dzuqczvb7/image/upload/v1737978869/vdo7_pvdn0k.png"
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
          poster="https://res.cloudinary.com/dzuqczvb7/image/upload/v1737978871/vdo8_v9dsyd.png"
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
          poster="https://res.cloudinary.com/dzuqczvb7/image/upload/v1737978866/vdo9_g9hgl8.png"
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
          poster="https://res.cloudinary.com/dzuqczvb7/image/upload/v1737978869/vdo10_sosagj.png"
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
          poster="https://res.cloudinary.com/dzuqczvb7/image/upload/v1737978869/vdo11_quspzr.png"
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
          poster="https://res.cloudinary.com/dzuqczvb7/image/upload/v1737978869/vdo12_nvimyu.png"
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
          poster="https://res.cloudinary.com/dzuqczvb7/image/upload/v1737978867/vdo13_j4z6nv.png"
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
          poster="https://res.cloudinary.com/dzuqczvb7/image/upload/v1737978867/vdo14_tu4ysc.png"
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
          poster="https://res.cloudinary.com/dzuqczvb7/image/upload/v1737978866/vdo15_blg4me.png"
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
          poster="https://res.cloudinary.com/dzuqczvb7/image/upload/v1737978869/vdo16_wer49f.png"
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
          poster="https://res.cloudinary.com/dzuqczvb7/image/upload/v1737978866/vdo17_iqwwxl.png"
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
