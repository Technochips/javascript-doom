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

		this.camera_x = 0;
		this.camera_y = 0;

		this.follow = true;
	}
	draw(map)
	{
		this.graph.save();
		this.graph.setTransform(1, 0, 0, 1, 0, 0);
		this.graph.clearRect(0, 0, this.width, this.height);
		this.graph.restore();
		this.graph.fillStyle = "#000000";
		this.graph.fillRect(0, 0, this.width, this.height);
		for(var i = 0; i < map.things.length; i++)
		{
			var thing = map.things[i];

			if(this.follow)
			{
				this.camera_x = thing.x;
				this.camera_y = thing.y;
			}

			if(thing.type = 1)
			{
				this.graph.strokeStyle = "#FFFFFF";
				this.graph.beginPath();
				this.graph.moveTo(thing.x - this.camera_x + (this.width / 2), thing.y + 2 - this.camera_y + (this.height / 2));
				this.graph.lineTo(thing.x - this.camera_x + (this.width / 2), thing.y - 2 - this.camera_y + (this.height / 2));
				this.graph.stroke();
				this.graph.beginPath();
				this.graph.moveTo(thing.x + 2 - this.camera_x + (this.width / 2), thing.y - this.camera_y + (this.height / 2));
				this.graph.lineTo(thing.x - 2 - this.camera_x + (this.width / 2), thing.y - this.camera_y + (this.height / 2));
				this.graph.stroke();
			}
		}

		for(var i = 0; i < map.linedefs.length; i++)
		{
			var linedef = map.linedefs[i];
			var vert1 = map.vertexes[linedef.vert1];
			var vert2 = map.vertexes[linedef.vert2];
			this.graph.strokeStyle = "#FF0000";
			this.graph.beginPath();
			this.graph.moveTo(vert1.x - this.camera_x + (this.width / 2), vert1.y - this.camera_y + (this.height / 2));
			this.graph.lineTo(vert2.x - this.camera_x + (this.width / 2), vert2.y - this.camera_y + (this.height / 2));
			this.graph.stroke();
		}
	}
}