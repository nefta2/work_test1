from fastapi import FastAPI
from fastapi.responses import JSONResponse
import polars as pl

app = FastAPI()

@app.get('/')
async def root():
    return {'example': 'This is an example', 'data': 999}

@app.get('/data_parquet')
async def get_parquet():
    df = pl.read_parquet("vehicle.parquet").to_dicts()
    return df

@app.get('/group_by')
async def get_group():
    

@app.get('/random/{limit}')
async def get_random(limit: int):
    rn:int = random.randint(0, limit);
    return {'number': rn, 'limit':limit}

#parquet_read = pl.read_parquet("vehicle.parquet")

#print(parquet_read)

#Fast api takes data from parquet and then send it as a dictionary to Frontend

