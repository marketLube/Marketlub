import React from "react";

// const vidOne =
//   "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923671/BOSQ_2_grcgol.mp4";
// const vidTwo =
//   "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923670/FINAL_2_giftch.mp4";
// const vidThree =
//   "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923660/nov_44_ireland_sobtf9.mp4";
// const vidFive =
//   "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923675/watsapp_woodux_1_u1fbhj.mp4";
// const vidFour =
//   "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923669/BOSQ_2_2_copy_1_hwybnx.mp4";
// const vidSix =
//   "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923678/dec_41_event_drone_foc3ka.mp4";
// const vidSeven =
//   "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923647/aftbefr_1_v6eyo5.mp4";
// const vidEight =
//   "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923644/fjahan_1_1_vfhpqa.mp4";
// const vidNine =
//   "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923665/klaanonam_final_1_1_yd2swt.mp4";
// const vidTen =
//   "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923680/thaski_vid2_rec3xc.mp4";
// const vidEleven =
//   "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923662/BOSQ_2_1_sp1xbv.mp4";
// const vidTwelve =
//   "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923630/DABZEE_1_1_idxjus.mp4";
// const vidThirteen =
//   "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923667/oct_9_RE_EDIT_german_public_lutep4.mp4";
// const vidFourteen =
//   "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923677/final_1_muj1lm.mp4";
// const vidFifteen =
//   "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923626/dabzeee_1_wau1qa.mp4";
// const vidSixteen =
//   "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923626/dabzeee_1_wau1qa.mp4";
// const vidSeventeen =
//   "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923653/nov_38_event_video_megha_wjssb1.mp4";
// const vidEighteen =
//   "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736923672/reel02_bu7d4b.mp4";

function Video() {
  return (
    <div className="video-box">
      <div className="video-box__item video-box-one">
        <video
          src="https://res.cloudinary.com/dihhxzfq3/video/upload/v1738043345/v-1_zqpsrn.mp4"
          muted
          loop
          loading="lazy"
          playsInline={true}
          preload="none"
          poster="https://res.cloudinary.com/dihhxzfq3/image/upload/v1738043280/vdo1_mmfwqw.png"
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
          src="https://res.cloudinary.com/dihhxzfq3/video/upload/v1738043333/v-2_rip9h6.mp4"
          poster="https://res.cloudinary.com/dihhxzfq3/image/upload/v1738043281/vdo2_gnbzct.png"
          muted
          loop
          onMouseEnter={(e) => {
            e.target.play();
            e.target.muted = false;
          }}
          loading="lazy"
          playsInline={true}
          preload="none"
          onMouseLeave={(e) => {
            e.target.pause();
            e.target.muted = true;
          }}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="video-box__item video-box-three">
        <video
          src="https://res.cloudinary.com/dihhxzfq3/video/upload/v1738043316/v-3_cyx8bx.mp4"
          poster="https://res.cloudinary.com/dihhxzfq3/image/upload/v1738043282/vdo3_zz9mw8.png"
          muted
          loop
          loading="lazy"
          playsInline={true}
          preload="none"
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
          src="https://res.cloudinary.com/dihhxzfq3/video/upload/v1738043340/v-4_abpbvo.mp4"
          poster="https://res.cloudinary.com/dihhxzfq3/image/upload/v1738043282/vdo4_vb3mmi.png"
          muted
          loop
          loading="lazy"
          playsInline={true}
          preload="none"
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
          src="https://res.cloudinary.com/dihhxzfq3/image/upload/v1738043285/vdo5_oxww5h.png"
          poster="https://res.cloudinary.com/dihhxzfq3/image/upload/v1738043285/vdo5_oxww5h.png"
          muted
          loop
          loading="lazy"
          playsInline={true}
          preload="none"
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
          src="https://res.cloudinary.com/dihhxzfq3/video/upload/v1738043335/v-6_tcib28.mp4"
          poster="https://res.cloudinary.com/dihhxzfq3/image/upload/v1738043285/vdo6_nxnmpu.png"
          muted
          loop
          loading="lazy"
          playsInline={true}
          preload="none"
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
          src="https://res.cloudinary.com/dihhxzfq3/video/upload/v1738043274/v-7_penv2p.mp4"
          poster="https://res.cloudinary.com/dihhxzfq3/image/upload/v1738043285/vdo7_qoiixn.png"
          muted
          loop
          loading="lazy"
          playsInline={true}
          preload="none"
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
          src="https://res.cloudinary.com/dihhxzfq3/video/upload/v1738043250/v-8_ebm9ju.mp4"
          poster="https://res.cloudinary.com/dihhxzfq3/image/upload/v1738043286/vdo8_mktwzj.png"
          muted
          loop
          loading="lazy"
          playsInline={true}
          preload="none"
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
          src="https://res.cloudinary.com/dihhxzfq3/video/upload/v1738043327/v-9_pyh67y.mp4"
          poster="https://res.cloudinary.com/dihhxzfq3/image/upload/v1738043287/vdo9_ppc7hy.png"
          muted
          loop
          loading="lazy"
          playsInline={true}
          preload="none"
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
          src="https://res.cloudinary.com/dihhxzfq3/video/upload/v1738043330/v-10_fcsmpn.mp4"
          poster="https://res.cloudinary.com/dihhxzfq3/image/upload/v1738043289/vdo10_anpex3.png"
          muted
          loop
          loading="lazy"
          playsInline={true}
          preload="none"
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
          src="https://res.cloudinary.com/dihhxzfq3/video/upload/v1738043306/v-11_lh5t06.mp4"
          poster="https://res.cloudinary.com/dihhxzfq3/image/upload/v1738043288/vdo11_f5rd9u.png"
          muted
          loop
          loading="lazy"
          playsInline={true}
          preload="none"
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
          src="https://res.cloudinary.com/dihhxzfq3/video/upload/v1738043222/v-12_fo54pe.mp4"
          poster="https://res.cloudinary.com/dihhxzfq3/image/upload/v1738043288/vdo12_xliqze.png"
          muted
          loop
          loading="lazy"
          playsInline={true}
          preload="none"
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
          src="https://res.cloudinary.com/dihhxzfq3/video/upload/v1738043323/v-13_q2lm0k.mp4"
          poster="https://res.cloudinary.com/dihhxzfq3/image/upload/v1738043289/vdo13_m9buqq.png"
          muted
          loop
          loading="lazy"
          playsInline={true}
          preload="none"
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
          src="https://res.cloudinary.com/dihhxzfq3/video/upload/v1738043333/v-14_mce5dt.mp4"
          poster="https://res.cloudinary.com/dihhxzfq3/image/upload/v1738043289/vdo14_rm83hu.png"
          muted
          loop
          loading="lazy"
          playsInline={true}
          preload="none"
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
          src="https://res.cloudinary.com/dihhxzfq3/video/upload/v1738043225/v-15_uqe0d4.mp4"
          poster="https://res.cloudinary.com/dihhxzfq3/image/upload/v1738043289/vdo15_n1cw4x.png"
          muted
          loop
          loading="lazy"
          playsInline={true}
          preload="none"
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
          src="https://res.cloudinary.com/dihhxzfq3/video/upload/v1738043335/v-16_hxmlqc.mp4"
          poster="https://res.cloudinary.com/dihhxzfq3/image/upload/v1738043290/skymark3_xab8ad.png"
          muted
          loop
          loading="lazy"
          playsInline={true}
          preload="none"
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
          src="https://res.cloudinary.com/dihhxzfq3/video/upload/v1738043350/v-17_vnjpbl.mp4"
          poster="https://res.cloudinary.com/dihhxzfq3/image/upload/v1738043290/vdo17_btrx0b.png"
          muted
          loop
          loading="lazy"
          playsInline={true}
          preload="none"
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

export { Video as default };
