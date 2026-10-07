# Load env
from dotenv import load_dotenv
load_dotenv()

# Database
from database.pgopencode import pool

# FastMCP Client
import asyncio
from fastmcp import Client

client = Client("http://localhost:18000/mcp")

async def call_tool(name: str):
    async with client:
        result = await client.call_tool("greet", {"name": name})
        print(result)

asyncio.run(call_tool("Ford"))