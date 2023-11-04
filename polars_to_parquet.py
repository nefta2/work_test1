import polars as pl

pl.scan_csv("vehicle.csv").sink_parquet("vehicle.parquet")