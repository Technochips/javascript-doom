class Game
{
	constructor(canvasId)
	{
		this.map = new Maps([
			new Thing(10, 10, 0, 1, 0)],[
			new Linedef(0, 1, 1, 0, 0, 0, 0),
			new Linedef(1, 2, 1, 0, 0, 0, 0),
			new Linedef(0, 3, 1, 0, 0, 0, 0),
			new Linedef(2, 4, 1, 0, 0, 0, 0),
			new Linedef(3, 4, 1, 0, 0, 0, 0)],[
			new Vertex(5, 15),
			new Vertex(5, 5),
			new Vertex(15, 5),
			new Vertex(15, 15),
			new Vertex(20, 10)]);
		this.render = new Render(canvasId);
	}
}
var game = new Game("game");
