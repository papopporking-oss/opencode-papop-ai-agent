import os
from dotenv import load_dotenv
from psycopg_pool import ConnectionPool

uri = os.getenv("TSPGOPENCODE2")

if not uri:
    raise RuntimeError("Is not configured")

pool = ConnectionPool(
    conninfo=uri,
    min_size=1,
    max_size=10,
    timeout=10,
    open=True,
)