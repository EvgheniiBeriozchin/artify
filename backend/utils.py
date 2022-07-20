import yaml

SETUP_FILE = "../setup.yaml"

def get_db_uri():
    with open(SETUP_FILE, "r") as f:
        vars = yaml.safe_load(f)
        return vars["PSQL_URI"]