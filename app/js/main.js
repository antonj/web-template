require.config({
  paths: {
    jquery: 'libs/jquery/jquery.min',
    underscore: 'libs/underscore/underscore-min'
  },
  shim: {
    jquery : {
      exports: 'jquery'
    },
    underscore : {
      exports: '_'
    }
  }
});

require(['slide-cof',
         'jquery',
         'underscore',
         'hej'],
        init);
function init(SlideHandler, $, _, hej) {
  console.log('Using jquery', $().jquery);
  $(function() {
    console.log('loaded');    
  });
};
