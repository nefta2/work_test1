from fastapi import FastAPI
from fastapi.responses import JSONResponse
import polars as pl
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
async def root():
    return {'example': 'This is an example', 'data': 999}

@app.get('/data_parquet')
async def get_parquet():
    df = pl.scan_parquet("vehicle.parquet")
    deviation = df.group_by("class").agg(
    pl.col("compactness").std().round(2),
    pl.col("circularity").std().round(2),
    pl.col("distance_circularity").std().round(2),
    pl.col("radius_ratio").std().round(2),
    pl.col("pr.axis_aspect_ratio").std().round(2),
    pl.col("max.length_aspect_ratio").std().round(2),
    pl.col("scatter_ratio").std().round(2),
    pl.col("elongatedness").std().round(2),
    pl.col("pr.axis_rectangularity").std().round(2),
    pl.col("max.length_rectangularity").std().round(2),
    pl.col("scaled_variance").std().round(2),
    pl.col("scaled_variance.1").std().round(2),
    pl.col("scaled_radius_of_gyration").std().round(2),
    pl.col("scaled_radius_of_gyration.1").std().round(2),
    pl.col("skewness_about").std().round(2),
    pl.col("skewness_about.1").std().round(2),
    pl.col("skewness_about.2").std().round(2),
    pl.col("hollows_ratio").std().round(2),
    )
    dictionary = deviation.collect().to_dicts()
    return dictionary

@app.get('/get_med')
async def get_parquet():
    df = pl.scan_parquet("vehicle.parquet")
    mean = df.group_by("class").agg(
    pl.col("compactness").mean().round(2),
    pl.col("circularity").mean().round(2),
    pl.col("distance_circularity").mean().round(2),
    pl.col("radius_ratio").mean().round(2),
    pl.col("pr.axis_aspect_ratio").mean().round(2),

    pl.col("max.length_aspect_ratio").mean().round(2),
    pl.col("scatter_ratio").mean().round(2),
    pl.col("elongatedness").mean().round(2),
    pl.col("pr.axis_rectangularity").mean().round(2),
    pl.col("max.length_rectangularity").mean().round(2),

    pl.col("scaled_variance").mean().round(2),
    pl.col("scaled_variance.1").mean().round(2),
    pl.col("scaled_radius_of_gyration").mean().round(2),
    pl.col("scaled_radius_of_gyration.1").mean().round(2),
    pl.col("skewness_about").mean().round(2),
    
    pl.col("skewness_about.1").mean().round(2),
    pl.col("skewness_about.2").mean().round(2),
    pl.col("hollows_ratio").mean().round(2),
    )
    meanDic = mean.collect().to_dicts()
    return meanDic


#investiga scan y read
@app.get('/random/{limit}')
async def get_random(limit: int):
    rn:int = random.randint(0, limit);
    return {'number': rn, 'limit':limit}

#parquet_read = pl.read_parquet("vehicle.parquet")

#print(parquet_read)

#Fast api takes data from parquet and then send it as a dictionary to Frontend

