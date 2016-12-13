$(function() {
    $.ajax({
        url: 'https://www.codeschool.com/users/Connectmedica.json',
        dataType: 'jsonp',
        success: function(response) {
            var l = response.courses.completed.length;
            console.log(response.courses.completed[0]);
            for (var i = 0; i < l; i++) {
                var html = "<div class='course'>"
                html += "<h3>" + response.courses.completed[i].title + "</h3>"
                html += "<img src='" + response.courses.completed[i].badge + "' alt='' />"
                html += "<a href='" + response.courses.completed[i].url + "' target='_blank' class='btn btn-primary'>See this course</a>";
                html += "</div>";
                $("#badges").append(html);
            }
        }
    });
});
