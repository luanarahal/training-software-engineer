from datetime import datetime

day = datetime.now().strftime('%d')
month = datetime.now().strftime('%m')
year = datetime.now().strftime('%y')
weekday = datetime.now().strftime('%A')

print(day)
print(month)
print(year)
print(weekday)
