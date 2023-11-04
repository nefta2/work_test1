import polars as pl

table = pl.read_csv('vehicle.csv')
print(table)