$.ajax({
  url: 'https://randomuser.me/api/?results=10',
  type: 'GET',
  success: function(data){
	console.log('data received',data);
    $("#templates").load("template.html"); 
	widgetUsersContainer = $("#template-users").html();
	widgetUsersContainerTemplate = Handlebars.compile(widgetUsersContainer);
	widgetUsersContainerTemplateHtml = widgetUsersContainerTemplate(data);
	$("#users-placeholder").html(widgetUsersContainerTemplateHtml);
  }
 });


