define([], function () {
  var tags_filter = [//'event',
    'speed'
  ];

  return function() {
    if (arguments.length && $.inArray(arguments[0], tags_filter) >= 0) {
      Function.apply.call(console.log, console, arguments);
    }
  };
});
