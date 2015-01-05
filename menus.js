function makeMenuJson(menuName){
  hmenu = $('<div/>', {id: menuName}).appendTo($("#menus"))
  for (var i=0; i<json[menuName].length; i++){
    entryName = json[menuName][i]
    entryRealName = json["abbrev"][entryName]
    hradio = $('<input/>', {type: "radio", name:menuName, id:entryName}).appendTo(hmenu)
    hlabel = $('<label/>', {for: entryName}).appendTo(hmenu).html(entryRealName)
    hradio.click(function( event ) {
      console.log(event.target.id)
    })
  }
  hmenu.buttonset()
}

