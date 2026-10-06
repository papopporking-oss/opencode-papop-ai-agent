curl -LsSf https://astral.sh/uv/install.sh | sh
uv --version

python3.12 -m venv .venv
source .venv/bin/activate

# API
pip3.12 install "fastapi[standard]"
pip3.12 install uvicorn

pip3.12 install opencv-python

# AI
pip3.12 install ultralytics

# Database
pip3.12 install "psycopg[binary,pool]"

# ENV
pip3.12 install python-dotenv

pip freeze > requirements.txt

# Run
fastapi dev main.py

# Run production
uvicorn main:app --host 0.0.0.0 --port 8080