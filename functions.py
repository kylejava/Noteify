import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
server.login("email1", "password")
message = MIMEMultipart("alternative")
message["Subject"] = "multipart test"
message["From"] = "email1"
message["To"] =  "email2"

# Create the plain-text and HTML version of your message
text = """\
Hi,
How are you?
Real Python has many great tutorials:
www.realpython.com
Hello World!!!
"""
html = """\
<html>
  <body>
    <h1>Hi,<br>
       How are you?<br>
       <a href="http://www.realpython.com">Real Python</a>
       has many great tutorials.
    </h1>
    <h2 style="color:red";>
        Hello World!!!
    </h2>
  </body>
</html>
"""

# Turn these into plain/html MIMEText objects
part1 = MIMEText(text, "plain")
part2 = MIMEText(html, "html")

# Add HTML/plain-text parts to MIMEMultipart message
# The email client will try to render the last part first
message.attach(part1)
message.attach(part2)
server.sendmail(
  "email1",
  "email2",
  message.as_string())
server.quit()
