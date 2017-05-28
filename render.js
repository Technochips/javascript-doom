class Render
{
	constructor(canvasId)
	{
		this.canvas = document.getElementById(canvasId);
		this.graph = this.canvas.getContext("2d");
		
		this.width = this.canvas.width;
		this.height = this.canvas.height;
		
		this.graph.fillStyle = "#000000";
		this.graph.fillRect(0, 0, this.width, this.height);
		this.graph.fillStyle = "#FFFFFF";
		this.graph.font = "12px sans-serif";
		this.graph.fillText("Waiting game to draw...", 5, 15);
	}
	draw()
	{
		this.graph.save();
		this.graph.setTransform(1, 0, 0, 1, 0, 0);
		this.graph.clearRect(0, 0, this.width, this.height);
		this.graph.restore();
		this.graph.fillStyle = "#000000";
		this.graph.fillRect(0, 0, this.width, this.height);
	}
}