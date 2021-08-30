# 기본 필드  
username	Text 	
email	Email 	
provider	Text 	
password	Password 	
resetPasswordToken	Text 	
confirmationToken	Text  
confirmed	Boolean 	
blocked	Boolean 	
role Relation with Role  

# 추가 필드  
nickname	Text 	Unique Require(Not Null)  
profile_image	Text 	
point	Number 
greeting	Long Text 		
device_type	Text 		
device_token	Text 	
access_token	Text 	
refresh_token	Text 	
refresh_token_expire	Text 	
phone	Text 	
os	Text 	
device	Text 	
last_logined_ip	Text 	
gender	Text 	
phone_verified_at	Datetime 	
last_logined_at	Datetime 	
deleted_at	Datetime  
birth	Datetime 	


socket_status	Text 	
socket_room	Text 	
socket_id	Text  