-- Q1: Total sales revenue by product category for each month
USE retail_dw;
SELECT 
    d.year,
    d.month,
    p.category,
    SUM(f.total_revenue) AS total_monthly_revenue
FROM 
    retail_dw.fact_sales f
JOIN 
    dim_product p ON f.product_key = p.product_key
JOIN 
    dim_date d ON f.date_key = d.date_key
GROUP BY 
    d.year, d.month, p.category
ORDER BY 
    d.year, d.month, total_monthly_revenue DESC;
    
    