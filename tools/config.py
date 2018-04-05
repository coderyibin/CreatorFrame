import json
from xlsx import xlsx
import sys
import os

curpath = sys.path[0]
curpath = os.path.dirname(curpath)
curpath = os.path.dirname(curpath) 

# curpath = os.path.dirname(curpath) 
# curpath = os.path.dirname(curpath) 

config_json = sys.path[0]+ "\\config.json"
# config_json = os.path.dirname(config_json)
# config_json = os.path.dirname(config_json) + "\\config.json"

with open(config_json, "r") as load_f:
    load = json.load(load_f)
    for file in load['table']:
        x = xlsx()
        _file = curpath + "\\Game_Config\\" + file + ".xlsx"
        data = x.read_excel(_file)
        x.write_json(data, file)


