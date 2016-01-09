var projects = [];

function Project(opts){
  this.name = opts.name;
  this.description = opts.description;
  this.created = opts.created;
  this.photo = opts.photo;
};

Project.prototype.toHtml = function(){
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');
  $newProject.find('.name').html(this.name);
  $newProject.find('.article-body').html(this.description);
  //$newProject.html('.byline', this.created);
  $newProject.find('.photo').html(this.photo);
  $newProject.find('time[pubdate]').attr('title', this.created);
  $newProject.find('time').html(parseInt((new Date() - new Date(this.created))/60/60/24/1000) + ' days ago');
  $newProject.append('<hr>');
  return $newProject;

};


projectData.sort(function(a,b) {
  return (new Date(b.created)) - (new Date(a.created));
});

projectData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a){
  $('#projects').append(a.toHtml());
});

//$(function() {
  //var $name = $('#name');
//  $name.html(projectData[1].name);
//  var $description = $('#description');
//  $description.append('<p>' + projectData[1].description + '</p>');
//  var $date = $('#date');
//  $date.html(projectData[1].created);
//  var $photo = $('#photo');
//  $photo.html(projectData[1].photo);
//});
