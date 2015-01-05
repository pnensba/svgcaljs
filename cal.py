# -*- mode: python; coding: utf-8; python-indent: 2-*-
import pico
import calendar
import datetime
import json


today = datetime.date.today()
JOURS = 'lu', 'ma', 'me', 'je', 've', 'sa', 'di'
MOIS = 'jan', 'fev', 'mars', 'avril', 'mai', 'juin', 'juil', 'aout', 'sept', 'oct', 'nov', 'dec'

sem1 = 'oct', 'nov', 'dec'
sem2 = 'fev', 'mars', 'avril'



def outputJSON(obj):
  if isinstance(obj, datetime.datetime):
    if obj.utcoffset() is not None:
      obj = obj - obj.utcoffset()
    return obj.strftime('%Y-%m-%d %H:%M:%S.%f')
  return str(obj)

def inputJSON(obj):
  newDic = {}
  for key in obj:
    try:
      if float(key) == int(float(key)):
        newKey = int(key)
      else:
        newKey = float(key)
      newDic[newKey] = obj[key]
      continue
    except ValueError:
        pass
    try:
      newDic[str(key)] = datetime.datetime.strptime(obj[key], '%Y-%m-%d %H:%M:%S.%f')
      continue
    except TypeError:
      pass

def getMonths(year, months):
  print year, months
  # read json in python
  if 0:
    with open("cal.json") as json_file:
      json_data = json.load(json_file)
  calmonths = []
  for m in months:
    calmonths.append(calendar.monthcalendar(year, m))
  return [calmonths, year, months]


def pressed(this):
  print this
  return "yes"
