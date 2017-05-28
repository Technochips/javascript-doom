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
	draw(map)
	{
		this.graph.save();
		this.graph.setTransform(1, 0, 0, 1, 0, 0);
		this.graph.clearRect(0, 0, this.width, this.height);
		this.graph.restore();
		this.graph.fillStyle = "#000000";
		this.graph.fillRect(0, 0, this.width, this.height);
		for(var i = 0; i < map.linedefs.length; i++)
		{
			var linedef = map.linedefs[i];
			var vert1 = map.vertexes[linedef.vert1];
			var vert2 = map.vertexes[linedef.vert2];
			this.graph.strokeStyle = "#FF0000";
			this.graph.beginPath();
			this.graph.moveTo(vert1.x, vert1.y);
			this.graph.lineTo(vert2.x, vert2.y);
			this.graph.stroke();
		}
		for(var i = 0; i < map.things.length; i++)
		{
			var thing = map.things[i];
			if(thing.type = 1)
			{
				this.graph.strokeStyle = "#FFFFFF";
				this.graph.beginPath();
				this.graph.moveTo(thing.x, thing.y + 2);
				this.graph.lineTo(thing.x, thing.y - 2);
				this.graph.stroke();
				this.graph.beginPath();
				this.graph.moveTo(thing.x + 2, thing.y);
				this.graph.lineTo(thing.x - 2, thing.y);
				this.graph.stroke();
				if(map.things[i].direction >= 359)
					map.things[i].direction = 0;
				else
					map.things[i].direction++;
			}
		}
	}
}