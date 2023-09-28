from datetime import date, timedelta

date = date.today()
days_to_add = 10
days = timedelta(days_to_add)
final_date = (date + days).strftime('%d/%m/%Y %H:%M:%S')

print(f"Depois de {days_to_add} dias, a partir de hoje, a data sera:", final_date)
