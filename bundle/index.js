"use strict";function setTheme(e,t){$("body").css("background",e.background),$("body").css("color",e.text),$("aside").css("background",e.aside),$("body").css("transition","0.3s"),window.APP_SETTINGS.theme=t}$(document).ready(function(){window.APP_SETTINGS={theme:"light"}}),$("#toggle-light-mode").click(function(){"light"===window.APP_SETTINGS.theme?setTheme({text:"#ffffff",background:"#222222",aside:"#000000"},"dark"):setTheme({text:"#000000",background:"#ffffff",aside:"#eeeeee"},"light")});