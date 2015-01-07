# -*- mode: python; coding: utf-8; python-indent: 2-*-
import sys
from oauth2client import client
from googleapiclient import sample_tools


"""
def main(argv):
  # Authenticate and construct service.
  service, flags = sample_tools.init(
    argv, 'calendar', 'v3', __doc__, __file__,
    scope='https://www.googleapis.com/auth/calendar')
  try:
    page_token = None
    while True:
      calendar_list = service.calendarList().list(pageToken=page_token).execute()
      for calendar_list_entry in calendar_list['items']:
        print calendar_list_entry['summary']
      page_token = calendar_list.get('nextPageToken')
      if not page_token:
          break
  except client.AccessTokenRefreshError:
    print ('The credentials have been revoked or expired, please re-run'
           'the application to re-authorize.')

if __name__ == '__main__':
  main(sys.argv)
"""


service, flags = sample_tools.init('','calendar','v3','','',scope='https://www.googleapis.com/auth/calendar')
cl = service.calendarList().list(pageToken=None).execute()

# recurring
e = {'attendees': [{'email': 'pnensba@gmail.com'}],
     'end': {'dateTime': '2011-06-03T10:25:00.000-07:00',
             'timeZone': 'America/Los_Angeles'},
     'location': 'Somewhere',
     'recurrence': ['RRULE:FREQ=WEEKLY;UNTIL=20110701T170000Z'],
     'start': {'dateTime': '2011-06-03T10:00:00.000-07:00',
               'timeZone': 'America/Los_Angeles'},
     'summary': 'Appointment'}
# single
e = {'attendees': [{'email': 'pnensba@gmail.com'}],
     'start': {'dateTime': '2015-01-07T3:00:00.000', 'timeZone':'Europe/Paris'},
     'end': {'dateTime': '2015-01-07T10:25:00.000', 'timeZone':'Europe/Paris'},
     'location': 'aux lilas',
     'summary': 'coucou'}


recurring_event = service.events().insert(calendarId='1bjmmkqoc7gdnjpsaok4chr0a0@group.calendar.google.com', body=e).execute()
