from datetime import datetime

now = datetime.today().strftime('%d/%m/%Y %H:%M:%S')

def print_current_date(date):
    print(date)

print_current_date(now)
