import ssl
import certifi
from django.core.mail.backends.smtp import EmailBackend

class CustomEmailBackend(EmailBackend):
    def open(self):
        # Force certifi SSL context before opening connection
        self.ssl_context = ssl.create_default_context(cafile=certifi.where())
        return super().open()