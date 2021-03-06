dim = 80
dim3 = dim/3
function drawMonths(year, months, monthsVec) {
  for (var m=0; m < months.length; m++) {
    drawMonth((dim*5+50)*m,10, year, months[m], monthsVec[m])
  }
}
function drawMonth(x, y, year, month, monthVec) {
  dispMonthLabel(x+(5*dim)/2, y, month)
  dispWeekDays(x+dim/2,40+y)
  var m = new Month(x, 60+y, monthVec)
}
function Month(x, y, vec) {
  this.weeks = []
  for (var w=0; w < 4; w++) {
    this.weeks.push(new Week(x, y+w*dim, vec[w]))
  }
} 
function Week(x, y, vec) {
  this.days = []
  for (var d=0; d <5; d++) {
    this.days.push(new Day(x+dim*d, y, vec[d]))
  }
}
function Day(x, y, d) {
  var self = this
  if (d>0){
    dispDayLabel(x, y, d)
    this.group = draw.group()
    this.r1 = new Cell(dim,dim3)
    this.r2 = new Cell(dim,dim3,0,dim3)
    this.r3 = new Cell(dim,dim3-10, 0, dim3*2)
    this.group.add(this.r1.r)
    this.group.add(this.r2.r)
    this.group.add(this.r3.r)
    this.group.translate(x,y)
  }
}
function Cell(w, h, x, y) {
  var self = this
  this.w = h; this.h = h; this.x = x; this.y = y
  this.r = draw.rect(w-3,h)
  this.r.attr("stroke-width", 1)
  this.r.fill("white")
  this.r.opacity(0.8)
  this.r.translate(x,y)
  this.state = false
  this.toggle = function () {this.state = ! this.state}
  this.r.click(function(){
    if (!self.state) {this.fill({ color: '#f06' })}
    else {this.fill('white')}
    self.toggle()})
  this.r.mouseover(function(){
    this.fill({ color: '#f06' })})
  this.r.mouseout(function(){
    if (!self.state) {this.fill('white')}
    else {this.fill({ color: '#f06' })}
  })
}


function dispMonthLabel(x,y, month) {
  var text = draw.text(json.abbrev.mois[month-1]).move(x,y)
  text.font({
    family:   'Helvetica'
    , size:     20
    , anchor:   'middle'
    , leading:  '1.5em'
  })
}

function dispWeekDays(x,y) {
  for (var d=0; d <5; d++) {
    var text = draw.text(json.abbrev.jours[d]).move(x+d*dim,y)
    text.font({
      family:   'Helvetica'
      , size:     12
      , anchor:   'middle'
      , leading:  '1.5em'
    })
  }
}

function dispDayLabel(x, y, d) {
  var text = draw.text(d.toString()).move(x+dim/2,y)
  text.font({
    family:   'Helvetica'
    , size:     36
    , anchor:   'middle'
    , leading:  '1.5em'
  })
}

