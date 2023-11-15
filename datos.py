import polars as pl

df=pl.scan_csv("vehicle.csv").collect()#.sink_parquet("vehicle.parquet")
#print(df.filter(pl.col('compactness')>100).collect()))

df_dropped = df.drop_nulls()

mean = df_dropped.group_by("class").agg(
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
meanDic = mean.to_dicts()
print(meanDic)