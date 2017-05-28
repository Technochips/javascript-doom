class Thing
{
	constructor(x, y, direction, type, flags)
	{
		this.x = x;
		this.y = y;
		this.direction = direction;
		this.type = type;
		this.flags = flags
	}
}
class Linedef
{
	constructor(vert1, vert2, flags, special, sector_tag, front, back)
	{
		this.vert1 = vert1;
		this.vert2 = vert2;
		this.flags = flags;
		this.special = special;
		this.sector_tag = sector_tag;
		this.front = front;
		this.back = back;
	}
}
class Vertex
{
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
	}
}
class Maps
{
	constructor(things, linedefs, vertexes)
	{
		this.things = things;
		this.linedefs = linedefs;
		this.vertexes = vertexes;
	}
}