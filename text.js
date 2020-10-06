SELECT  
customer.id ,  
customer.first_name,
customer.last_name,
payment.id ,  
payment.amount,
payment.customer_id,
FROM  customer  INNER JOIN  payment  ON  customer.id  =  payment.payment_id  ORDER BY  payment.amount ;

