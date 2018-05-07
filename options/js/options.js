/* =============================================================================

  Product: Scroll To Top Button
  Author: PoziWorld
  Copyright: (c) 2016 PoziWorld
  License: pozitone.com/license

  Table of Contents:

    Listeners

 ============================================================================ */

( function () {
  'use strict';

/* =============================================================================

  Listeners

 ============================================================================ */

  document.addEventListener( 'DOMContentLoaded', function (  ) {
    poziworldExtension.page.init( 'options' );

    const $$translateLink = document.getElementById( 'translateLink' );
    const $$releaseLink = document.getElementById( 'releaseLink' );
    const $$officialWebsiteLink = document.getElementById( 'officialWebsiteLink' );
    const $$translatedBy = document.getElementById( 'translatedBy' );

    if ( document.contains( $$translateLink ) ) {
      $$translateLink.href = 'https://www.transifex.com/poziworld/scroll-to-top-button/';
    }

    if ( document.contains( $$releaseLink ) ) {
      $$releaseLink.href = 'https://github.com/PoziWorld/Scroll-to-Top-Button-Extension/releases';
    }

    if ( document.contains( $$officialWebsiteLink ) ) {
      $$officialWebsiteLink.href = 'https://scroll-to-top-button.com';
    }

    document.getElementById( 'incentivizePaypalLink' ).href = 'https://www.paypal.me/ScrollToTopButton';
    document.getElementById( 'incentivizeSquarecashLink' ).href = 'https://cash.me/$ScrollToTopButton';
    document.getElementById( 'incentivizeCoinbaseLink' ).href = 'https://commerce.coinbase.com/checkout/60af24ed-830b-4ef3-b501-caae08411af5';

    if ( $$translatedBy && $$translatedBy.textContent.length > 1 ) {
      $$translatedBy.hidden = false;
    }
  } );

}() );
