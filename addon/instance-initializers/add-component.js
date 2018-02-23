import Router from "explorviz-frontend/router";

export function initialize(appInstance) {

  const service = appInstance.lookup("service:page-setup");

  if(service){
    service.get("navbarRoutes").push("Colorpicker");
  }

  Router.map(function() {
    this.route("Colorpicker");
  });
}


export default {
  name: 'add-component',
  initialize
};
