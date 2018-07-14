const htmlContent = `
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
<link href="https://vevo.com/nucleus/css/browser.91ca590c3ec980088da2385d1346d9e9.css" rel="stylesheet"/>
<div class="wrapper">
  <p style="color:blue; fontSize:large">Wheel HTML</p>
  <div class="wheel">
    <div class="beforeWheel">
      <div class="innerWheel">
        <div class="sec one"><span></span></div>
        <div class="sec two"><span></span></div>
        <div class="sec three"><span></span></div>
        <div class="sec four"><span></span></div>
        <div class="sec five"><span></span></div>
        <div class="sec six"><span></span></div>
        <div class="sec seven"><span></span></div>
        <div class="sec eight"><span></span></div>
      </div>
    </div>
    <div class="spin">
      <div class="innerSpin"></div>
    </div>
    <div class="shine"></div>
  </div>
  <div class="txt"></div>
</div>
`
const tagStyles = {
  body: {
    background: '#eaeaea',
    color: '#fff',
    fontSize:'18px',
    fontFamily: 'Exo 2',
  },
  a: {
    color: '#34495e',
  }
}

const classesStyles = {
  blue: {
    color: 'blue'
  },
    /*WRAPPER*/
  // txt: {
  //   color: '#eaeaea',
  // },

    /*WHEEL*/
  wheel: {
    width: 250,
    height: 250,
    borderRadius: 250,
    position: 'relative',
    overflow: 'hidden',
    borderColor: '#fff',
    borderWidth: 8,
    shadowOffset: {  width: 10,  height: 10},
    shadowColor: 'rgba(0,0,0,0.2)',
    backgroundColor: 'red',
  },
  beforeWheel: {
      position:'absolute',
      borderWidth: 4,
      borderColor: 'rgba(0,0,0,0.1)',
      width: 242,
      height: 242,
      borderRadius: 242,
      zIndex: 1000,
  },
  innerWheel: {
      width: 250,
      height: 100,
      WebkitTransition: 'all 6s cubic-bezier(0,.99,.44,.99)',
      MozTransition: 'all 6 cubic-bezier(0,.99,.44,.99)',
      OTransition: 'all 6s cubic-bezier(0,.99,.44,.99)',
      MsTransition: 'all 6s cubic-bezier(0,.99,.44,.99)',
      transition: 'all 6s cubic-bezier(0,.99,.44,.99)',
    },
  sec: {
      position: 'absolute',
      width: 0,
      height: 0,
      borderRightWidth: 50,
      borderBottomWidth: 100,
      borderLeftWidth: 50,
      borderColor: '#19c',
      left: 50,
      top:-4,
      opacity:1,
      transform: [{rotate: '60deg'}],
    },
    // six: {
    //   transform: [{rotateX: '270deg'}],
    // //   WebkitTransition: 'rotate(270deg)',
    // //   MozTransition: 'rotate(270deg)',
    // // //OTransition: rotate(270deg),
    // // // -ms-transform: rotate(270deg),
    //   borderColor: '#c0392b',
    // }
}
// }
  //
  //   #wheel div.sec:nth-child(1){
  //   transform: rotate(45deg);
  //   -webkit-transform: rotate(45deg);
  //   -moz-transform: rotate(45deg);
  //   -o-transform: rotate(45deg);
  //   -ms-transform: rotate(45deg);
  //   border-color: #16a085 transparent;
  //   }
  //   #wheel div.sec:nth-child(2){
  //   transform: rotate(90deg);
  //   -webkit-transform: rotate(90deg);
  //   -moz-transform: rotate(90deg);
  //   -o-transform: rotate(90deg);
  //   -ms-transform: rotate(90deg);
  //   border-color: #2980b9 transparent;
  //   }
  //   #wheel div.sec:nth-child(3){
  //   transform: rotate(135deg);
  //   -webkit-transform: rotate(135deg);
  //   -moz-transform: rotate(135deg);
  //   -o-transform: rotate(135deg);
  //   -ms-transform: rotate(135deg);
  //   border-color: #34495e transparent;
  //   }
  //   #wheel div.sec:nth-child(4){
  //   transform: rotate(180deg);
  //   -webkit-transform: rotate(180deg);
  //   -moz-transform: rotate(180deg);
  //   -o-transform: rotate(180deg);
  //   -ms-transform: rotate(180deg);
  //   border-color: #f39c12 transparent;
  //   }
  //   #wheel div.sec:nth-child(5){
  //   transform: rotate(225deg);
  //   -webkit-transform: rotate(225deg);
  //   -moz-transform: rotate(225deg);
  //   -o-transform: rotate(225deg);
  //   -ms-transform: rotate(225deg);
  //   border-color: #d35400 transparent;
  //   }
  //
 //  seven{
 //  transform: rotate(315deg),
 //  -webkit-transform: rotate(315deg),
 //  -moz-transform: rotate(315deg),
 //  -o-transform: rotate(315deg),
 //  -ms-transform: rotate(315deg),
 //  border-color: #953daf transparent
 //  }
 // eight{
 //  transform: rotate(360deg),
 //  -webkit-transform: rotate(360deg),
 //  -moz-transform: rotate(360deg),
 //  -o-transform: rotate(360deg),
 //  -ms-transform: rotate(360deg),
 //  border-color: #b2cc5f transparent
 //  }
 //  #wheel div.sec .fa{
 //  margin-top: -100,
 //  color: rgba(0,0,0,0.2),
 //  position: 'relative',
 //  z-index: 10000000,
 //  display: 'block',
 //  text-align: 'center',
 //  font-size:36,
 //  margin-left:-15,
 //  text-shadow: rgba(255, 255, 255, 0.1) 0 -1 0, rgba(0, 0, 0, 0.2) 0 1 0,
 //  }
 //  spin{
 //  width:68,
 //  height:68,
 //  position:'absolute',
 //  top:50%,
 //  left:50%,
 //  margin:-34 0 0 -34,
 //  border-radius:50%,
 //  box-shadow:rgba(0,0,0,0.1) 0 3 0,
 //  z-index:1000,
 //  background:'#fff',
 //  cursor:'pointer',
 //  font-family: 'Exo 2', sans-serif,
 //  -webkit-user-select: none,
 //  -moz-user-select: none,
 //  -ms-user-select: none,
 //  -o-user-select: none,
 //  user-select: none,
 //  }
 //  spinAfter{
 //  content:"SPIN",
 //  text-align:'center',
 //  line-height:68,
 //  color:'#CCC',
 //  text-shadow: 0 2 0 #fff, 0 -2 0 rgba(0,0,0,0.3) ,
 //  position: 'relative',
 //  z-index: 100000,
 //  width:68,
 //  height:68,
 //  display:'block',
 //  }
 //  spinBefore{
 //  content:"",
 //  position:'absolute',
 //  width: 0,
 //  height: 0,
 //  border-style: 'solid',
 //  border-width: 0 20 28 20,
 //  border-color: transparent transparent #ffffff transparent,
 //  top:-12,
 //  left:14,
 //  }
 //  innerSpin{
 //  width:54,
 //  height:54,
 //  position:'absolute',
 //  top:50%,
 //  left:50%,
 //  margin:-27 0 0 -27,
 //  border-radius:50%,
 //  background:'red',
 //  z-index:999,
 //  box-shadow:rgba(255,255,255,1) 0 -2 0 inset, rgba(255,255,255,1) 0 2 0 inset,  rgba(0,0,0,0.4) 0 0 5 ,
 //  background: rgb(255,255,255), /* Old browsers */
 //  background: -moz-radial-gradient(center, ellipse cover,  rgba(255,255,255,1) 0%, rgba(234,234,234,1) 100%), /* FF3.6+ */
 //  background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,rgba(255,255,255,1)), color-stop(100%,rgba(234,234,234,1))), /* Chrome,Safari4+ */
 //  background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,255,255,1) 0%,rgba(234,234,234,1) 100%), /* Chrome10+,Safari5.1+ */
 //  background: -o-radial-gradient(center, ellipse cover,  rgba(255,255,255,1) 0%,rgba(234,234,234,1) 100%), /* Opera 12+ */
 //  background: -ms-radial-gradient(center, ellipse cover,  rgba(255,255,255,1) 0%,rgba(234,234,234,1) 100%), /* IE10+ */
 //  background: radial-gradient(ellipse at center,  rgba(255,255,255,1) 0%,rgba(234,234,234,1) 100%), /* W3C */
 //  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#eaeaea',GradientType=1 ), /* IE6-9 fallback on horizontal gradient */
 //  }
 //  #spin:active #inner-spin{
 //  box-shadow:rgba(0,0,0,0.4) 0px 0px 5px inset;
 //  }
 //  #spin:active:after{
 //  font-size:15,
 //  }
 //  shine{
 //  width:250,
 //  height:250,
 //  position:'absolute',
 //  top:0,
 //  left:0,
 //  background: -moz-radial-gradient(center, ellipse cover,  rgba(255,255,255,1) 0%, rgba(255,255,255,0.99) 1%, rgba(255,255,255,0.91) 9%, rgba(255,255,255,0) 100%); /* FF3.6+ */
 //  background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,rgba(255,255,255,1)), color-stop(1%,rgba(255,255,255,0.99)), color-stop(9%,rgba(255,255,255,0.91)), color-stop(100%,rgba(255,255,255,0))); /* Chrome,Safari4+ */
 //  background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,255,255,1) 0%,rgba(255,255,255,0.99) 1%,rgba(255,255,255,0.91) 9%,rgba(255,255,255,0) 100%); /* Chrome10+,Safari5.1+ */
 //  background: -o-radial-gradient(center, ellipse cover,  rgba(255,255,255,1) 0%,rgba(255,255,255,0.99) 1%,rgba(255,255,255,0.91) 9%,rgba(255,255,255,0) 100%); /* Opera 12+ */
 //  background: -ms-radial-gradient(center, ellipse cover,  rgba(255,255,255,1) 0%,rgba(255,255,255,0.99) 1%,rgba(255,255,255,0.91) 9%,rgba(255,255,255,0) 100%); /* IE10+ */
 //  background: radial-gradient(ellipse at center,  rgba(255,255,255,1) 0%,rgba(255,255,255,0.99) 1%,rgba(255,255,255,0.91) 9%,rgba(255,255,255,0) 100%); /* W3C */
 //  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
 //  opacity:0.1;
 //  }
 //  /*ANIMATION*/
 //  @-webkit-keyframes hh {
 //  0%, 100%{
 //    transform: rotate(0deg);
 //    -webkit-transform: rotate(0deg);
 //  }
 //  50%{
 //    transform: rotate(7deg);
 //    -webkit-transform: rotate(7deg);
 //  }
 //  }
 //  @keyframes hh {
 //   0%, 100%{
 //    transform: rotate(0deg);
 //    -webkit-transform: rotate(0deg);
 //  }
 //  50%{
 //    transform: rotate(7deg);
 //    -webkit-transform: rotate(7deg);
 //  }
 //  }
 //  .spin {
 //  -webkit-animation: hh 0.1s; /* Chrome, Safari, Opera */
 //    animation: hh 0.1s;
 //  }


  module.exports = {
    htmlContent: htmlContent,
    classesStyles: classesStyles,
    tagStyles: tagStyles
  }
