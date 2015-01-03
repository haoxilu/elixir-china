// Generated by CoffeeScript 1.8.0
$(function() {
  $(".last_active_time").each(function() {
    var day, hour, min, month, offset, self, user, utc, year;
    self = $(this);
    year = self.data('year');
    month = self.data('month');
    day = self.data('day');
    hour = self.data('hour');
    min = self.data('min');
    user = self.data('user');
    utc = new Date(year, month - 1, day, hour, min, 0);
    offset = new Date().getTimezoneOffset();
    utc.setMinutes(utc.getMinutes() - offset);
    return self.html("" + user + " 于 " + (utc.getFullYear()) + "-" + (utc.getMonth() + 1) + "-" + (utc.getDate()) + " " + (utc.getHours()) + "点" + (utc.getMinutes()) + "分 发表");
  });
  return $(".pagination").each(function() {
    var path, self;
    self = $(this);
    path = self.data("path");
    return self.pagination({
      total_pages: parseInt(self.data('pages')),
      current_page: parseInt(self.data('page')),
      callback: function(_event, page) {
        return window.location.replace("" + path + "?page=" + page);
      }
    });
  });
});
