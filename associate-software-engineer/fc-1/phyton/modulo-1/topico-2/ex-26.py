from datetime import datetime

date1 = datetime.strptime('2023-09-30', '%Y-%m-%d')
date2 = datetime.strptime('2023-09-20', '%Y-%m-%d')
difference = date1 - date2

print(difference.days)
