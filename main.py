from fastapi import FastAPI
import polars as pl

parquet_read = pl.read_parquet("vehicle.parquet")

print(parquet_read)

