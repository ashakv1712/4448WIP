class Player {
  constructor(x, y) {
    var options = {
      isStatic: false,
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
    };
    this.body = Bodies.rectangle(x, y, this.height, this.width, options);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = loadImage("images/player.png");
    this.smokeImage = loadImage("images/smoke.png");
    this.trajectory = [];

    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(pos.x, pos.y, 50, 50);
    pop();

    if (this.body.velocity.x > 10 && this.body.position.x > 200) {
      var position = [pos.x, pos.y];
      this.trajectory.push(position);
    }

    for (var i = 0; i < this.trajectory.length; i++) {
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
