const header= document.querySelector("header");
 window.addEventListener("scroll",function() {
 	header.classList.toggle("sticky",window.scrollY > 0);
 });
  function toggleSearch() {
    var input = document.querySelector('.SearchBox input');
    input.style.width = (input.style.width === '0px' || input.style.width === '') ? '200px' : '0';
  }
  		function filterCourses() {
      var input = document.querySelector('.SearchBox input');
      var filter = input.value.toUpperCase();
      var courses = document.querySelectorAll('.courses-text');

      courses.forEach(function (course) {
        var title = course.querySelector('h3');
        var shouldShow = title.innerText.toUpperCase().indexOf(filter) > -1;

        // Toggle the 'hidden' class based on the filter
        course.parentElement.classList.toggle('hidden', !shouldShow);
      });
    }