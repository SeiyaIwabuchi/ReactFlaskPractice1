import datetime
from datetime import date
class Debug:
    showDatetime = True
    @staticmethod
    def log(msg):
        print("[{}]\t".format(datetime.datetime.now()),end="")
        print(msg)