// Reduce function skrollr by darkxee
// origin http://prinzhorn.github.io/skrollr/

function dzxParr(attr) {
  this.ele = attr.ele;
  this.data = attr.data;
  this.run = function () {
    if (this.ele != '') {
      let data = this.data
      for (var k in data) {
        document.getElementById(this.ele).setAttribute('data-' + k, data[k]);
      }
    }

  }; 
}

var pa2 = new dzxParr({
  ele: 'pa2',
  data: {
    0: 'font-size:10px',
    100: 'font-size:100px',
  }
});



pa2.run()

var pa1 = new dzxParr({

})