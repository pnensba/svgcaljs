
function menuDomaines(){
  var name = "domaines"
  var hmenu = $('#'+name)
  for (var i=0; i<json[name].length; i++){
    var entryName = json[name][i]
    var hradio = $('<input/>', {type: "radio", name:name, id:entryName}).appendTo(hmenu)
    $('<label/>', {for: entryName}).appendTo(hmenu).html(entryName)
    hradio.click(function( event ) {
      var name = event.target.id
      console.log("domaine : "+name)
      menuFormations(name)
      menuSalles(name)
    })
  }
  hmenu.buttonset()
}

function menuFormations(domaine){
  var name = "formations"
  var hmenu = $('#'+name)
  hmenu.empty()
  for (var i=0; i<json[name][domaine].length; i++){
    var entryName = json[name][domaine][i]
    var hradio = $('<input/>', {type: "radio", name:name, id:entryName}).appendTo(hmenu)
    $('<label/>', {for: entryName}).appendTo(hmenu).html(entryName)
    hradio.click(function( event ) {console.log("domaine : "+event.target.id)})
  }
  hmenu.buttonset()
}


function menuSalles(domaine){
  var name = "salles"
  var hmenu = $('#'+name)
  hmenu.empty()
  for (var i=0; i<json[name][domaine].length; i++){
    entryName = json[name][domaine][i]
    entryRealName = json["abbrev"][entryName]
    hradio = $('<input/>', {type: "radio", name:name, id:entryName}).appendTo(hmenu)
    hlabel = $('<label/>', {for: entryName}).appendTo(hmenu).html(entryRealName)
    hradio.click(function( event ) {
      console.log(event.target.id)
    })
  }
  hmenu.buttonset()
}

