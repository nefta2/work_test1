import polars as pl

df=pl.scan_csv("vehicle.csv").collect()
df_dropped = df.drop_nulls()

df_dropped.write_parquet("vehicle.parquet")