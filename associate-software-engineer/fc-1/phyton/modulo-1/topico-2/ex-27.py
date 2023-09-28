from datetime import date, timedelta

date = date.today()
days = timedelta(10)
date_final = (date + days).strftime('%d/%m/%Y %H:%M:%S')

print("Depois de 10 dias, a partir de hoje, a data sera:", date_final)
