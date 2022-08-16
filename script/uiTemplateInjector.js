const footer = document.querySelector('.footer');
const contactCard = document.querySelector('#contactCard');
const header = document.querySelector("#header");
const ramnagarGoogleMap = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7783.64079634611!2d77.27578772310865!3d12.725136879414109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae4de2c2e78587%3A0x638f610e2a869396!2sY%20Square%20Academy%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1657218702400!5m2!1sen!2sin" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
const nagarbhaviaddress = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.227363766768!2d77.51824741450136!3d12.957298018698582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dde41c9d541%3A0xdd5400ac1d9e0a9a!2sYSquare%20Academy!5e0!3m2!1sen!2sin!4v1657218870898!5m2!1sen!2sin" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

const loadHeader = (e) => {

  if(header){
    header.innerHTML = `<div class="navbar navbar-fixed-top navigation-bar hidden-xs hidden-md">
    <div class="container">
      <div class="col-md-1 logo">
        <object type="image/svg+xml" data="assets/yt_logo_svg.svg" style="width:100%">
          Your browser does not support SVG
        </object>
      </div>
      <div class="col-md-1 logo">
        <img src="./assets/kaushalya.jpg" alt="kaushalya" style="width:100%">
      </div>
      <ul class="nav navbar-nav navbar-right">
        <li class=${window.location.href.indexOf('index') !== -1 ? "active": ''}><a href="./index.html">Home</a></li>
        <li class=${window.location.href.indexOf('skilldevelopment') !== -1 ? "active": ''}><a href="./skilldevelopment.html">Skill Development</a></li>
        <li class=${window.location.href.indexOf('hiringandplacements') !== -1 ? "active": ''}><a href="./hiringandplacements.html">Hiring And Recruitment</a></li>
        <li class=${window.location.href.indexOf('softwaredevelopment') !== -1 ? "active": ''}><a href="./softwaredevelopment.html">Software Development</a></li>
        <li class=${window.location.href.indexOf('contactus') !== -1 ? "active": ''}><a href="./contactus.html">Contact Us</a></li>
      </ul>
    </div>
  </div>
`;
  }
}

const loadContactCard = (e) => {
  if(contactCard){
    contactCard.innerHTML=` <div class="row">
    <div class="col-xs-12">
      <h4 class="subHeading">
        <span class="btn-action-outline-rounded glyphicon glyphicon-envelope">
        </span>&nbsp;
        ysquare.33@gmail.com
      </h4>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <h4 class="subHeading">
        <span class="btn-action-outline-rounded glyphicon glyphicon-earphone">
        </span>&nbsp;
        9008811833 / 9742512616
      </h4>
    </div>`;
  }
}


const loadFooter = (e) => {
  footer.innerHTML = `<div class='container-fluid copyright'>
  <div class="row">
    <div class='col-md-offset-1 col-md-3 map-card'>
     ${ramnagarGoogleMap}
      <p>
        GNR Arcade,
        First Floor, Above RBL Bank,
        Next to Royal Enfield Show Room,
        BM Road, Ramanagara-562159
      </p>
    </div>
    <div class='col-md-offset-1 col-md-3 map-card'>
      ${nagarbhaviaddress}
      <p>
        No.111, Ground Floor,
        Yuktha Yuvaanika,
        7th Main, B.C.H.E Society,
        Vidyagiri Layout, Nagarabhavi,
        Bengaluru-560072
      </p>
    </div>
  </div>
</div>`
};




// const loadFooter = (e) => {
//     footer.innerHTML = `<div class='container'>
//     <div class='row'>
//       <div class='col-xs-9 copyright'>
//        <div class="row">
//             <div class='col-xs-offset-1 col-xs-5'>
//             Y Square Academy Pvt Ltd
// GNR Arcade,
// First Floor, Above RBL Bank,
// Next to Royal Enfield Show Room,
// BM Road, Ramanagara-562159 
// Karnataka
// ${ramnagarGoogleMap}
//             </div>
//             <div class='col-xs-offset-1 col-xs-5'>
//             No.111, Ground Floor,
// Yuktha Yuvaanika,
// 7th Main, B.C.H.E Society,
// Vidyagiri Layout, Nagarabhavi, 
// Bengaluru-560072
// Karnataka 
// ${nagarbhaviaddress}
//             </div>
//         </div>
//         &COPY; Y Square Techno Hub, All Rights Reserved
//       </div>
//       <div class='col-xs-3 social-icon'>
//         <div class='linkedin'>
//           <a href='#'>
//             <span class='fa fa-linkedin '></span>
//           </a>
//         </div>
//         <div class='fb'>
//           <a href='#'>
//             <span class='fa fa-facebook'></span>
//           </a>
//         </div>
//         <div class='insta'>
//           <a href='#'>
//             <span class='fa fa-instagram'></span>
//           </a>
//         </div>
//       </div>
//     </div>
//    </div>`
// };



window.addEventListener ?
    window.addEventListener("load", (e) => {
      loadHeader(e);
        loadContactCard(e);
        loadFooter(e);
    }, false) :
    window.attachEvent && window.attachEvent("onload", (e) => {
      loadHeader(e);
        loadContactCard(e);
        loadFooter(e);
    });