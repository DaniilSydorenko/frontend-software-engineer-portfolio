import * as $ from 'jquery';
import * as typelessPackage from 'wowjs';
import { WOW } from 'wowjs/dist/wow';
new WOW().init();
import * as vide from 'vide';


/**
 * ==============================================================
 * On page load
 * ==============================================================
 */
$(document).ready(function () {
  /**
   * Init application
   */
  App.init();
});

/**
 * Basic application object
 * Has all needed functionality:
 *  - Video bg
 *  - Header
 *  - Timeline
 *  - Projects
 **/

const App = {

  /* DOM selectors */
  html: $('html'),
  body: $('body'),
  header: $('.header'),
  footer: $('.footer'),
  cookies: $('.cookies'),
  bgSide: $('.bg-side'),
  imgFix: $('.img-fix'),
  mobileWidth: window.matchMedia("(max-width: 767px)"),

  /* Components */
  hamburger: $(".menu-btn-wrapper"),

  /* Viewport/Window params */
  ih: window.innerHeight,
  oh: window.outerHeight,
  iw: window.innerWidth,
  ow: window.outerWidth,

  /* Const values */
  shrinkHeader: 700,

  /* Timeline */
  timelineBlock: $('.cd-timeline-block'),
  timelineContent: $('.cd-timeline-content'),
  timelineImg: $('.cd-timeline-img'),
  timelineOffset: 0.8,

  /* Contact form */
  inputField: $(".input-field"),

  /**
   * Video background
   */
  // scaleVideoContainer: function () {
  //   const height = App.ih + 5;
  //   const unitHeight = parseInt(height) + 'px';
  //   $('.homepage-hero-module').css('height', unitHeight);
  // },
  //
  // initBannerVideoSize: function (element) {
  //   $(element).each(function () {
  //     $(this).data('height', $(this).height());
  //     $(this).data('width', $(this).width());
  //   });
  //   this.scaleBannerVideoSize(element);
  // },
  //
  // scaleBannerVideoSize: function (element) {
  //   var windowWidth = App.iw,
  //     windowHeight = App.ih + 5,
  //     videoWidth,
  //     videoHeight;
  //
  //   $(element).each(function () {
  //     var videoAspectRatio = $(this).data('height') / $(this).data('width');
  //
  //     $(this).width(windowWidth);
  //
  //     if (windowWidth < 1000) {
  //       videoHeight = windowHeight;
  //       videoWidth = videoHeight / videoAspectRatio;
  //       $(this).css({'margin-top': 0, 'margin-left': -(videoWidth - windowWidth) / 2 + 'px'});
  //
  //       $(this).width(videoWidth).height(videoHeight);
  //     }
  //
  //     $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
  //
  //   });
  // },


  /**
   * On Action Initialization
   */
  init: function () {
    /**
     * Wow init
     */
    new WOW().init();

    /**
     * Video background
     */
    $('#myBlock').vide({
      mp4: 'assets/video/MP4/Aloha-Mundo.mp4',
      webm: 'assets/video/WEBM/Aloha-Mundo.webm',
      poster: 'assets/img/snapshot/Aloha-Mundo.jpg'
    }, {
      volume: 1,
      playbackRate: 1,
      muted: true,
      loop: true,
      autoplay: true,
      position: '0% 50%', // Similar to the CSS `background-position` property.
      posterType: 'detect', // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
      resizing: true, // Auto-resizing, read: https://github.com/VodkaBears/Vide#resizing
      bgColor: 'transparent', // Allow custom background-color for Vide div,
      className: '' // Add custom CSS class to Vide div
    });
  }
};
