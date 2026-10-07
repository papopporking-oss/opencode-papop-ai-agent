# Run
fastapi dev main.py

# Run production
uvicorn main:app --host 0.0.0.0 --port 8080

# Run MCP Server
fastmcp run main_mcp.py:mcp
fastmcp run main_mcp.py:mcp --transport http --port 18000

# Run MCP Client
python3.12 ./main_mcp_client.py