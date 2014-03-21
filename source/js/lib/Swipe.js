var Swipe = function (scrollClass)
{
  var
    that = this,
    points = 3,
    deviation = 20;

  this.enabled = true;
  this.Y = [];

  this.move = function (y)
  {
    var
      delta = 0;

    if (this.enabled)
    {
      this.Y.push(y)

      if (this.Y.length == points)
      {
        // calculate

        for (i in this.Y)
        {
          delta += this.Y[i] - this.Y[0];
        }

        if (Math.abs(delta) > deviation)
        {
          scrollClass.scroll(delta);

          this.enabled = false;
        }

        // reset
        this.Y = [];

      }
    }    
  }

  $(window).on('touchmove', function(event)
  {
    var y = event.originalEvent.touches[0].pageY;

    // no device scrolling
    event.preventDefault();

    that.move(y)
  })

  $(window).on('touchend', function(event)
  {
    that.enabled = true;
  });
}